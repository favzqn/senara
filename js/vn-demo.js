/**
 * Lightweight VN Demo Player
 * Self-contained interactive story demo — no engine dependency
 * Extracted from Chapter 1, Scene 2 of "Mental Health Hero"
 */

(function () {
  'use strict';

  var TYPE_SPEED = 28;
  var BASE = 'monogatari/assets/scenes/';

  function t(key, fallback) {
    if (typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady()) {
      var val = I18n.t(key);
      if (val && val !== key) return val;
    }
    return fallback;
  }

  function getScript() {
    return [
      { bg: '1.jpg', speaker: t('home.demoSpeaker', 'Vani'), text: t('home.demoText1', 'Oh, halo. Jadi, kamu adalah Calon Pahlawan Kesehatan Mental yang baru?') },
      { bg: '1.jpg', speaker: t('home.demoSpeaker', 'Vani'), text: t('home.demoText2', 'Aku Vani, instruktur di Pusat Pelatihan Pahlawan Kesehatan Mental.') },
      { bg: '2.jpg', speaker: t('home.demoSpeaker', 'Vani'), text: t('home.demoText3', 'Aku ada sedikit tebak-tebakan. Siap?') },
      {
        bg: '2.jpg',
        choice: {
          question: t('home.demoQuizQ', 'Coba tebak. Menurutmu, berapa persen (%) penduduk Indonesia usia 15\u201324 tahun yang mengalami gangguan mental emosional?'),
          options: [
            { label: 'A', text: t('home.demoQuizA', '3%'), correct: false },
            { label: 'B', text: t('home.demoQuizB', '5%'), correct: false },
            { label: 'C', text: t('home.demoQuizC', '10%'), correct: true },
          ],
        },
      },
    ];
  }

  function getResult() {
    return {
      correct: { bg: '2-benar.jpg', speaker: t('home.demoSpeaker', 'Vani'), text: t('home.demoCorrect', 'Hebat, tebakanmu benar! 10% atau 1 dari 10 pemuda mengalami gangguan mental-emosional.') },
      wrong: { bg: '2-salah.jpg', speaker: t('home.demoSpeaker', 'Vani'), text: t('home.demoWrong', 'Hmm, jawabanmu kurang tepat. Angkanya sebenarnya 10% \u2014 cukup tinggi, ya?') },
    };
  }

  var SCRIPT = [];
  var RESULT = {};

  var step = -1;
  var isTyping = false;
  var typeTimer = null;
  var waitingForClick = false;

  var bg = document.getElementById('vnBg');
  var speakerEl = document.getElementById('vnSpeaker');
  var speakerName = speakerEl.querySelector('.vn-speaker-name');
  var textbox = document.getElementById('vnTextbox');
  var dialog = document.getElementById('vnDialog');
  var arrow = document.getElementById('vnContinue');
  var choicesEl = document.getElementById('vnChoices');
  var screen = bg.parentElement;

  function changeBg(file) {
    var url = BASE + file;
    if (bg.src.indexOf(file) !== -1 && bg.style.opacity !== '0.4') return;
    bg.style.opacity = '0.4';
    var img = new Image();
    img.onload = function () {
      bg.src = url;
      bg.style.opacity = '1';
    };
    img.src = url;
  }

  function showSpeaker(name) {
    speakerName.textContent = name;
    speakerEl.classList.add('visible');
  }

  function hideSpeaker() {
    speakerEl.classList.remove('visible');
  }

  function hideChoices() {
    choicesEl.classList.remove('visible');
    choicesEl.innerHTML = '';
  }

  function typeText(text, cb) {
    isTyping = true;
    dialog.textContent = '';
    arrow.classList.remove('visible');
    textbox.style.display = 'block';
    hideChoices();

    var i = 0;
    (function tick() {
      if (i < text.length) {
        dialog.textContent += text[i++];
        typeTimer = setTimeout(tick, TYPE_SPEED);
      } else {
        isTyping = false;
        if (cb) cb();
      }
    })();
  }

  function finishType() {
    if (!isTyping) return;
    clearTimeout(typeTimer);
    isTyping = false;
    var s = SCRIPT[step];
    if (s && s.text) dialog.textContent = s.text;
    afterType();
  }

  function afterType() {
    var s = SCRIPT[step];
    if (s && s.choice) {
      renderChoices(s.choice);
    } else {
      arrow.classList.add('visible');
      waitingForClick = true;
    }
  }

  function renderChoices(choice) {
    choicesEl.innerHTML = '';

    var q = document.createElement('div');
    q.className = 'vn-choice';
    q.style.cssText = 'cursor:default;';
    q.innerHTML = '<span style="color:#94A3B8;font-size:0.9rem;line-height:1.5;">' + choice.question + '</span>';
    choicesEl.appendChild(q);

    choice.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.className = 'vn-choice';
      btn.innerHTML = '<span class="vn-choice-label">' + opt.label + '</span><span>' + opt.text + '</span>';
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        handleChoice(opt.correct);
      });
      choicesEl.appendChild(btn);
    });

    textbox.style.display = 'none';
    hideSpeaker();
    choicesEl.classList.add('visible');
  }

  function handleChoice(isCorrect) {
    hideChoices();
    textbox.style.display = 'block';

    var data = isCorrect ? RESULT.correct : RESULT.wrong;
    changeBg(data.bg);
    showSpeaker(data.speaker);

    typeText(data.text, function () {
      arrow.classList.add('visible');
      waitingForClick = true;
      step = SCRIPT.length;
    });

    step = SCRIPT.length;
  }

  function advance() {
    step++;
    if (step >= SCRIPT.length) {
      showEndCard();
      return;
    }

    var s = SCRIPT[step];
    if (s.bg) changeBg(s.bg);

    if (s.choice) {
      hideSpeaker();
      renderChoices(s.choice);
      return;
    }

    if (s.speaker) showSpeaker(s.speaker);
    typeText(s.text, afterType);
  }

  function showEndCard() {
    hideSpeaker();
    hideChoices();
    textbox.style.display = 'block';
    dialog.innerHTML = '';
    arrow.classList.remove('visible');
    waitingForClick = false;
    screen.style.cursor = 'default';
    screen.removeEventListener('click', onClick);

    var endTitle = t('home.demoEndTitle', 'Want to see what happens next?');
    var endDesc = t('home.demoEndDesc', 'This was just the first 30 seconds. The full story has 5 chapters, 200+ scenes, and real branching paths.');
    var endCta = t('home.demoEndCta', 'Play Full Story');

    var card = document.createElement('div');
    card.style.cssText = 'text-align:center;padding:0.5rem 0;';
    card.innerHTML =
      '<p style="color:#818CF8;font-weight:700;font-size:1.1rem;margin-bottom:0.5rem;font-family:Crimson Pro,serif;">' + endTitle + '</p>' +
      '<p style="color:#94A3B8;font-size:0.85rem;margin-bottom:1rem;">' + endDesc + '</p>' +
      '<a href="story.html?id=pahlawan-kesehatan-mental" class="btn-primary inline-block px-6 py-2.5 text-sm" data-umami-event="Demo End CTA" style="border-radius:10px;">' + endCta + '</a>';
    dialog.appendChild(card);
  }

  function onClick() {
    if (isTyping) { finishType(); return; }
    if (waitingForClick) { waitingForClick = false; advance(); }
  }

  function init() {
    SCRIPT = getScript();
    RESULT = getResult();

    bg.src = BASE + '1.jpg';
    screen.setAttribute('tabindex', '0');
    screen.setAttribute('role', 'button');
    screen.setAttribute('aria-label', 'Story demo — click or press Enter to advance');
    screen.addEventListener('click', onClick);
    screen.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    });

    var demoEl = document.getElementById('vnDemo');
    if ('IntersectionObserver' in window && demoEl) {
      var started = false;
      var observer = new IntersectionObserver(function (entries) {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
