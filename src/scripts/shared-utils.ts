import { t } from './i18n';
import { CONFIG } from './config';

export function getText(key: string, fallback: string): string {
  const translated = t(key);
  return translated !== key ? translated : fallback;
}

export function getUrlParam(param: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

export function setupSocialSharing(story: { title: string; description: string }, pageUrl = window.location.href): void {
  const pageTitle = getText('share.readStory', `Read "${story.title}" on Senara`);
  const twitterBtn = document.getElementById('shareTwitter') as HTMLAnchorElement | null;
  if (twitterBtn) twitterBtn.href = CONFIG.social.twitter(pageUrl, pageTitle);
  const facebookBtn = document.getElementById('shareFacebook') as HTMLAnchorElement | null;
  if (facebookBtn) facebookBtn.href = CONFIG.social.facebook(pageUrl);
  const whatsappBtn = document.getElementById('shareWhatsApp') as HTMLAnchorElement | null;
  if (whatsappBtn) whatsappBtn.href = CONFIG.social.whatsapp(pageTitle + ' ' + pageUrl);
}

interface StoryBasic {
  id: string;
  title: string;
  description: string;
  tags: string[];
  age: string;
  category?: string;
  status: string;
  difficulty?: string;
  duration?: number;
  rating?: number;
  plays?: number;
  featured?: boolean;
  thumbnail?: string;
  series?: string;
  chapters?: number;
  learningOutcomes?: string[];
  author?: string;
  scriptBy?: string;
  collaboration?: string;
  releaseDate?: string;
  createdAt?: string;
  voiceActed?: boolean;
  hasChoices?: boolean;
  hasAchievements?: boolean;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00Z');
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

export function createStoryCard(story: StoryBasic, options: { showDescription?: boolean } = {}): HTMLElement {
  const { showDescription = false } = options;
  const card = document.createElement('div');
  const isComingSoon = story.status === 'coming-soon';
  card.className = `card-hover bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col h-full ${isComingSoon ? 'opacity-75' : ''}`;

  const playSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>';
  const clockSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const penSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>';
  const categorySvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>';
  const comingSoonSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const startHereSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>';

  const storyTitle = t(`stories.${story.id}.title`) !== `stories.${story.id}.title` ? t(`stories.${story.id}.title`) : story.title;
  const storyDesc = t(`stories.${story.id}.description`) !== `stories.${story.id}.description` ? t(`stories.${story.id}.description`) : story.description;
  const storyInitial = storyTitle.charAt(0).toUpperCase();

  const comingSoonLabel = t('story.comingSoon') || getText('story.comingSoon', 'Coming Soon');
  const playLabel = (t('story.playNow') || getText('story.play', 'Play')).replace(' \u2192', '');
  const startHereLabel = getText('story.startHere', 'Start Here');

  const difficultyKey = (story.difficulty || 'Beginner').toLowerCase();
  const difficultyLabel = t(`story.${difficultyKey}`) !== `story.${difficultyKey}` ? t(`story.${difficultyKey}`) : story.difficulty;

  const categoryLabel =
    story.category && t(`categories.${story.category}`) !== `categories.${story.category}`
      ? t(`categories.${story.category}`)
      : story.category
        ? story.category.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : '';

  card.innerHTML = `
    <div class="thumbnail-placeholder h-48 w-full relative">
      <span class="text-4xl font-bold text-[#4F46E5] opacity-30" style="font-family: 'Crimson Pro', serif;">${storyInitial}</span>
      ${isComingSoon ? `<div class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"><span class="text-white font-bold text-lg">${comingSoonLabel}</span></div>` : ''}
      ${story.difficulty === 'Beginner' && !isComingSoon ? `<div class="absolute top-3 left-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">${startHereSvg} ${startHereLabel}</div>` : ''}
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-xl font-bold text-[#0F172A] flex-1">${storyTitle}</h3>
        ${isComingSoon ? `<span class="text-xs font-semibold bg-indigo-100 text-indigo-900 px-2 py-1 rounded whitespace-nowrap">${comingSoonLabel}</span>` : ''}
      </div>
      ${showDescription ? `<p class="text-[#64748B] text-sm mb-3">${storyDesc}</p>` : ''}
      <div class="flex flex-wrap gap-2 mb-3">
        ${story.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        ${story.category ? `<span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">${categorySvg} ${categoryLabel}</span>` : ''}
      </div>
      <div class="mt-auto flex flex-col gap-3">
        ${story.collaboration ? `<div class="p-2 bg-pink-50 border border-pink-200 rounded-lg"><p class="text-xs font-semibold text-pink-700">${story.collaboration}</p></div>` : ''}
        <div class="grid grid-cols-3 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">Level</p>
            <p class="text-sm font-semibold text-[#0F172A]">${difficultyLabel}</p>
          </div>
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">${getText('story.duration', 'Duration')}</p>
            <p class="text-sm font-semibold text-[#0F172A] inline-flex items-center gap-1">${clockSvg} ${story.duration} min</p>
          </div>
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">${getText('story.age', 'Age')}</p>
            <p class="text-sm font-semibold text-[#0F172A]">${story.age}</p>
          </div>
        </div>
        ${story.scriptBy ? `<div class="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs"><div class="text-[#6366F1]">${penSvg}</div><div><p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">Script by</p><p class="text-sm font-semibold text-[#0F172A]">${story.scriptBy}</p></div></div>` : ''}
        <div class="pt-1">
          ${isComingSoon
            ? `<button class="play-btn w-full py-3 rounded-lg font-semibold text-center opacity-50 cursor-not-allowed" disabled>${comingSoonSvg} ${comingSoonLabel}</button>`
            : `<a href="/story?id=${story.id}" class="play-btn w-full py-3 rounded-lg font-semibold text-center">${playSvg} ${playLabel}</a>`
          }
        </div>
      </div>
    </div>
  `;

  return card;
}
