import { t } from './i18n';

const TYPE_SPEED = 28;
const BASE = 'monogatari/assets/scenes/';

interface ChoiceOption {
  label: string;
  text: string;
  correct: boolean;
}

interface Choice {
  question: string;
  options: ChoiceOption[];
}

interface ScriptStep {
  bg?: string;
  speaker?: string;
  text?: string;
  choice?: Choice;
}

interface ResultData {
  bg: string;
  speaker: string;
  text: string;
}

interface Results {
  correct: ResultData;
  wrong: ResultData;
}

function tr(key: string, fallback: string): string {
  const val = t(key);
  return val !== key ? val : fallback;
}

function getScript(): ScriptStep[] {
  return [
    { bg: '1.jpg', speaker: tr('home.demoSpeaker', 'Vani'), text: tr('home.demoText1', 'Oh, halo. Jadi, kamu adalah Calon Pahlawan Kesehatan Mental yang baru?') },
    { bg: '1.jpg', speaker: tr('home.demoSpeaker', 'Vani'), text: tr('home.demoText2', 'Aku Vani, instruktur di Pusat Pelatihan Pahlawan Kesehatan Mental.') },
    { bg: '2.jpg', speaker: tr('home.demoSpeaker', 'Vani'), text: tr('home.demoText3', 'Aku ada sedikit tebak-tebakan. Siap?') },
    {
      bg: '2.jpg',
      choice: {
        question: tr('home.demoQuizQ', 'Coba tebak. Menurutmu, berapa persen (%) penduduk Indonesia usia 15\u201324 tahun yang mengalami gangguan mental emosional?'),
        options: [
          { label: 'A', text: tr('home.demoQuizA', '3%'), correct: false },
          { label: 'B', text: tr('home.demoQuizB', '5%'), correct: false },
          { label: 'C', text: tr('home.demoQuizC', '10%'), correct: true },
        ],
      },
    },
  ];
}

function getResult(): Results {
  return {
    correct: { bg: '2-benar.jpg', speaker: tr('home.demoSpeaker', 'Vani'), text: tr('home.demoCorrect', 'Hebat, tebakanmu benar! 10% atau 1 dari 10 pemuda mengalami gangguan mental-emosional.') },
    wrong: { bg: '2-salah.jpg', speaker: tr('home.demoSpeaker', 'Vani'), text: tr('home.demoWrong', 'Hmm, jawabanmu kurang tepat. Angkanya sebenarnya 10% \u2014 cukup tinggi, ya?') },
  };
}

let SCRIPT: ScriptStep[] = [];
let RESULT: Results = { correct: { bg: '', speaker: '', text: '' }, wrong: { bg: '', speaker: '', text: '' } };

let step = -1;
let isTyping = false;
let typeTimer: ReturnType<typeof setTimeout> | null = null;
let waitingForClick = false;

let bg: HTMLImageElement;
let speakerEl: HTMLElement;
let speakerName: HTMLElement;
let textbox: HTMLElement;
let dialog: HTMLElement;
let arrow: HTMLElement;
let choicesEl: HTMLElement;
let screen: HTMLElement;

function changeBg(file: string): void {
  const url = BASE + file;
  if (bg.src.indexOf(file) !== -1 && bg.style.opacity !== '0.4') return;
  bg.style.opacity = '0.4';
  const img = new Image();
  img.onload = function () {
    bg.src = url;
    bg.style.opacity = '1';
  };
  img.src = url;
}

function showSpeaker(name: string): void {
  speakerName.textContent = name;
  speakerEl.classList.add('visible');
}

function hideSpeaker(): void {
  speakerEl.classList.remove('visible');
}

function hideChoices(): void {
  choicesEl.classList.remove('visible');
  choicesEl.innerHTML = '';
}

function typeText(text: string, cb?: () => void): void {
  isTyping = true;
  dialog.textContent = '';
  arrow.classList.remove('visible');
  textbox.style.display = 'block';
  hideChoices();

  let i = 0;
  (function tick(): void {
    if (i < text.length) {
      dialog.textContent += text[i++];
      typeTimer = setTimeout(tick, TYPE_SPEED);
    } else {
      isTyping = false;
      if (cb) cb();
    }
  })();
}

function finishType(): void {
  if (!isTyping) return;
  if (typeTimer) clearTimeout(typeTimer);
  isTyping = false;
  const s = SCRIPT[step];
  if (s && s.text) dialog.textContent = s.text;
  afterType();
}

function afterType(): void {
  const s = SCRIPT[step];
  if (s && s.choice) {
    renderChoices(s.choice);
  } else {
    arrow.classList.add('visible');
    waitingForClick = true;
  }
}

