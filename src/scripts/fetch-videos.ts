import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

interface ChannelInput {
  id: string;
  name: string;
  maxVideos: number;
  category: string;
  ageGroup: string;
  accent: string;
  emoji: string;
  focus: string;
  channelUrl: string;
  avatar: string;
  tagline: string;
  lang: 'id' | 'en' | 'ja';
}

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

const channels: ChannelInput[] = [
  {
    id: 'UC_eifcIIjgN8Q_8m34nWo3Q',
    name: 'Satu Persen',
    maxVideos: 8,
    category: 'self-growth',
    ageGroup: 'young-adult',
    accent: '#6366f1',
    emoji: '💡',
    focus: 'Self-growth & psychology',
    channelUrl: 'https://www.youtube.com/@satupersen',
    avatar: '',
    tagline: 'Jadi 1% lebih baik setiap hari',
    lang: 'id'
  },
  {
    id: 'UCu0yQD7NFMyLu_-TmKa4Hqg',
    name: 'Kok Bisa?',
    maxVideos: 8,
    category: 'science-curiosity',
    ageGroup: 'teen',
    accent: '#f97316',
    emoji: '🤔',
    focus: 'Science & curiosity',
    channelUrl: 'https://www.youtube.com/@kokbisa',
    avatar: '',
    tagline: 'Kenapa ya? Kok bisa?',
    lang: 'id'
  },
  {
    id: 'UCYO_jab_esuFRV4b17AJtAw',
    name: '3Blue1Brown',
    maxVideos: 6,
    category: 'science-curiosity',
    ageGroup: 'young-adult',
    accent: '#3b82f6',
    emoji: '📐',
    focus: 'Math & visual learning',
    channelUrl: 'https://www.youtube.com/@3blue1brown',
    avatar: '',
    tagline: 'Mathematics with visual intuition',
    lang: 'en'
  },
  {
    id: 'UCsXVk37bltHxD1rDPwtNM8Q',
    name: 'Kurzgesagt',
    maxVideos: 6,
    category: 'science-curiosity',
    ageGroup: 'teen',
    accent: '#10b981',
    emoji: '🐦',
    focus: 'Science explained simply',
    channelUrl: 'https://www.youtube.com/@kurzgesagt',
    avatar: '',
    tagline: 'In a nutshell',
    lang: 'en'
  },
  {
    id: 'UCc_xdkOBgSYLmXTn-VSQ4uA',
    name: 'TheraminTrees',
    maxVideos: 6,
    category: 'mind-emotions',
    ageGroup: 'young-adult',
    accent: '#8b5cf6',
    emoji: '🧠',
    focus: 'Psychology & critical thinking',
    channelUrl: 'https://www.youtube.com/@theramintrees',
    avatar: '',
    tagline: 'Understanding manipulation and belief',
    lang: 'en'
  },
  {
    id: 'UC4a-Gbdw7vOaccHmFo40b9g',
    name: 'CrashCourse',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'teen',
    accent: '#ef4444',
    emoji: '📚',
    focus: 'Education & learning',
    channelUrl: 'https://www.youtube.com/@crashcourse',
    avatar: '',
    tagline: 'Learn anything!',
    lang: 'en'
  },
  {
    id: 'UCsooa4yRKGN_zEE8iknghZA',
    name: 'TED-Ed',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'all',
    accent: '#e11d48',
    emoji: '🎓',
    focus: 'Animated educational lessons',
    channelUrl: 'https://www.youtube.com/@TEDEd',
    avatar: '',
    tagline: 'Lessons worth sharing',
    lang: 'en'
  },
  {
    id: 'UC7IcJI8PUf5Z3zKxnZvTBog',
    name: 'The School of Life',
    maxVideos: 6,
    category: 'mind-emotions',
    ageGroup: 'young-adult',
    accent: '#d97706',
    emoji: '🏫',
    focus: 'Emotional intelligence',
    channelUrl: 'https://www.youtube.com/@theschooloflifetv',
    avatar: '',
    tagline: 'Self-knowledge and emotional wisdom',
    lang: 'en'
  },
  {
    id: 'UC_qs3c0ehDvZkbiEbOj6Drg',
    name: 'Alphablocks',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'kids',
    accent: '#e11d48',
    emoji: '\u{1F9E9}',
    focus: 'Letters & reading for kids',
    channelUrl: 'https://www.youtube.com/@alphablocks',
    avatar: '',
    tagline: 'Learn to read with Alphablocks',
    lang: 'en'
  },
  {
    id: 'UCLsooMJoIpl_7ux2jvdPB-Q',
    name: 'Super Simple Songs',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'kids',
    accent: '#f59e0b',
    emoji: '\u{1F3B5}',
    focus: 'Nursery rhymes & kids songs',
    channelUrl: 'https://www.youtube.com/@SuperSimpleTV',
    avatar: '',
    tagline: 'Songs and stories for kids',
    lang: 'en'
  },
  {
    id: 'UC1Nj4gkoi_n5eCcrKCVOXKA',
    name: 'Animal Wonders',
    maxVideos: 6,
    category: 'science-curiosity',
    ageGroup: 'kids',
    accent: '#059669',
    emoji: '\u{1F43E}',
    focus: 'Animals & nature for kids',
    channelUrl: 'https://www.youtube.com/@AnimalWondersMontana',
    avatar: '',
    tagline: 'Meet amazing animals up close',
    lang: 'en'
  },
  {
    id: 'UCoSAitETqcEeWnWBMO31xzA',
    name: 'Art for Kids Hub',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'kids',
    accent: '#8b5cf6',
    emoji: '\u{1F3A8}',
    focus: 'Drawing & art tutorials',
    channelUrl: 'https://www.youtube.com/@artforkidshub',
    avatar: '',
    tagline: 'Learn to draw with fun tutorials',
    lang: 'en'
  },
  {
    id: 'UCeiYXex_fwgYDonaTcSIk6w',
    name: 'MinuteEarth',
    maxVideos: 6,
    category: 'science-curiosity',
    ageGroup: 'kids',
    accent: '#10b981',
    emoji: '\u{1F30D}',
    focus: 'Earth science & nature',
    channelUrl: 'https://www.youtube.com/@MinuteEarth',
    avatar: '',
    tagline: 'Science and stories about our planet',
    lang: 'en'
  },
  {
    id: 'UC8u2mS-ZGT2PldXH8-zvx3A',
    name: 'Scholastic After School',
    maxVideos: 6,
    category: 'stories',
    ageGroup: 'kids',
    accent: '#dc2626',
    emoji: '\u{1F4D6}',
    focus: 'Stories & read-alouds for kids',
    channelUrl: 'https://www.youtube.com/@ScholasticAfterSchool',
    avatar: '',
    tagline: 'Stories come to life',
    lang: 'en'
  },
  {
    id: 'UC6107grRI4m0o2-emgoDnAA',
    name: 'SmarterEveryDay',
    maxVideos: 6,
    category: 'science-curiosity',
    ageGroup: 'teen',
    accent: '#2563eb',
    emoji: '\u{1F52C}',
    focus: 'Science experiments & exploration',
    channelUrl: 'https://www.youtube.com/@SmarterEveryDay',
    avatar: '',
    tagline: 'Explore the world with science',
    lang: 'en'
  }
];

