const sections = {
  cardcounting: {
    label: "算牌學習",
    eyebrow: "Card Counting",
    subtitle: "從規則到實戰觀念",
    items: [
      { title: "21點規則", path: "content/cardcounting/rules.html" },
      { title: "基本策略", path: "content/cardcounting/basic-strategy.html" },
      { title: "Hi-Lo 算牌", path: "content/cardcounting/hilo.html" },
      { title: "Bet Ramp", path: "content/cardcounting/bet-ramp.html" },
      { title: "高牌原理", path: "content/cardcounting/high-cards.html" },
      { title: "Deviations", path: "content/cardcounting/deviations.html" },
      { title: "EV・量級・變異數", path: "content/cardcounting/ev-variance.html" },
      { title: "理想與現實", path: "content/cardcounting/reality.html" },
      { title: "補充：Hi-Opt", path: "content/cardcounting/hiopt.html" }
    ]
  },
  app: {
    label: "App 介紹",
    eyebrow: "App Features",
    subtitle: "練習、統計與回放",
    items: [
      { title: "概要", path: "content/app/overview.html" },
      { title: "遊戲", path: "content/app/game.html" },
      { title: "訓練", path: "content/app/training.html" },
      { title: "統計", path: "content/app/statistics.html" },
      { title: "回放", path: "content/app/replay.html" }
    ]
  }
};

const translations = {
  "zh-Hant": {
    brandSubtitle: "21點算牌訓練",
    tabCardCounting: "算牌學習",
    tabApp: "App 介紹",
    languageLabel: "語言",
    heroEyebrow: "Blackjack strategy and card counting",
    heroTitle: "21點算牌學習與訓練工具",
    heroBody: "從基本規則、基本策略到 Hi-Lo 算牌，用清楚的教學內容搭配 App 截圖，幫助玩家建立可練習、可追蹤的 blackjack 訓練流程。",
    appName: "二十一點算牌訓練器",
    appTagline: "訓練・統計・回放",
    downloadEyebrow: "Practice with the app",
    downloadBody: "用訓練、統計與回放功能，把基本策略和算牌練成穩定習慣。",
    sections: sections
  },
  en: {
    brandSubtitle: "Blackjack counting trainer",
    tabCardCounting: "Card Counting",
    tabApp: "App",
    languageLabel: "Language",
    heroEyebrow: "Blackjack strategy and card counting",
    heroTitle: "Blackjack Card Counting and Training Tool",
    heroBody: "Learn from rules and basic strategy to Hi-Lo counting, with clear lessons and app screenshots that build a practiceable, trackable blackjack training flow.",
    appName: "Blackjack Card Counting Trainer",
    appTagline: "Training・Stats・Replay",
    downloadEyebrow: "Practice with the app",
    downloadBody: "Use training, statistics, and replay to turn basic strategy and card counting into stable habits.",
    sections: {
      cardcounting: {
        label: "Card Counting",
        eyebrow: "Card Counting",
        subtitle: "From rules to practical concepts",
        items: [
          { title: "Blackjack Rules", path: "content/cardcounting/rules.html" },
          { title: "Basic Strategy", path: "content/cardcounting/basic-strategy.html" },
          { title: "Hi-Lo Counting", path: "content/cardcounting/hilo.html" },
          { title: "Bet Ramp", path: "content/cardcounting/bet-ramp.html" },
          { title: "High Card Principle", path: "content/cardcounting/high-cards.html" },
          { title: "Deviations", path: "content/cardcounting/deviations.html" },
          { title: "EV, Scale, and Variance", path: "content/cardcounting/ev-variance.html" },
          { title: "Theory and Reality", path: "content/cardcounting/reality.html" },
          { title: "Extra: Hi-Opt", path: "content/cardcounting/hiopt.html" }
        ]
      },
      app: {
        label: "App",
        eyebrow: "App Features",
        subtitle: "Training, stats, and replay",
        items: [
          { title: "Overview", path: "content/app/overview.html" },
          { title: "Game", path: "content/app/game.html" },
          { title: "Training", path: "content/app/training.html" },
          { title: "Statistics", path: "content/app/statistics.html" },
          { title: "Replay", path: "content/app/replay.html" }
        ]
      }
    }
  },
  ja: {
    brandSubtitle: "ブラックジャック カウント練習",
    tabCardCounting: "カウント学習",
    tabApp: "アプリ紹介",
    languageLabel: "言語",
    heroEyebrow: "Blackjack strategy and card counting",
    heroTitle: "ブラックジャックのカウント学習と練習ツール",
    heroBody: "基本ルール、基本戦略、Hi-Lo カウントまで、わかりやすい解説とアプリ画面で練習しやすい学習フローを作ります。",
    appName: "ブラックジャック カウントトレーナー",
    appTagline: "練習・統計・リプレイ",
    downloadEyebrow: "Practice with the app",
    downloadBody: "練習、統計、リプレイで基本戦略とカウントを安定した習慣にします。",
    sections: {
      cardcounting: {
        label: "カウント学習",
        eyebrow: "Card Counting",
        subtitle: "ルールから実戦概念まで",
        items: [
          { title: "ブラックジャックのルール", path: "content/cardcounting/rules.html" },
          { title: "基本戦略", path: "content/cardcounting/basic-strategy.html" },
          { title: "Hi-Lo カウント", path: "content/cardcounting/hilo.html" },
          { title: "ベットランプ", path: "content/cardcounting/bet-ramp.html" },
          { title: "高カードの原理", path: "content/cardcounting/high-cards.html" },
          { title: "ディビエーション", path: "content/cardcounting/deviations.html" },
          { title: "EV・規模感・分散", path: "content/cardcounting/ev-variance.html" },
          { title: "理想と現実", path: "content/cardcounting/reality.html" },
          { title: "補足：Hi-Opt", path: "content/cardcounting/hiopt.html" }
        ]
      },
      app: {
        label: "アプリ紹介",
        eyebrow: "App Features",
        subtitle: "練習・統計・リプレイ",
        items: [
          { title: "概要", path: "content/app/overview.html" },
          { title: "ゲーム", path: "content/app/game.html" },
          { title: "トレーニング", path: "content/app/training.html" },
          { title: "統計", path: "content/app/statistics.html" },
          { title: "リプレイ", path: "content/app/replay.html" }
        ]
      }
    }
  }
};

