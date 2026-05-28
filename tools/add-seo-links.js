const fs = require("fs");
const path = require("path");

const languages = [
  {
    prefix: "",
    appDir: "content/app",
    cardDir: "content/cardcounting",
    related: "相關閱讀",
    labels: {
      overview: "App 概要",
      game: "遊戲模式",
      training: "訓練模式",
      statistics: "統計模擬",
      replay: "Replay 回放",
      faq: "FAQ 常見問題",
      rules: "21點規則",
      basic: "基本策略",
      hilo: "Hi-Lo 算牌",
      hiopt: "Hi-Opt I",
      highCards: "高牌原理",
      deviations: "Deviations",
      betRamp: "Bet Ramp",
      ev: "EV 與變異數",
      reality: "理想與現實"
    }
  },
  {
    prefix: "/zh-Hant",
    appDir: "zh-Hant/content/app",
    cardDir: "zh-Hant/content/cardcounting",
    related: "相關閱讀",
    labels: null
  },
  {
    prefix: "/en",
    appDir: "en/content/app",
    cardDir: "en/content/cardcounting",
    related: "Related Reading",
    labels: {
      overview: "App Overview",
      game: "Game Mode",
      training: "Training Mode",
      statistics: "Statistics Simulation",
      replay: "Replay Review",
      faq: "FAQ",
      rules: "Blackjack Rules",
      basic: "Basic Strategy",
      hilo: "Hi-Lo Card Counting",
      hiopt: "Hi-Opt I",
      highCards: "High Card Principle",
      deviations: "Deviations",
      betRamp: "Bet Ramp",
      ev: "EV and Variance",
      reality: "Theory and Reality"
    }
  },
  {
    prefix: "/ja",
    appDir: "ja/content/app",
    cardDir: "ja/content/cardcounting",
    related: "関連ページ",
    labels: {
      overview: "アプリ概要",
      game: "ゲームモード",
      training: "トレーニングモード",
      statistics: "統計シミュレーション",
      replay: "Replay 見直し",
      faq: "FAQ",
      rules: "ブラックジャックのルール",
      basic: "基本戦略",
      hilo: "Hi-Lo カウント",
      hiopt: "Hi-Opt I",
      highCards: "高いカードの原理",
      deviations: "Deviations",
      betRamp: "Bet Ramp",
      ev: "EV と分散",
      reality: "理想と現実"
    }
  }
];

languages[1].labels = languages[0].labels;

const routes = {
  overview: "home",
  game: "content/app/game",
  training: "content/app/training",
  statistics: "content/app/statistics",
  replay: "content/app/replay",
  faq: "content/app/faq",
  rules: "content/cardcounting/rules",
  basic: "content/cardcounting/basic-strategy",
  hilo: "content/cardcounting/hilo",
  hiopt: "content/cardcounting/hiopt",
  highCards: "content/cardcounting/high-cards",
  deviations: "content/cardcounting/deviations",
  betRamp: "content/cardcounting/bet-ramp",
  ev: "content/cardcounting/ev-variance",
  reality: "content/cardcounting/reality"
};

const appRelated = {
  overview: ["training", "game", "statistics", "faq"],
  game: ["training", "betRamp", "replay", "rules"],
  training: ["basic", "hilo", "deviations", "game"],
  statistics: ["ev", "betRamp", "game", "faq"],
  replay: ["game", "training", "statistics"],
  faq: ["overview", "training", "statistics", "reality"]
};

const lessonRelated = {
  "rules.html": ["basic", "training", "game"],
  "basic-strategy.html": ["training", "deviations", "rules"],
  "hilo.html": ["training", "betRamp", "highCards", "game"],
  "hiopt.html": ["game", "hilo", "deviations"],
  "high-cards.html": ["hilo", "betRamp", "ev"],
  "deviations.html": ["training", "basic", "hilo"],
  "bet-ramp.html": ["game", "statistics", "ev"],
  "ev-variance.html": ["statistics", "betRamp", "reality"],
  "reality.html": ["faq", "ev", "rules"]
};

function href(language, key) {
  const route = routes[key];
  if (route === "home") {
    return language.prefix ? `${language.prefix}/` : "/";
  }
  return `${language.prefix}/${route}`.replace(/^\/\//, "/");
}

function relatedBlock(language, keys) {
  const links = keys
    .map((key) => `      <li><a href="${href(language, key)}">${language.labels[key]}</a></li>`)
    .join("\n");
  return `
    <nav class="related-links" aria-label="${language.related}" data-seo-related="true">
      <h3>${language.related}</h3>
      <ul>
${links}
      </ul>
    </nav>
`;
}

function removeOldRelated(html) {
  return html
    .replace(/\s*<h3 class="simulation-heading" data-seo-related="true">[\s\S]*?<\/div>\s*/g, "\n")
    .replace(/\s*<nav class="related-links"[\s\S]*?data-seo-related="true"[\s\S]*?<\/nav>\s*/g, "\n");
}

function writeRelated(filePath, block) {
  if (!fs.existsSync(filePath)) {
    return;
  }
  const current = fs.readFileSync(filePath, "utf8");
  const cleaned = removeOldRelated(current);
  const next = cleaned.replace(/\s*<\/article>/s, `${block}\n  </article>`);
  fs.writeFileSync(filePath, next, "utf8");
}

function updateVersions(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updateVersions(fullPath);
      continue;
    }
    if (!entry.name.endsWith(".html")) {
      continue;
    }
    const text = fs.readFileSync(fullPath, "utf8")
      .replaceAll("layout.js?v=20260527-13", "layout.js?v=20260528-1")
      .replaceAll("layout.js?v=20260527-14", "layout.js?v=20260528-1")
      .replaceAll("translate.js?v=20260527-5", "translate.js?v=20260527-6")
      .replaceAll("content.css?v=20260526-10", "content.css?v=20260528-1");
    fs.writeFileSync(fullPath, text, "utf8");
  }
}

for (const language of languages) {
  for (const [page, keys] of Object.entries(appRelated)) {
    writeRelated(path.join(language.appDir, `${page}.html`), relatedBlock(language, keys));
  }
  for (const [fileName, keys] of Object.entries(lessonRelated)) {
    writeRelated(path.join(language.cardDir, fileName), relatedBlock(language, keys));
  }
}

updateVersions("content");
updateVersions("en/content");
updateVersions("ja/content");
updateVersions("zh-Hant/content");
