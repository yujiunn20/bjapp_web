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

const sideNav = document.querySelector("#sideNav");
const sidebarTitle = document.querySelector("#sidebarTitle");
const sidebarSubtitle = document.querySelector("#sidebarSubtitle");
const contentSectionLabel = document.querySelector("#contentSectionLabel");
const contentTitle = document.querySelector("#contentTitle");
const contentFrame = document.querySelector("#contentFrame");
const tabButtons = [...document.querySelectorAll(".tab-button")];
const languageSelect = document.querySelector("#languageSelect");

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
  } catch (error) {
    // Same-origin local content is expected; fallback height is handled above.
  }
  requestAnimationFrame(resizeContentFrame);
  setTimeout(resizeContentFrame, 150);
  setTimeout(resizeContentFrame, 500);
  setTimeout(resizeContentFrame, 1000);
  setTimeout(resizeContentFrame, 2000);
  let ticks = 0;
  const interval = setInterval(() => {
    resizeContentFrame();
    ticks += 1;
    if (ticks >= 16) {
      clearInterval(interval);
    }
  }, 250);
}

function setActiveContent(sectionKey, itemIndex = 0, shouldUpdateHash = true) {
  const section = sections[sectionKey] || sections.cardcounting;
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
  const section = sections[sectionKey];
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
  const section = sections[sectionKey];

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

if (languageSelect) {
  const savedLanguage = localStorage.getItem("blackjackLanguage") || document.documentElement.lang || "zh-Hant";
  languageSelect.value = savedLanguage;
  document.documentElement.lang = savedLanguage;
  languageSelect.addEventListener("change", () => {
    document.documentElement.lang = languageSelect.value;
    localStorage.setItem("blackjackLanguage", languageSelect.value);
  });
}

applyHashRoute();