const sideNav = document.querySelector("#sideNav");
const sidebarTitle = document.querySelector("#sidebarTitle");
const sidebarSubtitle = document.querySelector("#sidebarSubtitle");
const contentSectionLabel = document.querySelector("#contentSectionLabel");
const contentTitle = document.querySelector("#contentTitle");
const contentFrame = document.querySelector("#contentFrame");
const tabButtons = [...document.querySelectorAll(".tab-button")];
const languageSelect = document.querySelector("#languageSelect");
const imageLightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");

const contentHeights = {
  "content/cardcounting/rules.html": 1800,
  "content/cardcounting/basic-strategy.html": 2800,
  "content/cardcounting/hilo.html": 2200,
  "content/cardcounting/bet-ramp.html": 1800,
  "content/cardcounting/high-cards.html": 1700,
  "content/cardcounting/deviations.html": 2400,
  "content/cardcounting/ev-variance.html": 3000,
  "content/cardcounting/reality.html": 900,
  "content/cardcounting/hiopt.html": 1700,
  "content/app/overview.html": 1200,
  "content/app/game.html": 4200,
  "content/app/training.html": 4200,
  "content/app/statistics.html": 4200,
  "content/app/replay.html": 2400
};

let activeSection = "cardcounting";
let activeIndex = 0;
let activeLanguage = localStorage.getItem("blackjackLanguage") || document.documentElement.lang || "zh-Hant";

function localizedSections() {
  return (translations[activeLanguage] || translations["zh-Hant"]).sections;
}

function applyShellLanguage() {
  const t = translations[activeLanguage] || translations["zh-Hant"];
  document.documentElement.lang = activeLanguage;
  document.querySelector(".brand small").textContent = t.brandSubtitle;
  document.querySelector('[data-section="cardcounting"]').textContent = t.tabCardCounting;
  document.querySelector('[data-section="app"]').textContent = t.tabApp;
  document.querySelector(".language-picker span").textContent = t.languageLabel;
  document.querySelector(".hero .eyebrow").textContent = t.heroEyebrow;
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero p:last-child").textContent = t.heroBody;
  document.querySelector(".hero-card strong").textContent = t.appName;
  document.querySelector(".hero-card span").textContent = t.appTagline;
  document.querySelector(".download-copy .eyebrow").textContent = t.downloadEyebrow;
  document.querySelector("#downloadTitle").textContent = t.appName;
  document.querySelector(".download-copy p:last-child").textContent = t.downloadBody;
}

function resizeContentFrame() {
  try {
    const doc = contentFrame.contentDocument || contentFrame.contentWindow.document;
    const body = doc.body;
    const root = doc.documentElement;
    const bottom = Math.max(
      0,
      ...[...doc.body.querySelectorAll("article, figure, img, table, .app-screenshot-grid, .app-screenshot-card")]
        .map((element) => element.getBoundingClientRect().bottom)
    );
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      root.clientHeight,
      root.scrollHeight,
      root.offsetHeight,
      bottom + 40
    );
    const fallbackHeight = contentHeights[contentFrame.getAttribute("src")] || 900;
    contentFrame.style.height = `${Math.max(height + 80, fallbackHeight)}px`;
  } catch (error) {
    const fallbackHeight = contentHeights[contentFrame.getAttribute("src")] || 900;
    contentFrame.style.height = `${fallbackHeight}px`;
  }
}