function renderChoices(choice: Choice): void {
  choicesEl.innerHTML = '';

  const q = document.createElement('div');
  q.className = 'vn-choice';
  q.style.cssText = 'cursor:default;';
  q.innerHTML = '<span style="color:#94A3B8;font-size:0.9rem;line-height:1.5;">' + choice.question + '</span>';
  choicesEl.appendChild(q);

  choice.options.forEach(function (opt: ChoiceOption) {
    const btn = document.createElement('button');
    btn.className = 'vn-choice';
    btn.innerHTML = '<span class="vn-choice-label">' + opt.label + '</span><span>' + opt.text + '</span>';
    btn.addEventListener('click', function (e: Event) {
      e.stopPropagation();
      handleChoice(opt.correct);
    });
    choicesEl.appendChild(btn);
  });

  textbox.style.display = 'none';
  hideSpeaker();
  choicesEl.classList.add('visible');
}

function handleChoice(isCorrect: boolean): void {
  hideChoices();
  textbox.style.display = 'block';

  const data = isCorrect ? RESULT.correct : RESULT.wrong;
  changeBg(data.bg);
  showSpeaker(data.speaker);

  typeText(data.text, function () {
    arrow.classList.add('visible');
    waitingForClick = true;
    step = SCRIPT.length;
  });

  step = SCRIPT.length;
}

function advance(): void {
  step++;
  if (step >= SCRIPT.length) {
    showEndCard();
    return;
  }

  const s = SCRIPT[step];
  if (s.bg) changeBg(s.bg);

  if (s.choice) {
    hideSpeaker();
    renderChoices(s.choice);
    return;
  }

  if (s.speaker) showSpeaker(s.speaker);
  typeText(s.text!, afterType);
}

function showEndCard(): void {
  hideSpeaker();
  hideChoices();
  textbox.style.display = 'block';
  dialog.innerHTML = '';
  arrow.classList.remove('visible');
  waitingForClick = false;
  screen.style.cursor = 'default';
  screen.removeEventListener('click', onClick);

  const endTitle = tr('home.demoEndTitle', 'Want to see what happens next?');
  const endDesc = tr('home.demoEndDesc', 'This was just the first 30 seconds. The full story has 5 chapters, 200+ scenes, and real branching paths.');
  const endCta = tr('home.demoEndCta', 'Play Full Story');

  const card = document.createElement('div');
  card.style.cssText = 'text-align:center;padding:0.5rem 0;';
  card.innerHTML =
    '<p style="color:#818CF8;font-weight:700;font-size:1.1rem;margin-bottom:0.5rem;font-family:Crimson Pro,serif;">' + endTitle + '</p>' +
    '<p style="color:#94A3B8;font-size:0.85rem;margin-bottom:1rem;">' + endDesc + '</p>' +
    '<a href="/story/?id=pahlawan-kesehatan-mental" class="btn-primary inline-block px-6 py-2.5 text-sm" data-umami-event="Demo End CTA" style="border-radius:10px;">' + endCta + '</a>';
  dialog.appendChild(card);
}

function onClick(): void {
  if (isTyping) { finishType(); return; }
  if (waitingForClick) { waitingForClick = false; advance(); }
}

export function initVNDemo(): void {
  SCRIPT = getScript();
  RESULT = getResult();

  bg = document.getElementById('vnBg') as HTMLImageElement;
  speakerEl = document.getElementById('vnSpeaker')!;
  speakerName = speakerEl.querySelector('.vn-speaker-name') as HTMLElement;
  textbox = document.getElementById('vnTextbox')!;
  dialog = document.getElementById('vnDialog')!;
  arrow = document.getElementById('vnContinue')!;
  choicesEl = document.getElementById('vnChoices')!;
  screen = bg.parentElement as HTMLElement;

  bg.src = BASE + '1.jpg';
  screen.setAttribute('tabindex', '0');
  screen.setAttribute('role', 'button');
  screen.setAttribute('aria-label', 'Story demo — click or press Enter to advance');
  screen.addEventListener('click', onClick);
  screen.addEventListener('keydown', function (e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  });

  const demoEl = document.getElementById('vnDemo');
  if ('IntersectionObserver' in window && demoEl) {
    let started = false;
    const observer = new IntersectionObserver(function (entries: IntersectionObserverEntry[]) {
      if (started) return;
      if (entries[0].isIntersecting) {
        started = true;
        observer.disconnect();
        setTimeout(advance, 600);
      }
    }, { threshold: 0.4 });
    observer.observe(demoEl);
  } else {
    advance();
  }
}
