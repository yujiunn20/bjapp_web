(function () {
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
        { title: "回放", path: "content/app/replay.html" },
        { title: "隱私權政策", path: "content/app/privacy.html" }
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
      heroBody: "把 blackjack 的策略學習、算牌練習、實戰牌桌、錯誤回放與模擬統計接成一套完整訓練流程。",
      appName: "二十一點算牌訓練器",
      appTagline: "訓練・統計・回放",
      downloadEyebrow: "Practice with the app",
      downloadBody: "用訓練、統計與回放功能，把基本策略和算牌練成穩定習慣。",
      sections
    },
    en: {
      brandSubtitle: "Blackjack counting trainer",
      tabCardCounting: "Card Counting",
      tabApp: "App",
      languageLabel: "Language",
      heroEyebrow: "Blackjack strategy and card counting",
      heroTitle: "Blackjack Card Counting and Training Tool",
      heroBody: "Connect blackjack strategy learning, card counting practice, live table play, mistake replay, and simulation statistics into one complete training flow.",
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
            { title: "Replay", path: "content/app/replay.html" },
            { title: "Privacy Policy", path: "content/app/privacy.html" }
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
      heroBody: "blackjack の戦略学習、カードカウント練習、実戦形式のテーブル、ミスのリプレイ、シミュレーション統計を 1 つの完整なトレーニングフローにつなげます。",
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
            { title: "リプレイ", path: "content/app/replay.html" },
            { title: "プライバシーポリシー", path: "content/app/privacy.html" }
          ]
        }
      }
    }
  };

  const canonicalBase = "https://blackjack.yuchunlab.com/";
  const playUrl = "https://play.google.com/store/apps/details?id=com.yujiunn.blackjack_mobile";
  let activeLanguage = localStorage.getItem("blackjackLanguage") || document.documentElement.lang || "zh-Hant";

  function isHomePage() {
    const path = window.location.pathname.replace(/\\/g, "/");
    return path === "/" || path.endsWith("/index.html") || !path.includes("/content/");
  }

  function pagePath() {
    const match = window.location.pathname.match(/content\/(?:app|cardcounting)\/[^/.]+(?:\.html)?$/);
    if (match) {
      const normalized = match[0].replace(/\\/g, "/");
      return normalized.endsWith(".html") ? normalized : `${normalized}.html`;
    }
    const hrefMatch = window.location.href.match(/content\/(?:app|cardcounting)\/[^?#]+\.html/);
    return hrefMatch ? hrefMatch[0].replace(/^.*content\//, "content/") : "content/app/overview.html";
  }

  function sectionForPath(path) {
    return path.includes("/app/") ? "app" : "cardcounting";
  }

  function relativeUrl(path) {
    if (window.location.protocol !== "file:") {
      if (path === "content/app/overview.html") {
        return "/";
      }
      return `/${path.replace(/\.html$/, "")}`;
    }

    if (isHomePage()) {
      return path === "content/app/overview.html" ? "index.html" : path;
    }

    const current = pagePath();
    const currentDir = current.includes("/app/") ? "content/app/" : "content/cardcounting/";
    if (path.startsWith(currentDir)) {
      return path.replace(currentDir, "");
    }
    return path.replace("content/", "../");
  }

  function assetUrl(path) {
    if (window.location.protocol !== "file:") {
      return `/${path}`;
    }
    return isHomePage() ? path : `../../${path}`;
  }

  function setMeta(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.append(meta);
    }
    meta.content = content;
  }

  function setCanonical(path) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = isHomePage() || path === "" ? canonicalBase : `${canonicalBase}${path.replace(/\.html$/, "")}`;
  }

  function currentPageInfo(localized) {
    const path = pagePath();
    const sectionKey = sectionForPath(path);
    const section = localized.sections[sectionKey];
    const index = sections[sectionKey].items.findIndex((item) => item.path === path);
    const item = section.items[index >= 0 ? index : 0];
    return { path, sectionKey, section, item, index: index >= 0 ? index : 0 };
  }

  function pageTitle(path, fallbackTitle) {
    const titles = {
      "content/app/overview.html": "二十一點算牌訓練器 App 概要｜Blackjack Card Counting Trainer",
      "content/app/game.html": "二十一點 Blackjack 遊戲模式介紹｜算牌訓練器 App",
      "content/app/training.html": "Blackjack 策略與 Hi-Lo 算牌訓練功能｜二十一點算牌訓練器",
      "content/app/statistics.html": "Blackjack 統計模擬、EV、ROI 與變異數｜二十一點算牌訓練器",
      "content/app/replay.html": "Blackjack 牌局回放與錯誤檢討｜二十一點算牌訓練器",
      "content/app/privacy.html": "二十一點算牌訓練器隱私權政策｜Blackjack Trainer Privacy Policy",
      "content/cardcounting/rules.html": "21點規則教學｜Blackjack 基本玩法與桌規說明",
      "content/cardcounting/basic-strategy.html": "21點基本策略教學｜Blackjack 策略表與決策練習",
      "content/cardcounting/hilo.html": "Hi-Lo 算牌教學｜Blackjack Running Count 與 True Count",
      "content/cardcounting/bet-ramp.html": "Bet Ramp 下注級距教學｜Blackjack True Count 下注策略",
      "content/cardcounting/high-cards.html": "高牌原理教學｜Blackjack 算牌為什麼有效",
      "content/cardcounting/deviations.html": "Blackjack Deviations 教學｜算牌偏離基本策略",
      "content/cardcounting/ev-variance.html": "Blackjack EV、ROI 與變異數教學｜算牌長期期望值",
      "content/cardcounting/reality.html": "Blackjack 算牌理想與現實｜桌規、資金與風險限制",
      "content/cardcounting/hiopt.html": "Hi-Opt I 算牌補充教學｜Blackjack 進階算牌系統"
    };
    return titles[path] || `${fallbackTitle}｜二十一點算牌訓練器 Blackjack Trainer`;
  }

  function renderLayout() {
    const article = document.querySelector("article");
    if (!article || document.querySelector(".topbar")) {
      return;
    }

    const t = translations[activeLanguage] || translations["zh-Hant"];
    const { path, sectionKey, section, item } = currentPageInfo(t);

    document.documentElement.lang = activeLanguage;
    document.title = pageTitle(path, item.title);
    setMeta("viewport", "width=device-width, initial-scale=1");
    setMeta("description", `${item.title}：二十一點算牌訓練器的 blackjack 教學、App 功能介紹與練習內容。`);
    setCanonical(isHomePage() ? "" : path);

    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <div class="topbar-inner">
        <a class="brand" href="${relativeUrl("content/app/overview.html")}" aria-label="Blackjack Trainer 首頁">
          <img src="${assetUrl("assets/img/blackjack-icon.png")}" alt="二十一點算牌訓練器 App 圖示" class="brand-icon">
          <span>
            <strong>Blackjack</strong>
            <small>${t.brandSubtitle}</small>
          </span>
        </a>
        <div class="header-actions">
          <nav class="section-tabs" aria-label="主要分類">
            <a class="tab-button ${sectionKey === "cardcounting" ? "is-active" : ""}" href="${relativeUrl("content/cardcounting/rules.html")}">${t.tabCardCounting}</a>
            <a class="tab-button ${sectionKey === "app" ? "is-active" : ""}" href="${relativeUrl("content/app/overview.html")}">${t.tabApp}</a>
          </nav>
          <label class="language-picker">
            <span>${t.languageLabel}</span>
            <select id="languageSelect" aria-label="選擇語言">
              <option value="zh-Hant">中文</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </label>
        </div>
      </div>`;

    const shell = document.createElement("div");
    shell.className = "site-shell";
    shell.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${t.heroEyebrow}</p>
          <h1>${t.heroTitle}</h1>
          <p class="hero-subtitle">${t.heroBody}</p>
        </div>
        <div class="hero-card" aria-label="App preview">
          <img src="${assetUrl("assets/img/blackjack-icon.png")}" alt="二十一點算牌訓練器 App icon">
          <div>
            <strong>${t.appName}</strong>
            <span>${t.appTagline}</span>
          </div>
        </div>
      </section>
      <main class="layout">
        <aside class="sidebar">
          <div class="sidebar-heading">
            <span>${section.label}</span>
            <small>${section.subtitle}</small>
          </div>
          <nav class="side-nav" aria-label="內容選單"></nav>
        </aside>
        <section class="content-panel">
          <div class="content-heading">
            <p class="eyebrow">${section.eyebrow}</p>
            <h2>${item.title}</h2>
          </div>
        </section>
      </main>
      <section class="download-band" aria-labelledby="downloadTitle">
        <div class="download-copy">
          <img src="${assetUrl("assets/img/blackjack-icon.png")}" alt="二十一點算牌訓練器 App 圖示" class="download-icon">
          <div>
            <p class="eyebrow">${t.downloadEyebrow}</p>
            <h2 id="downloadTitle">${t.appName}</h2>
            <p>${t.downloadBody}</p>
          </div>
        </div>
        <a class="play-badge" href="${playUrl}" target="_blank" rel="noopener" aria-label="前往 Google Play 下載二十一點算牌訓練器">
          <svg viewBox="0 0 32 36" aria-hidden="true">
            <path fill="#00c3ff" d="M2.2 1.1 19.7 18 2.2 34.9A3 3 0 0 1 1 32.5v-29A3 3 0 0 1 2.2 1.1z"/>
            <path fill="#00e070" d="m19.7 18 4.9-4.7L5 1.9a3.1 3.1 0 0 0-2.8-.8L19.7 18z"/>
            <path fill="#ffd400" d="m19.7 18-17.5 17a3.1 3.1 0 0 0 2.8-.8l19.6-11.5-4.9-4.7z"/>
            <path fill="#ff4b55" d="m24.6 13.3 5.2 3a2 2 0 0 1 0 3.4l-5.2 3-4.9-4.7 4.9-4.7z"/>
          </svg>
          <span><em>GET IT ON</em><strong>Google Play</strong></span>
        </a>
        <div class="download-meta">
          <span>© 2026 CHANG YU-CHUN</span>
          <a href="mailto:yj.apps.devs@gmail.com"><strong>Support</strong> yj.apps.devs@gmail.com</a>
          <a href="${relativeUrl("content/app/privacy.html")}"><strong>Privacy</strong> Policy</a>
          <a href="https://blackjack.yuchunlab.com/"><strong>Website</strong> blackjack.yuchunlab.com</a>
        </div>
      </section>`;

    const sideNav = shell.querySelector(".side-nav");
    section.items.forEach((navItem, index) => {
      const link = document.createElement("a");
      link.className = `side-link ${navItem.path === path ? "is-active" : ""}`;
      link.href = relativeUrl(sections[sectionKey].items[index].path);
      link.textContent = navItem.title;
      sideNav.append(link);
    });

    const contentPanel = shell.querySelector(".content-panel");
    article.querySelector("h2")?.remove();
    article.classList.add("article-content");
    contentPanel.append(article);

    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.id = "imageLightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "圖片放大檢視");
    lightbox.innerHTML = `
      <div class="image-lightbox-dialog">
        <button class="image-lightbox-close" id="lightboxClose" type="button" aria-label="關閉圖片">×</button>
        <img id="lightboxImage" alt="放大的 App 截圖">
        <p class="image-lightbox-caption" id="lightboxCaption" hidden></p>
      </div>`;

    document.body.prepend(header);
    document.body.append(shell, lightbox);

    const languageSelect = document.querySelector("#languageSelect");
    languageSelect.value = activeLanguage;
    languageSelect.addEventListener("change", () => {
      localStorage.setItem("blackjackLanguage", languageSelect.value);
      window.location.reload();
    });

    reserveFooterSpace();
    positionMobileSectionNav();
    window.addEventListener("resize", reserveFooterSpace);
    window.addEventListener("resize", positionMobileSectionNav);
    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "open-image-lightbox") {
        openImageLightbox(event.data);
      }
    });
  }

  function openImageLightbox({ src, alt = "", caption = "" }) {
    const imageLightbox = document.querySelector("#imageLightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const lightboxCaption = document.querySelector("#lightboxCaption");
    if (!imageLightbox || !lightboxImage) {
      return;
    }
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = caption;
    lightboxCaption.hidden = !caption;
    imageLightbox.classList.add("is-open");
    imageLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeImageLightbox() {
    const imageLightbox = document.querySelector("#imageLightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    if (!imageLightbox || !lightboxImage) {
      return;
    }
    imageLightbox.classList.remove("is-open");
    imageLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.removeAttribute("src");
  }

  function reserveFooterSpace() {
    const downloadBand = document.querySelector(".download-band");
    const siteShell = document.querySelector(".site-shell");
    if (!downloadBand || !siteShell) {
      return;
    }
    const footerHeight = Math.ceil(downloadBand.getBoundingClientRect().height);
    siteShell.style.paddingBottom = `${footerHeight + (window.innerWidth <= 820 ? 12 : 32)}px`;
  }

  function positionMobileSectionNav() {
    const topbar = document.querySelector(".topbar");
    const sidebar = document.querySelector(".sidebar");
    const siteShell = document.querySelector(".site-shell");
    if (!topbar || !sidebar || !siteShell) {
      return;
    }
    if (window.innerWidth > 820) {
      document.documentElement.style.removeProperty("--mobile-nav-top");
      siteShell.style.removeProperty("paddingTop");
      return;
    }
    const topbarHeight = Math.ceil(topbar.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--mobile-nav-top", `${Math.max(0, topbarHeight - 1)}px`);
    requestAnimationFrame(() => {
      const navHeight = Math.ceil(sidebar.getBoundingClientRect().height);
      siteShell.style.paddingTop = `${topbarHeight + navHeight + 16}px`;
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.matches("#imageLightbox, #lightboxClose")) {
      closeImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageLightbox();
    }
  });

  renderLayout();
  setTimeout(reserveFooterSpace, 150);
  setTimeout(positionMobileSectionNav, 150);
})();