function watchContentFrameSize() {
  resizeContentFrame();
  try {
    const doc = contentFrame.contentDocument || contentFrame.contentWindow.document;
    if (contentFrame._resizeObserver) {
      contentFrame._resizeObserver.disconnect();
    }
    contentFrame._resizeObserver = new ResizeObserver(resizeContentFrame);
    contentFrame._resizeObserver.observe(doc.documentElement);
    contentFrame._resizeObserver.observe(doc.body);
    doc.querySelectorAll("img").forEach((image) => {
      if (image.complete) {
        resizeContentFrame();
      } else {
        image.addEventListener("load", resizeContentFrame, { once: true });
      }
    });
    contentFrame.contentWindow.postMessage({ type: "set-language", language: activeLanguage }, "*");
  } catch (error) {
    // Same-origin local content is expected; fallback height is handled above.
  }
  requestAnimationFrame(resizeContentFrame);
  setTimeout(resizeContentFrame, 150);
  setTimeout(resizeContentFrame, 500);
  setTimeout(resizeContentFrame, 1000);
  setTimeout(resizeContentFrame, 2000);
  setTimeout(() => {
    try {
      contentFrame.contentWindow.postMessage({ type: "set-language", language: activeLanguage }, "*");
    } catch (error) {
      // The iframe content also observes the parent language.
    }
  }, 300);
  let ticks = 0;
  const interval = setInterval(() => {
    resizeContentFrame();
    ticks += 1;
    if (ticks >= 16) {
      clearInterval(interval);
    }
  }, 250);
}

function openImageLightbox({ src, alt = "", caption = "" }) {
  if (!imageLightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt;
  if (lightboxCaption) {
    lightboxCaption.textContent = caption;
    lightboxCaption.hidden = !caption;
  }
  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  if (lightboxClose) {
    lightboxClose.focus();
  }
}

function closeImageLightbox() {
  if (!imageLightbox || !lightboxImage) {
    return;
  }

  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
}

function setActiveContent(sectionKey, itemIndex = 0, shouldUpdateHash = true) {
  const allSections = localizedSections();
  const section = allSections[sectionKey] || allSections.cardcounting;
  const item = section.items[itemIndex] || section.items[0];

  activeSection = sectionKey;
  activeIndex = itemIndex;

  sidebarTitle.textContent = section.label;
  sidebarSubtitle.textContent = section.subtitle;
  contentSectionLabel.textContent = section.eyebrow;
  contentTitle.textContent = item.title;
  contentFrame.style.height = `${contentHeights[item.path] || 900}px`;
  contentFrame.src = item.path;
  contentFrame.title = item.title;

  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === sectionKey);
  });

  renderSideNav(sectionKey);

  if (shouldUpdateHash) {
    const slug = item.path.split("/").pop().replace(".html", "");
    window.history.replaceState(null, "", `#${sectionKey}/${slug}`);
  }
}

function renderSideNav(sectionKey) {
  const section = localizedSections()[sectionKey];
  sideNav.innerHTML = "";

  section.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "side-link";
    button.textContent = item.title;
    button.classList.toggle("is-active", index === activeIndex);
    button.addEventListener("click", () => setActiveContent(sectionKey, index));
    sideNav.append(button);
  });
}

function applyHashRoute() {
  const hash = window.location.hash.replace("#", "");
  const [sectionKey, slug] = hash.split("/");
  const section = localizedSections()[sectionKey];

  if (!section) {
    setActiveContent("cardcounting", 0, false);
    return;
  }

  const itemIndex = section.items.findIndex((item) => item.path.endsWith(`${slug}.html`));
  setActiveContent(sectionKey, itemIndex >= 0 ? itemIndex : 0, false);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveContent(button.dataset.section, 0));
});

contentFrame.addEventListener("load", watchContentFrameSize);
window.addEventListener("resize", resizeContentFrame);
window.addEventListener("hashchange", applyHashRoute);
window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "open-image-lightbox") {
    openImageLightbox(event.data);
  }
});

if (imageLightbox) {
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
      closeImageLightbox();
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeImageLightbox);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox && imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  }
});

if (languageSelect) {
  languageSelect.value = activeLanguage;
  applyShellLanguage();
  languageSelect.addEventListener("change", () => {
    activeLanguage = languageSelect.value;
    localStorage.setItem("blackjackLanguage", activeLanguage);
    applyShellLanguage();
    setActiveContent(activeSection, activeIndex, false);
    try {
      contentFrame.contentWindow.postMessage({ type: "set-language", language: activeLanguage }, "*");
    } catch (error) {
      // The iframe is same-origin content; the next load also applies language.
    }
  });
}

applyShellLanguage();
applyHashRoute();




