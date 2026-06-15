import { t } from './i18n';
import { getText } from './shared-utils';
import { allStoriesData } from '../data/stories';
import type { Story } from '../data/stories';
import { allCategoriesData } from '../data/categories';
import type { Category } from '../data/categories';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

let featuredStoriesData: Story[] = [];

const CATEGORY_STYLES: Record<string, { gradient: string; color: string }> = {
  'mind-emotions': { gradient: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)', color: '#7C3AED' },
  'self-awareness-identity': { gradient: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)', color: '#059669' },
  'relationships-social': { gradient: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 50%, #F9A8D4 100%)', color: '#DB2777' },
  'digital-life-online': { gradient: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 50%, #93C5FD 100%)', color: '#2563EB' },
  'college-work-adulthood': { gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)', color: '#D97706' },
  'social-issues': { gradient: 'linear-gradient(135deg, #CCFBF1 0%, #99F6E4 50%, #5EEAD4 100%)', color: '#0D9488' },
  'money-young-adult-life': { gradient: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 50%, #FCA5A5 100%)', color: '#DC2626' },
};

function createFeaturedCard(story: Story, index: number = 0): HTMLAnchorElement {
  const isComingSoon: boolean = story.status === 'coming-soon';
  const isFirst: boolean = index === 0;

  const minutesLabel: string = t('story.minutes') || 'menit';
  const playNowLabel: string = t('story.playNow') || 'Mainkan Sekarang →';
  const comingSoonLabel: string = t('story.comingSoon') || 'In Development';
  const editorsPickLabel: string = t('story.editorsPick') || "Editor's Pick";

  const difficultyKey: string = (story.difficulty || 'Beginner').toLowerCase();
  const difficultyLabel: string = t(`story.${difficultyKey}`) || story.difficulty || 'Beginner';

  const storyTitle: string = t(`stories.${story.id}.title`) || story.title;
  const storyDesc: string = t(`stories.${story.id}.description`) || story.description;
  const storyInitial: string = storyTitle.charAt(0).toUpperCase();

  const categoryStyle = CATEGORY_STYLES[story.category];
  const gradient: string = categoryStyle?.gradient || 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)';
  const accentColor: string = categoryStyle?.color || '#4F46E5';

  const card: HTMLAnchorElement = document.createElement('a');
  card.href = isComingSoon ? '#' : `/story?id=${story.id}`;
  card.className = `featured-card-v2 ${isFirst ? 'featured-card-hero' : ''}`;
  card.dataset.storyId = story.id;
  if (!isComingSoon) {
    card.dataset.umamiEvent = `Featured play ${story.id}`;
  }

  const starSvg: string = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  const arrowSvg: string = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  const lockSvg: string = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

  card.innerHTML = `
    <div class="featured-card-visual" style="background:${gradient}">
      <span class="featured-card-initial" style="color:${accentColor}">${storyInitial}</span>
      ${isFirst && !isComingSoon ? `<span class="featured-card-badge">${starSvg} ${editorsPickLabel}</span>` : ''}
      ${isComingSoon ? `<span class="featured-card-badge featured-card-badge-soon">${comingSoonLabel}</span>` : ''}
      ${story.rating ? `<span class="featured-card-rating">${starSvg} ${story.rating}</span>` : ''}
    </div>
    <div class="featured-card-body">
      <div class="featured-card-tags">
        <span class="featured-tag">${difficultyLabel}</span>
        <span class="featured-tag-dot">·</span>
        <span class="featured-tag">${story.duration || '30'} ${minutesLabel}</span>
      </div>
      <h3 class="featured-card-name">${storyTitle}</h3>
      ${storyDesc ? `<p class="featured-card-desc">${storyDesc}</p>` : ''}
      <div class="featured-card-footer">
        <span class="featured-card-cta">
          ${isComingSoon ? lockSvg + ' ' + comingSoonLabel : playNowLabel} ${isComingSoon ? '' : arrowSvg}
        </span>
        <span class="featured-card-meta">
          ${story.chapters ? `${story.chapters} ch` : ''}
        </span>
      </div>
    </div>
  `;

  if (isComingSoon) {
    card.style.opacity = '0.85';
    card.style.cursor = 'default';
    card.addEventListener('click', (e: Event) => e.preventDefault());
  }

  return card;
}

function loadFeaturedStories(): void {
  const container: HTMLElement | null = document.getElementById('featuredContainer');
  if (container) {
    container.innerHTML = '<div class="skeleton-card" style="height:300px;"></div>'.repeat(3);
  }

  const featured: Story[] = allStoriesData.filter((story: Story) => story.featured);
  featuredStoriesData = featured;

  const sorted: Story[] = featured.sort((a: Story, b: Story) => {
    const aSoon = a.status === 'coming-soon' ? 1 : 0;
    const bSoon = b.status === 'coming-soon' ? 1 : 0;
    if (aSoon !== bSoon) return aSoon - bSoon;
    return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
  });

  renderFeaturedCards(sorted);
}

function renderFeaturedCards(stories: Story[]): void {
  const container: HTMLElement | null = document.getElementById('featuredContainer');
  if (!container) return;

  container.innerHTML = '';

  const displayStories: Story[] = stories.slice(0, 5);

  displayStories.forEach((story: Story, index: number) => {
    const card: HTMLAnchorElement = createFeaturedCard(story, index);
    container.appendChild(card);
  });
}

function setupFeaturedFilters(): void {
  const filterPills: NodeListOf<Element> = document.querySelectorAll('.filter-pill');

  filterPills.forEach((pill: Element) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p: Element) => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue: string | undefined = (pill as HTMLElement).dataset.filter;
      let filtered: Story[] = featuredStoriesData;

      if (filterValue === 'newest') {
        filtered = [...featuredStoriesData].sort((a: Story, b: Story) => {
          const aSoon = a.status === 'coming-soon' ? 1 : 0;
          const bSoon = b.status === 'coming-soon' ? 1 : 0;
          if (aSoon !== bSoon) return aSoon - bSoon;
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        });
      } else if (filterValue === 'popular') {
        filtered = [...featuredStoriesData].sort(
          (a: Story, b: Story) => (b.plays || 0) - (a.plays || 0)
        );
      } else if (filterValue === 'kids') {
        filtered = featuredStoriesData.filter((s: Story) => s.age && s.age.includes('5-8'));
      } else if (filterValue === 'teen') {
        filtered = featuredStoriesData.filter((s: Story) => s.age && s.age.includes('13+'));
      }

      renderFeaturedCards(filtered);
    });
  });
}

