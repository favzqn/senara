import { t } from './i18n';
import { getText, getUrlParam, setupSocialSharing, formatDate } from './shared-utils';
import { CONFIG } from './config';
import { allStoriesData } from '../data/stories';
import type { Story } from '../data/stories';
import { getCategoryById } from '../data/categories';

// Stories with secret preview access — must match story-loader.js
const STORY_SECRETS: Record<string, string> = {
  'teman-baru-di-kelas-8b': 'k8b-preview-2026',
};

function updateMetaTags(story: Story): void {
  document.title = `${story.title} | Senara`;

  const setMeta = (attr: string, key: string, value: string): void => {
    if (!value) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  const desc: string = story.description || '';
  const url: string = window.location.href;

  setMeta('property', 'og:title', story.title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', url);
  if (story.thumbnail) setMeta('property', 'og:image', story.thumbnail);

  setMeta('name', 'twitter:title', story.title);
  setMeta('name', 'twitter:description', desc);
  setMeta('name', 'description', desc);

  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) existing.remove();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.description,
    url: `https://senara.id/story/?id=${story.id}`,
    datePublished: story.releaseDate,
    dateModified: story.releaseDate,
    author: { '@type': 'Organization', name: story.author || 'Senara Team' },
    publisher: { '@type': 'Organization', name: 'Senara', url: 'https://senara.id' },
    image: story.thumbnail ? `https://senara.id/${story.thumbnail}` : undefined,
    articleSection: story.category,
    keywords: story.tags?.join(', '),
    about: story.learningOutcomes?.map(outcome => ({ '@type': 'Thing', name: outcome })),
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

const ICONS = {
  sad: '<svg class="story-error-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  book: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  star: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
  mic: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  shuffle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
  trophy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  mic2: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 17a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v6a4 4 0 0 1-4 4z"/><path d="M17 17a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v6a4 4 0 0 0 4 4z"/></svg>',
  pen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  calendar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  user: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  save: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  link: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>',
  scrollDown: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
};

function showError(message: string): void {
  const storyPage = document.getElementById('storyPage');
  if (!storyPage) return;
  storyPage.setAttribute('aria-busy', 'false');

  storyPage.innerHTML = `
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center max-w-md">
        <div class="mb-6">${ICONS.sad}</div>
        <h1 class="story-error-title">${t('storyPage.errorTitle', message)}</h1>
        <p class="story-error-desc">${t('storyPage.errorDesc', 'The story you\'re looking for was not found or is no longer available.')}</p>
        <a href="/collection" class="story-error-link">
          ${t('storyPage.backToCollection', '← Back to Collection')}
        </a>
      </div>
    </div>
  `;
}

function renderStory(story: Story): void {
  updateMetaTags(story);
  const pathId: string | null = getUrlParam('path');
  const urlSecret: string | null = getUrlParam('secret');
  const expectedSecret: string | undefined = STORY_SECRETS[story.id];
  const hasSecretAccess: boolean = !!expectedSecret && urlSecret === expectedSecret;
  const isComingSoon: boolean = story.status === 'coming-soon' && !hasSecretAccess;
  const category = story.category ? getCategoryById(story.category) : undefined;
  const rating: number = story.rating || 0;
  const backLink = '/collection';
  const storyTitle: string = t(`stories.${story.id}.title`) !== `stories.${story.id}.title` ? t(`stories.${story.id}.title`) : story.title;
  const storyDesc: string = t(`stories.${story.id}.description`) !== `stories.${story.id}.description` ? t(`stories.${story.id}.description`) : story.description;
  const storyLongDesc: string = (() => {
    const key = `stories.${story.id}.longDescription`;
    const translated = t(key);
    return translated !== key ? translated : (story.longDescription || storyDesc);
  })();
  const storyInitial: string = storyTitle.charAt(0).toUpperCase();

  const categoryTitle: string = category
    ? (t(`categories.${category.id}`) !== `categories.${category.id}` ? t(`categories.${category.id}`) : category.title)
    : '';
  const difficultyLabel: string = t(`story.${story.difficulty.toLowerCase()}`) !== `story.${story.difficulty.toLowerCase()}` ? t(`story.${story.difficulty.toLowerCase()}`) : story.difficulty;

  const pathBannerHTML: string = pathId ? `
    <div class="story-path-banner mb-4">
      <strong>${ICONS.book} Learning Path:</strong> Part of a learning path
    </div>
  ` : '';

  const difficultyClass: string = {
    'Beginner': 'difficulty-beginner',
    'Intermediate': 'difficulty-intermediate',
    'Advanced': 'difficulty-advanced'
  }[story.difficulty] || '';

  const outcomesHTML: string = story.learningOutcomes ? story.learningOutcomes.map((_: string, i: number) => {
    const key = `stories.${story.id}.learningOutcomes.${i}`;
    const label = t(key) !== key ? t(key) : story.learningOutcomes![i];
    return `
    <div class="story-outcome">
      <div class="story-outcome-check">${ICONS.check}</div>
      <span>${label}</span>
    </div>`;
  }).join('') : '';

  const featuresHTML: string = `
    ${story.voiceActed ? `<span class="story-feature-badge">${ICONS.mic} ${t('storyPage.features.voiceActed', 'Voice Acted')}</span>` : ''}
    ${story.hasChoices ? `<span class="story-feature-badge">${ICONS.shuffle} ${t('storyPage.features.multiplePaths', 'Multiple Paths')}</span>` : ''}
    ${story.hasAchievements ? `<span class="story-feature-badge">${ICONS.trophy} ${t('storyPage.features.achievements', 'Achievements')}</span>` : ''}
  `;

  const html: string = `
    <section class="story-hero">
      <div class="story-hero-bg" style="background: linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%);">
        <div class="story-initial" style="top: 10%; left: 10%;">${storyInitial}</div>
        <div class="story-initial" style="top: 30%; right: 5%; animation-delay: -2s;">${storyInitial}</div>
      </div>

      <div class="story-hero-content pb-12 px-4">
        <div class="max-w-4xl mx-auto">
          ${pathBannerHTML}

          <div class="flex flex-wrap items-center gap-3 mb-4">
            ${category ? `
              <span class="story-category-badge">
                ${category.icon} ${categoryTitle}
              </span>
            ` : ''}
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border ${difficultyClass}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c0 0 8-4 8-12C20 5.6 16.4 2 12 2 7.6 2 4 5.6 4 10c0 8 8 12 8 12z"/></svg> ${difficultyLabel}
            </span>
          </div>

          <h1 class="story-title">
            ${storyTitle}
          </h1>

          <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            ${story.tags.map((tag: string) => {
              const tagKey = `tags.${tag.toLowerCase().replace(/[\s&]+/g, '-')}`;
              const tagLabel = t(tagKey) !== tagKey ? t(tagKey) : tag;
              return `<span class="story-tag">${tagLabel}</span>`;
            }).join('')}
          </div>

          ${story.collaboration ? (() => {
            const collabKey = `stories.${story.id}.collaboration`;
            const collabLabel = t(collabKey) !== collabKey ? t(collabKey) : story.collaboration;
            return `
            <div class="story-collab inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6">
              ${ICONS.mic2}
              <span class="story-collab-text">${collabLabel}</span>
            </div>`;
          })() : ''}

          <div class="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-8">
            <div class="story-stat">
              <div class="story-stat-value">${ICONS.clock} ${story.duration}</div>
              <div class="story-stat-label">${t('storyPage.stats.minutes', 'Minutes')}</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-value">${ICONS.book} ${story.chapters}</div>
              <div class="story-stat-label">${t('storyPage.stats.chapter', 'Chapter')}</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-value">${story.age}</div>
              <div class="story-stat-label">${t('storyPage.stats.age', 'Age')}</div>
            </div>
            <div class="story-stat">
              <div class="story-stat-value story-star-filled">${rating.toFixed(1)}</div>
              <div class="story-stat-label">${t('storyPage.stats.rating', 'Rating')}</div>
            </div>
          </div>

          ${!isComingSoon && story.duration >= 20 ? `
            <div class="story-save-tip mb-4 sm:mb-6">
              <div class="flex items-start gap-3 p-4">
                ${ICONS.save}
                <div>
                  <p class="story-save-tip-title text-sm sm:text-base">${t('storyPage.saveTip.title', 'You can save your progress anytime!')}</p>
                  <p class="story-save-tip-desc text-xs sm:text-sm mt-1">${t('storyPage.saveTip.desc', 'Click <strong>☰ Menu</strong> at the bottom right → select <strong>"Save"</strong>. To continue, select <strong>"Load"</strong>.')}</p>
                </div>
              </div>
            </div>
          ` : ''}

          ${isComingSoon ? `
            <div class="relative">
              <button disabled class="story-play-btn w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl opacity-60 cursor-not-allowed">
                ${t('storyPage.comingSoon', 'Coming Soon')}
              </button>
              <p class="story-coming-desc">${t('storyPage.comingSoonDesc', 'This story is currently in development')}</p>
            </div>
          ` : `
            <button id="playBtn" class="story-play-btn w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl" data-umami-event="Story play button">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                ${ICONS.play}
                <span>${t('storyPage.playNow', 'Play Now')}</span>
              </span>
            </button>
          `}

          <div class="story-scroll-hint text-center mt-4 sm:mt-8">
            ${ICONS.scrollDown}
          <p class="text-xs sm:text-sm">${t('storyPage.scrollMore', 'Scroll for more info')}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-16 px-4">
      <div class="max-w-4xl mx-auto">

        <div class="story-card p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="mb-4 flex items-center gap-3">
            ${ICONS.book} ${t('storyPage.aboutStory', 'About This Story')}
          </h2>
          <p class="story-description">
            ${storyLongDesc}
          </p>
          <div class="flex flex-wrap gap-2 mt-6 pt-6 border-t story-divider">
            ${featuresHTML}
          </div>
        </div>

        ${story.learningOutcomes && story.learningOutcomes.length > 0 ? `
          <div class="story-card p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 class="mb-6 flex items-center gap-3">
              ${ICONS.target} ${t('storyPage.learningOutcomes', 'What You\'ll Learn')}
            </h2>
            <div class="grid gap-3">
              ${outcomesHTML}
            </div>
          </div>
        ` : ''}

        <div class="story-card p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="mb-6 flex items-center gap-3">
            ${ICONS.star} ${t('storyPage.credits', 'Credits')}
          </h2>
          <div class="grid sm:grid-cols-2 gap-4">
            ${story.author ? `
              <div class="story-credit-item">
                <span class="story-credit-icon">${ICONS.user}</span>
                <div>
                  <p class="story-credit-label">${t('storyPage.creditsAuthor', 'Author')}</p>
                  <p class="story-credit-value">${story.author}</p>
                </div>
              </div>
            ` : ''}
            ${story.scriptBy ? `
              <div class="story-credit-item">
                <span class="story-credit-icon">${ICONS.pen}</span>
                <div>
                  <p class="story-credit-label">${t('storyPage.creditsScriptBy', 'Script By')}</p>
                  <p class="story-credit-value">${story.scriptBy}</p>
                </div>
              </div>
            ` : ''}
            ${story.series ? `
              <div class="story-credit-item">
                <span class="story-credit-icon">${ICONS.book}</span>
                <div>
                  <p class="story-credit-label">${t('storyPage.creditsSeries', 'Series')}</p>
                  <p class="story-credit-value">${story.series}</p>
                </div>
              </div>
            ` : ''}
            ${story.releaseDate ? `
              <div class="story-credit-item">
                <span class="story-credit-icon">${ICONS.calendar}</span>
                <div>
                  <p class="story-credit-label">${t('storyPage.creditsReleaseDate', 'Release Date')}</p>
                  <p class="story-credit-value">${formatDate(story.releaseDate)}</p>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="story-card p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="story-share-title">
            ${t('storyPage.shareStory', 'Share This Story')}
          </h2>
          <div class="flex justify-center gap-3">
            <a id="shareTwitter" href="#" target="_blank" rel="noopener noreferrer" class="story-share-btn twitter" title="Share on Twitter" data-umami-event="Story share Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a id="shareFacebook" href="#" target="_blank" rel="noopener noreferrer" class="story-share-btn facebook" title="Share on Facebook" data-umami-event="Story share Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a id="shareWhatsApp" href="#" target="_blank" rel="noopener noreferrer" class="story-share-btn whatsapp" title="Share on WhatsApp" data-umami-event="Story share WhatsApp">
              ${ICONS.whatsapp}
            </a>
            <button id="shareCopy" class="story-share-btn copy" title="Copy Link" data-umami-event="Story share Copy link">
              ${ICONS.link}
            </button>
          </div>
          <p id="copyFeedback" class="story-copy-feedback" role="status" aria-live="polite">${t('storyPage.linkCopied', 'Link copied!')}</p>
        </div>

        ${!isComingSoon ? `
          <div class="text-center py-6 sm:py-8">
            <button id="playBtnBottom" class="story-play-btn w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl mb-4 sm:mb-6" data-umami-event="Story play button bottom">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                ${ICONS.play}
                <span>${t('storyPage.playNow', 'Play Now')}</span>
              </span>
            </button>
          </div>
        ` : ''}

        <div class="text-center pt-8 border-t story-divider">
          <a href="${backLink}" class="story-back-link" data-umami-event="Story back link">
            ${pathId ? t('storyPage.backToPath', '← Back to Learning Path') : t('storyPage.backToCollection', '← Back to Collection')}
          </a>
        </div>
      </div>
    </section>
  `;

  const storyPage = document.getElementById('storyPage');
  if (storyPage) {
    storyPage.setAttribute('aria-busy', 'false');
    storyPage.innerHTML = html;
  }

  setupPlayButtons(story, pathId, isComingSoon, urlSecret);
  setupSocialSharing(story);
  setupCopyLink();
}

function setupPlayButtons(story: Story, pathId: string | null, isComingSoon: boolean, urlSecret: string | null): void {
  if (isComingSoon) return;

  const playHandler = (): void => {
    if (pathId) {
      sessionStorage.setItem('currentPathId', pathId);
      sessionStorage.setItem('currentStoryId', story.id);
    }
    let playUrl = CONFIG.paths.monogatari + `?story=${story.id}`;
    const secret = STORY_SECRETS[story.id];
    if (secret && urlSecret === secret) {
      playUrl += `&secret=${secret}`;
    }
    window.location.href = playUrl;
  };

  document.getElementById('playBtn')?.addEventListener('click', playHandler);
  document.getElementById('playBtnBottom')?.addEventListener('click', playHandler);
}

function setupCopyLink(): void {
  document.getElementById('shareCopy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const feedback = document.getElementById('copyFeedback');
      if (feedback) {
        feedback.style.opacity = '1';
        setTimeout(() => {
          feedback.style.opacity = '0';
        }, 2000);
      }
    });
  });
}

export function initStoryPage(): void {
  loadStory();
}

function loadStory(): void {
  const storyId: string | null = getUrlParam('id');

  if (!storyId) {
    showError('Story not found');
    return;
  }

  try {
    const story: Story | undefined = allStoriesData.find((s: Story) => s.id === storyId);
    if (!story) throw new Error('Story not found');

    document.title = `${story.title} | Senara`;

    renderStory(story);
  } catch (error) {
    console.error('Error loading story:', error);
    showError('Error loading story');
  }
}
