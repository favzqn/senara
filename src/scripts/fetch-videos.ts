import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { senaraTVChannels, type TVChannel } from '../data/tv-channels';

interface VideoEntry {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  description: string;
  duration: string;
  url: string;
}

interface OutputData {
  fetchedAt: string;
  channels: Record<string, VideoEntry[]>;
}

function parseXmlEntries(xml: string): Array<{
  videoId: string;
  title: string;
  published: string;
  thumbnail: string;
  description: string;
  durationSeconds: number | null;
  link: string;
}> {
  const entries: Array<{
    videoId: string;
    title: string;
    published: string;
    thumbnail: string;
    description: string;
    durationSeconds: number | null;
    link: string;
  }> = [];

  const entryRegex = /<entry[^>]*>([\s\S]*?)<\/entry>/g;
  let match: RegExpExecArray | null;

  while ((match = entryRegex.exec(xml)) !== null) {
    const block = match[1];

    const videoIdMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = block.match(/<title[^>]*>([^<]+)<\/title>/);
    const publishedMatch = block.match(/<published>([^<]+)<\/published>/);
    const thumbnailMatch = block.match(/<media:thumbnail[^>]+url="([^"]+)"/);
    const descMatch = block.match(/<media:description>([^<]*)<\/media:description>/);
    const durationMatch = block.match(/<yt:duration[^>]+seconds="(\d+)"/);
    const linkMatch = block.match(/<link[^>]+rel="alternate"[^>]+href="([^"]+)"/);

    if (!videoIdMatch || !titleMatch) continue;

    const videoId = videoIdMatch[1].trim();
    const rawTitle = titleMatch[1].trim();
    const title = rawTitle
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    entries.push({
      videoId,
      title,
      published: publishedMatch ? publishedMatch[1].trim() : '',
      thumbnail: thumbnailMatch ? thumbnailMatch[1].trim() : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      description: descMatch ? descMatch[1].trim().substring(0, 150) : '',
      durationSeconds: durationMatch ? parseInt(durationMatch[1], 10) : null,
      link: linkMatch ? linkMatch[1].trim() : `https://www.youtube.com/watch?v=${videoId}`,
    });
  }

  return entries;
}

function formatDuration(secs: number | null, desc: string): string {
  if (secs && secs > 0) {
    const s = Math.floor(secs % 60);
    const m = Math.floor((secs / 60) % 60);
    const h = Math.floor(secs / 3600);
    const pm = h > 0 ? String(m).padStart(2, '0') : String(m);
    const ps = String(s).padStart(2, '0');
    return h > 0 ? `${h}:${pm}:${ps}` : `${pm}:${ps}`;
  }
  const m = desc.match(/(\d+):(\d+)/);
  return m ? `${m[1]}:${m[2]}` : '—';
}

function isShort(entry: { title: string; description: string; durationSeconds: number | null; link: string }): boolean {
  if (entry.durationSeconds && entry.durationSeconds > 0 && entry.durationSeconds <= 90) return true;
  return [entry.title, entry.description, entry.link].some(t => {
    const n = t.toLowerCase();
    return n.includes('/shorts/') || /(^|[\s#/])shorts?\b/.test(n) || n.includes('#short');
  });
}

async function fetchChannelVideos(channel: TVChannel, cachedVideos?: VideoEntry[]): Promise<VideoEntry[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`;

  try {
    const res = await fetch(feedUrl, {
      headers: { Accept: 'application/xml, text/xml' },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      console.warn(`  ⚠ HTTP ${res.status} for ${channel.name}`);
      if (cachedVideos && cachedVideos.length > 0) {
        console.log(`  ↻ Using cached data for ${channel.name}`);
        return cachedVideos.slice(0, channel.maxVideos);
      }
      return [];
    }

    const xml = await res.text();
    const entries = parseXmlEntries(xml);

    const videos: VideoEntry[] = [];

    for (const entry of entries) {
      if (videos.length >= channel.maxVideos) break;
      if (isShort(entry)) continue;

      videos.push({
        id: entry.videoId,
        title: entry.title,
        published: entry.published,
        thumbnail: entry.thumbnail || `https://i.ytimg.com/vi/${entry.videoId}/hqdefault.jpg`,
        description: entry.description,
        duration: formatDuration(entry.durationSeconds, entry.description),
        url: entry.link,
      });
    }

    if (videos.length === 0) {
      console.warn(`  ⚠ No videos parsed for ${channel.name}`);
      if (cachedVideos && cachedVideos.length > 0) {
        console.log(`  ↻ Using cached data for ${channel.name}`);
        return cachedVideos.slice(0, channel.maxVideos);
      }
      return [];
    }

    return videos;
  } catch (err) {
    console.warn(`  ✗ Failed to fetch ${channel.name}: ${(err as Error).message}`);
    if (cachedVideos && cachedVideos.length > 0) {
      console.log(`  ↻ Using cached data for ${channel.name}`);
      return cachedVideos.slice(0, channel.maxVideos);
    }
    return [];
  }
}

async function main(): Promise<void> {
  console.log('Fetching YouTube videos for Senara TV...\n');

  const outPath = resolve(__dirname, '../data/tv-videos.json');
  let existingChannels: Record<string, VideoEntry[]> = {};

  if (existsSync(outPath)) {
    try {
      const raw = readFileSync(outPath, 'utf-8');
      const parsed = JSON.parse(raw);
      existingChannels = parsed.channels || {};
      console.log('  Found existing cached video data\n');
    } catch {}
  }

  const output: OutputData = {
    fetchedAt: new Date().toISOString(),
    channels: {},
  };

  for (const channel of senaraTVChannels) {
    process.stdout.write(`  ${channel.name}... `);
    const cached = existingChannels[channel.id];
    const videos = await fetchChannelVideos(channel, cached);
    output.channels[channel.id] = videos;
    console.log(`${videos.length} videos`);
  }

  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\nSaved to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