function renderCategories(): void {
  const container: HTMLElement | null = document.getElementById('categoryCarousel');
  if (!container) return;

  container.innerHTML = '';

  const categories: Category[] = allCategoriesData.map((cat: Category) => {
    const title = t(`categories.${cat.id}`);
    const desc = t(`categories.${cat.id}-desc`);
    return {
      ...cat,
      title: title !== `categories.${cat.id}` ? title : cat.title,
      description: desc !== `categories.${cat.id}-desc` ? desc : cat.description,
    };
  });

  categories.forEach((category: Category) => {
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = `/collection?category=${category.id}`;
    link.className = 'category-chip hover:no-underline';
    link.dataset.umamiEvent = `Home category ${category.title}`;

    link.innerHTML = `
      <div class="chip-icon" style="background: ${category.color}">${category.icon}</div>
      <span class="chip-label">${category.title}</span>
    `;

    container.appendChild(link);
  });
}

function setupCategoryToggle(): void {
  const grid: HTMLElement | null = document.getElementById('learningCategoryGrid');
  const toggleBtn: HTMLElement | null = document.getElementById('categoryToggleBtn');

  if (!grid || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isCollapsed: boolean = grid.classList.toggle('collapsed');
    toggleBtn.dataset.state = isCollapsed ? 'collapsed' : 'expanded';
    toggleBtn.textContent = isCollapsed
      ? getText('category.showMore', 'Show more')
      : getText('category.showLess', 'Show less');
  });
}