const mockData: Record<string, Array<{ id: string; title: string; duration: string }>> = {
  'UC_eifcIIjgN8Q_8m34nWo3Q': [
    { id: 'p2fRsVer9qg', title: 'Mengapa Banyak Orang Baik yang Bodoh & Gampang Ditipu?', duration: '12:34' },
    { id: 'uHblicbwnGU', title: 'Kesepian di Kota: Mengapa Kita Semakin Sendirian?', duration: '15:22' },
    { id: '7aFGkf_V8qg', title: 'Siapa yang Merasa Aman-aman Saja Simpan Uang di Bank?', duration: '8:45' },
    { id: 'dPnh1pCtJzQ', title: 'Stop Tertipu Harga Murah! #CostPerWear', duration: '6:30' },
  ],
  'UCu0yQD7NFMyLu_-TmKa4Hqg': [
    { id: 'dHhIBBRtjVo', title: 'Mengapa Langit Berwarna Biru?', duration: '5:12' },
    { id: 'Z8ZpxCulM_E', title: 'Bagaimana Pesawat Bisa Terbang?', duration: '7:45' },
    { id: 'VLnWpwlKqFI', title: 'Apa itu Gravitasi Sebenarnya?', duration: '6:20' },
    { id: 'QqsCbPR6cJ8', title: 'Bagaimana Mata Kita Melihat Warna?', duration: '8:10' },
  ],
  'UCYO_jab_esuFRV4b17AJtAw': [
    { id: 's9vLJRwMuuo', title: 'But what is a Neural Network?', duration: '19:13' },
    { id: 'aircAruvnKk', title: 'But what is a Fourier series?', duration: '24:40' },
    { id: 'kfR-7uOG_Lk', title: 'How to guess the determinant', duration: '11:00' },
  ],
  'UCsXVk37bltHxD1rDPwtNM8Q': [
    { id: 'HeQX2HjkcNo', title: 'The Largest Black Hole in the Universe', duration: '10:02' },
    { id: 'LxgMdjjSPDU', title: 'Why Your Body Is Amazing', duration: '7:55' },
    { id: 'JXeJATkCyhU', title: 'What If You Detonated a Nuclear Bomb In The Marianas Trench?', duration: '8:22' },
  ],
  'UCc_xdkOBgSYLmXTn-VSQ4uA': [
    { id: 'IaUhR-tRkHY', title: 'Inventing the population', duration: '25:09' },
    { id: 'opHhIE1aUVo', title: 'Struggling with the concept of god', duration: '27:01' },
  ],
  'UC4a-Gbdw7vOaccHmFo40b9g': [
    { id: 'nh4UeJxGVn0', title: 'How Do We Learn Language?', duration: '11:45' },
    { id: '4MkFNRxfnWg', title: 'The History of Atomic Chemistry', duration: '10:42' },
    { id: 'PD2XgQOyCCk', title: 'Tissues, Part 1: Crash Course A&P #2', duration: '10:08' },
  ],
  'UCsooa4yRKGN_zEE8iknghZA': [
    { id: 'dQw4w9WgXcQ', title: 'The Greek myth of Icarus and Daedalus', duration: '5:07' },
    { id: 'lFIYMFvsDmU', title: 'Why should you read "1984"?', duration: '5:22' },
    { id: 'GcFP6czejmI', title: 'The surprisingly dangerous logic of self-driving cars', duration: '5:11' },
  ],
  'UC7IcJI8PUf5Z3zKxnZvTBog': [
    { id: 'HZS8F_OW6zQ', title: 'On Being Yourself', duration: '6:10' },
    { id: '6JOnhFp_jgk', title: 'How to Overcome Loneliness', duration: '7:30' },
    { id: '6Zw-4A1B8xQ', title: 'The Meaning of Life', duration: '5:45' },
  ],
  'UC_qs3c0ehDvZkbiEbOj6Drg': [
    { id: 'sqc7bJdWp8Q', title: 'Alphablocks - Letter A', duration: '3:21' },
    { id: 'x4EFlhPGuRY', title: 'Alphablocks - Letter B', duration: '3:15' },
    { id: 'WT32BrQd1QM', title: 'Alphablocks - Letter C', duration: '3:08' },
  ],
  'UCLsooMJoIpl_7ux2jvdPB-Q': [
    { id: 'gKmrFzjLeKY', title: 'Twinkle Twinkle Little Star', duration: '2:45' },
    { id: 'n3M3rq3fDME', title: 'Baby Shark Dance', duration: '2:21' },
    { id: 'J---aiyznGQ', title: 'The Wheels on the Bus', duration: '3:10' },
  ],
  'UC1Nj4gkoi_n5eCcrKCVOXKA': [
    { id: 'Fp5n5K5M6n4', title: 'Meet the Red Panda', duration: '5:30' },
    { id: '3H4FsGe3g0E', title: 'How to Care for a Hedgehog', duration: '6:15' },
    { id: 'JR1dVPj3BJM', title: 'The Cutest Animals', duration: '4:45' },
  ],
  'UCoSAitETqcEeWnWBMO31xzA': [
    { id: 'pIMBGYbJDBw', title: 'How to Draw a Puppy', duration: '10:22' },
    { id: 'Lcv67u72q3Q', title: 'How to Draw a Unicorn', duration: '12:15' },
    { id: '7w1s2HoBsGs', title: 'How to Draw a Cat', duration: '9:48' },
  ],
  'UCeiYXex_fwgYDonaTcSIk6w': [
    { id: 'scwldYDGJsM', title: 'Why Rivers Move', duration: '3:22' },
    { id: 'yravIo7OVk4', title: 'Where Did Earths Water Come From', duration: '4:10' },
    { id: 'F3lPfYjkRKM', title: 'Why Leaves Change Color', duration: '3:45' },
  ],
  'UC8u2mS-ZGT2PldXH8-zvx3A': [
    { id: 'r2LpJXvFnVk', title: 'The Snowy Day - Read Aloud', duration: '7:15' },
    { id: 'qkZ3IYvV7GE', title: 'Where the Wild Things Are', duration: '8:30' },
    { id: 'Gi3gJj4a4eo', title: 'Goodnight Moon Read Aloud', duration: '4:22' },
  ],
  'UC6107grRI4m0o2-emgoDnAA': [
    { id: 'y7QfN0iZVIM', title: 'How Does a Rocket Engine Work?', duration: '12:45' },
    { id: 'JnEHnyB9ViM', title: 'The Backwards Brain Bicycle', duration: '8:30' },
    { id: 'BHqgB0L0j1Q', title: 'Slow Motion Lightning', duration: '10:15' },
  ],
};

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