function setupComparisonToggle(): void {
  const toggleBtns: NodeListOf<Element> = document.querySelectorAll('.comparison-toggle button');
  const comparisons: NodeListOf<Element> = document.querySelectorAll('.benefit-comparison');
  const benefitCards: NodeListOf<Element> = document.querySelectorAll('.benefit-card');

  if (!toggleBtns.length) return;

  const getModeKey = (mode: string): string => {
    const map: Record<string, string> = { vn: 'VN', pdf: 'PDF', socmed: 'Socmed', youtube: 'Youtube' };
    return map[mode] || 'VN';
  };

  const svgIcon = (path: string, size: number = 20): string =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  const icons: Record<string, Record<string, string>> = {
    '1': {
      vn: svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
      pdf: svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
      socmed: svgIcon('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
      youtube: svgIcon('<polygon points="5 3 19 12 5 21 5 3"/>'),
    },
    '2': {
      vn: svgIcon('<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'),
      pdf: svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
      socmed: svgIcon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'),
      youtube: svgIcon('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'),
    },
    '3': {
      vn: svgIcon('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
      pdf: svgIcon('<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
      socmed: svgIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
      youtube: svgIcon('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'),
    },
  };

  const updateCards = (mode: string): void => {
    const modeKey: string = getModeKey(mode);

    benefitCards.forEach((card: Element) => {
      const cardNum: string | undefined = (card as HTMLElement).dataset.benefit;
      if (!cardNum) return;
      const iconElement: HTMLElement | null = card.querySelector('.benefit-icon');
      const statElement: HTMLElement | null = card.querySelector('.benefit-stat');
      const titleElement: HTMLElement | null = card.querySelector('h3');
      const descElement: HTMLElement | null = card.querySelector('p');

      if (iconElement && icons[cardNum]) {
        iconElement.innerHTML = icons[cardNum][mode];
      }

      if (statElement) {
        statElement.textContent = t(`whyVN.stat${cardNum}${modeKey}`);
      }

      if (titleElement) {
        titleElement.textContent = t(`whyVN.title${cardNum}${modeKey}`);
      }

      if (descElement) {
        descElement.textContent = t(`whyVN.desc${cardNum}${modeKey}`);
      }
    });
  };

  toggleBtns.forEach((btn: Element) => {
    btn.addEventListener('click', () => {
      const mode: string | undefined = (btn as HTMLElement).dataset.mode;
      if (!mode) return;

      toggleBtns.forEach((b: Element) => b.classList.remove('active'));
      btn.classList.add('active');

      comparisons.forEach((comp: Element) => {
        if ((comp as HTMLElement).dataset.mode === mode) {
          comp.classList.add('show');
        } else {
          comp.classList.remove('show');
        }
      });

      updateCards(mode);
    });
  });

  comparisons.forEach((comp: Element) => {
    if ((comp as HTMLElement).dataset.mode === 'vn') {
      comp.classList.add('show');
    }
  });

  updateCards('vn');
}

function getTestimonials(): Testimonial[] {
  return [
    {
      quote: `"${t('testimonials.teacher.quote')}"`,
      author: t('testimonials.teacher.author'),
      role: t('testimonials.teacher.role'),
      avatar: 'T',
    },
    {
      quote: `"${t('testimonials.reader.quote')}"`,
      author: t('testimonials.reader.author'),
      role: t('testimonials.reader.role'),
      avatar: 'R',
    },
    {
      quote: `"${t('testimonials.facilitator.quote')}"`,
      author: t('testimonials.facilitator.author'),
      role: t('testimonials.facilitator.role'),
      avatar: 'F',
    },
  ];
}

function setupTestimonialSlider(): void {
  const testimonials = getTestimonials();
  const content: HTMLElement | null = document.getElementById('testimonialContent');
  if (!content) return;

  content.innerHTML = testimonials.map((t) => `
    <div class="testimonial-card">
      <div class="testimonial-stars">\u2605\u2605\u2605\u2605\u2605</div>
      <p class="testimonial-quote">${t.quote}</p>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-top:auto;">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div>
          <p class="testimonial-author">${t.author}</p>
          <p class="testimonial-role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function setupContributionAccordion(): void {
  const items: NodeListOf<Element> = document.querySelectorAll('.contrib-item');
  if (!items.length) return;

  items.forEach((item: Element) => {
    const trigger: HTMLElement | null = item.querySelector('.contrib-trigger');
    const panel: HTMLElement | null = item.querySelector('.contrib-panel');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive: boolean = item.classList.contains('active');
      items.forEach((i: Element) => {
        i.classList.remove('active');
        const p: HTMLElement | null = i.querySelector('.contrib-panel');
        if (p) p.style.maxHeight = '';
      });

      if (!isActive) {
        item.classList.add('active');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  if (items.length) {
    items[0].classList.add('active');
    const firstPanel: HTMLElement | null = items[0].querySelector('.contrib-panel');
    if (firstPanel) firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
  }
}

export function initHomePage(): void {
  loadFeaturedStories();
  setupFeaturedFilters();
  renderCategories();
  setupCategoryToggle();
  setupComparisonToggle();
  setupTestimonialSlider();
  setupContributionAccordion();
}