function getMockVideos(channelId: string, count: number): VideoEntry[] {
  const list = mockData[channelId] || [];
  return list.slice(0, count).map((v, i) => ({
    id: v.id,
    title: v.title,
    published: new Date(Date.now() - i * 86400000 * 4).toISOString(),
    thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    description: 'Curated educational video from Senara TV',
    duration: v.duration,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  }));
}

async function fetchChannelVideos(channel: ChannelInput, cachedVideos?: VideoEntry[]): Promise<VideoEntry[]> {
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
      return getMockVideos(channel.id, channel.maxVideos);
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
      console.warn(`  ⚠ No videos parsed for ${channel.name}, using mock data`);
      if (cachedVideos && cachedVideos.length > 0) {
        console.log(`  ↻ Using cached data for ${channel.name}`);
        return cachedVideos.slice(0, channel.maxVideos);
      }
      return getMockVideos(channel.id, channel.maxVideos);
    }

    return videos;
  } catch (err) {
    console.warn(`  ✗ Failed to fetch ${channel.name}: ${(err as Error).message}`);
    if (cachedVideos && cachedVideos.length > 0) {
      console.log(`  ↻ Using cached data for ${channel.name}`);
      return cachedVideos.slice(0, channel.maxVideos);
    }
    return getMockVideos(channel.id, channel.maxVideos);
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

  for (const channel of channels) {
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
