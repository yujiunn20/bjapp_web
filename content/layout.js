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
        { title: "補充：Hi-Opt", path: "content/cardcounting/hiopt.html" },
        { title: "補充：KO", path: "content/cardcounting/ko.html" },
        { title: "補充：Red 7", path: "content/cardcounting/red7.html" },
        { title: "補充：FELT", path: "content/cardcounting/felt.html" },
        { title: "補充：Zen Count", path: "content/cardcounting/zen.html" },
        { title: "補充：Omega II", path: "content/cardcounting/omega-ii.html" }
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
        { title: "策略", path: "content/app/strategy.html" },
        { title: "常見問題", path: "content/app/faq.html" },
        { title: "隱私權政策", path: "content/app/privacy.html" }
      ]
    },
    pc: {
      label: "PC 版",
      eyebrow: "PC App (Windows)",
      subtitle: "Windows 桌機訓練平台",
      items: [
        { title: "概要", path: "content/pc/overview.html" },
        { title: "遊戲", path: "content/pc/play.html" },
        { title: "訓練", path: "content/pc/training.html" },
        { title: "模擬統計", path: "content/pc/sim-stats.html" },
        { title: "回放", path: "content/pc/replay.html" },
        { title: "策略自訂", path: "content/pc/strategies.html" },
        { title: "隱私權政策", path: "content/pc/privacy.html" }
      ]
    }
  };

  const translations = {
    "zh-Hant": {
      brandSubtitle: "21點算牌訓練",
      tabCardCounting: "算牌學習",
      tabApp: "App 介紹",
      tabPC: "PC 版",
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
      tabPC: "PC App",
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
            { title: "Extra: Hi-Opt", path: "content/cardcounting/hiopt.html" },
            { title: "Extra: KO", path: "content/cardcounting/ko.html" },
            { title: "Extra: Red 7", path: "content/cardcounting/red7.html" },
            { title: "Extra: FELT", path: "content/cardcounting/felt.html" },
            { title: "Extra: Zen Count", path: "content/cardcounting/zen.html" },
            { title: "Extra: Omega II", path: "content/cardcounting/omega-ii.html" }
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
            { title: "Strategy", path: "content/app/strategy.html" },
            { title: "FAQ", path: "content/app/faq.html" },
            { title: "Privacy Policy", path: "content/app/privacy.html" }
          ]
        },
        pc: {
          label: "PC App",
          eyebrow: "PC App (Windows)",
          subtitle: "Windows training platform",
          items: [
            { title: "Overview", path: "content/pc/overview.html" },
            { title: "Play", path: "content/pc/play.html" },
            { title: "Training", path: "content/pc/training.html" },
            { title: "Sim & Stats", path: "content/pc/sim-stats.html" },
            { title: "Replay", path: "content/pc/replay.html" },
            { title: "Strategies", path: "content/pc/strategies.html" },
            { title: "Privacy Policy", path: "content/pc/privacy.html" }
          ]
        }
      }
    },
    ja: {
      brandSubtitle: "ブラックジャック カウント練習",
      tabCardCounting: "カウント学習",
      tabApp: "アプリ紹介",
      tabPC: "PC アプリ",
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
            { title: "補足：Hi-Opt", path: "content/cardcounting/hiopt.html" },
            { title: "補足：KO", path: "content/cardcounting/ko.html" },
            { title: "補足：Red 7", path: "content/cardcounting/red7.html" },
            { title: "補足：FELT", path: "content/cardcounting/felt.html" },
            { title: "補足：Zen Count", path: "content/cardcounting/zen.html" },
            { title: "補足：Omega II", path: "content/cardcounting/omega-ii.html" }
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
            { title: "戦略", path: "content/app/strategy.html" },
            { title: "よくある質問", path: "content/app/faq.html" },
            { title: "プライバシーポリシー", path: "content/app/privacy.html" }
          ]
        },
        pc: {
          label: "PC アプリ",
          eyebrow: "PC App (Windows)",
          subtitle: "Windows トレーニングプラットフォーム",
          items: [
            { title: "概要", path: "content/pc/overview.html" },
            { title: "プレイ", path: "content/pc/play.html" },
            { title: "トレーニング", path: "content/pc/training.html" },
            { title: "シミュ・統計", path: "content/pc/sim-stats.html" },
            { title: "リプレイ", path: "content/pc/replay.html" },
            { title: "戦略カスタム", path: "content/pc/strategies.html" },
            { title: "プライバシーポリシー", path: "content/pc/privacy.html" }
          ]
        }
      }
    }
  };

  const canonicalBase = "https://blackjack.yuchunlab.com/";
  const playUrl = "https://play.google.com/store/apps/details?id=com.yujiunn.blackjack_mobile";
  const msStoreUrl = "https://apps.microsoft.com/detail/9NG595NFHPZK";
  const languagePrefixes = { "zh-Hant": "zh-Hant", en: "en", ja: "ja" };
  let activeLanguage = languageFromUrl() || document.documentElement.lang || localStorage.getItem("blackjackLanguage") || "zh-Hant";
  let isSwitchingLanguage = false;

  function languageFromUrl() {
    const path = window.location.pathname.replace(/\\/g, "/");
    if (path === "/zh-Hant" || path.startsWith("/zh-Hant/") || path.includes("/zh-Hant/")) {
      return "zh-Hant";
    }
    if (path === "/en" || path.startsWith("/en/") || path.includes("/en/")) {
      return "en";
    }
    if (path === "/ja" || path.startsWith("/ja/") || path.includes("/ja/")) {
      return "ja";
    }
    return null;
  }

  function pathWithoutLanguagePrefix(path) {
    return path.replace(/^\/?(?:zh-Hant|en|ja)\//, "").replace(/^\/?(?:zh-Hant|en|ja)$/, "");
  }

  function languagePrefix(language = activeLanguage) {
    return languagePrefixes[language] || "";
  }

  function localizedPath(path, language = activeLanguage) {
    const prefix = languagePrefix(language);
    return `${prefix}/${path}`;
  }

  function localizedRoute(path, language = activeLanguage, { withExtension = false } = {}) {
    const prefix = languagePrefix(language);
    const route = withExtension ? path : path.replace(/\.html$/, "");
    return `/${prefix}/${route}`;
  }

  function fileDepthPrefix() {
    let normalized = window.location.pathname.replace(/\\/g, "/");
    const zhIndex = normalized.lastIndexOf("/zh-Hant/");
    const enIndex = normalized.lastIndexOf("/en/");
    const jaIndex = normalized.lastIndexOf("/ja/");
    const contentIndex = normalized.lastIndexOf("/content/");
    if (zhIndex >= 0) {
      normalized = normalized.slice(zhIndex + 1);
    } else if (enIndex >= 0) {
      normalized = normalized.slice(enIndex + 1);
    } else if (jaIndex >= 0) {
      normalized = normalized.slice(jaIndex + 1);
    } else if (contentIndex >= 0) {
      normalized = normalized.slice(contentIndex + 1);
    } else {
      normalized = normalized.split("/").pop() || "index.html";
    }
    const parts = normalized.split("/").filter(Boolean);
    const fileParts = parts.length && /\.[a-z0-9]+$/i.test(parts[parts.length - 1]) ? parts.slice(0, -1) : parts;
    return "../".repeat(fileParts.length);
  }

  function fileRootUrl() {
    const href = window.location.href.split("#")[0].split("?")[0];
    const markers = ["/zh-Hant/", "/en/", "/ja/", "/content/"];
    let rootHref = href;
    markers.forEach((marker) => {
      const index = rootHref.lastIndexOf(marker);
      if (index >= 0) {
        rootHref = rootHref.slice(0, index + 1);
      }
    });
    const fileNameIndex = rootHref.lastIndexOf("/");
    if (fileNameIndex >= 0 && /\.[a-z0-9]+$/i.test(rootHref.slice(fileNameIndex + 1))) {
      rootHref = rootHref.slice(0, fileNameIndex + 1);
    }
    return rootHref.endsWith("/") ? rootHref : `${rootHref}/`;
  }

  function fileUrl(path) {
    return new URL(path, fileRootUrl()).href;
  }

  function isHomePage() {
    const path = pathWithoutLanguagePrefix(window.location.pathname.replace(/\\/g, "/"));
    return path === "/" || path.endsWith("/index.html") || !path.includes("/content/");
  }

  function pagePath() {
    const cleanPath = pathWithoutLanguagePrefix(window.location.pathname.replace(/\\/g, "/"));
    const match = cleanPath.match(/content\/(?:app|cardcounting|pc)\/[^/.]+(?:\.html)?$/);
    if (match) {
      const normalized = match[0].replace(/\\/g, "/");
      return normalized.endsWith(".html") ? normalized : `${normalized}.html`;
    }
    const cleanHref = pathWithoutLanguagePrefix(window.location.href.replace(/^.*blackjack\.yuchunlab\.com\//, ""));
    const hrefMatch = cleanHref.match(/content\/(?:app|cardcounting|pc)\/[^?#]+\.html/);
    return hrefMatch ? hrefMatch[0].replace(/^.*content\//, "content/") : "content/app/overview.html";
  }

  function sectionForPath(path) {
    if (path.includes("/pc/")) return "pc";
    return path.includes("/app/") ? "app" : "cardcounting";
  }

  function relativeUrl(path) {
    if (window.location.protocol !== "file:") {
      return localizedRoute(path, activeLanguage, { withExtension: true });
    }

    if (isHomePage()) {
      return fileUrl(localizedPath(path));
    }

    const current = pagePath();
    if (languagePrefix()) {
      return fileUrl(localizedPath(path));
    }
    const currentDir = current.includes("/app/") ? "content/app/" : "content/cardcounting/";
    if (path.startsWith(currentDir)) {
      return path.replace(currentDir, "");
    }
    return path.replace("content/", "../");
  }

  function relativeUrlForLanguage(path, language) {
    if (window.location.protocol !== "file:") {
      return localizedRoute(path, language, { withExtension: true });
    }
    const targetPath = localizedPath(path, language);
    if (isHomePage()) {
      return fileUrl(targetPath);
    }
    return fileUrl(targetPath);
  }

  function fileUrlForCleanRoute(route) {
    const normalizedRoute = route.replace(/^https?:\/\/blackjack\.yuchunlab\.com/i, "").split("#")[0].split("?")[0];
    const languageMatch = normalizedRoute.match(/^\/(zh-Hant|en|ja)(?:\/(.*))?$/);
    if (languageMatch) {
      const language = languageMatch[1];
      const routePath = languageMatch[2] || "";
      if (!routePath) {
        return fileUrl(localizedPath("content/cardcounting/rules.html", language));
      }
      const filePath = routePath.endsWith(".html") ? routePath : `${routePath}.html`;
      return fileUrl(localizedPath(filePath, language));
    }
    if (normalizedRoute === "/" || normalizedRoute === "") {
      return fileUrl("index.html");
    }
    const routePath = normalizedRoute.replace(/^\//, "");
    if (!routePath.startsWith("content/")) {
      return null;
    }
    const filePath = routePath.endsWith(".html") ? routePath : `${routePath}.html`;
    return fileUrl(filePath);
  }

  function handleLocalInternalLink(event) {
    if (window.location.protocol !== "file:" || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const link = event.target.closest("a[href]");
    if (!link) {
      return;
    }
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    const target = fileUrlForCleanRoute(href);
    if (!target) {
      return;
    }
    event.preventDefault();
    window.location.assign(target);
  }

  function switchLanguage(language) {
    if (isSwitchingLanguage) {
      return;
    }
    isSwitchingLanguage = true;
    localStorage.setItem("blackjackLanguage", language);
    const target = relativeUrlForLanguage(pagePath(), language);
    window.location.assign(new URL(target, window.location.href).href);
  }

  window.__setBlackjackLanguage = switchLanguage;

  function assetUrl(path) {
    if (window.location.protocol !== "file:") {
      return `/${path}`;
    }
    return isHomePage() ? `${fileDepthPrefix()}${path}` : `${fileDepthPrefix()}${path}`;
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
    canonical.href = `${canonicalBase}${localizedRoute(path).replace(/^\//, "")}`;
  }

  function setAlternateLinks(path) {
    const alternates = [
      { hreflang: "zh-Hant", href: `${canonicalBase}${localizedRoute(path, "zh-Hant").replace(/^\//, "")}` },
      { hreflang: "en", href: `${canonicalBase}${localizedRoute(path, "en").replace(/^\//, "")}` },
      { hreflang: "ja", href: `${canonicalBase}${localizedRoute(path, "ja").replace(/^\//, "")}` },
      { hreflang: "x-default", href: `${canonicalBase}${localizedRoute(path, "en").replace(/^\//, "")}` }
    ];
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
    alternates.forEach((alternate) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = alternate.hreflang;
      link.href = alternate.href;
      document.head.append(link);
    });
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
      "zh-Hant": {
        "content/app/overview.html": "二十一點算牌訓練器 App 概要｜Blackjack Card Counting Trainer",
        "content/app/game.html": "二十一點 Blackjack 遊戲模式介紹｜算牌訓練器 App",
        "content/app/training.html": "Blackjack 策略與 Hi-Lo 算牌訓練功能｜二十一點算牌訓練器",
        "content/app/statistics.html": "Blackjack 統計模擬、EV、ROI 與變異數｜二十一點算牌訓練器",
        "content/app/replay.html": "Blackjack 牌局回放與錯誤檢討｜二十一點算牌訓練器",
        "content/app/faq.html": "Blackjack 算牌訓練器 FAQ｜二十一點 App 常見問題",
        "content/app/privacy.html": "二十一點算牌訓練器隱私權政策｜Blackjack Trainer Privacy Policy",
        "content/cardcounting/rules.html": "21點規則教學｜Blackjack 基本玩法與桌規說明",
        "content/cardcounting/basic-strategy.html": "21點基本策略教學｜Blackjack 策略表與決策練習",
        "content/cardcounting/hilo.html": "Hi-Lo 算牌教學｜Blackjack Running Count 與 True Count",
        "content/cardcounting/bet-ramp.html": "Bet Ramp 下注級距教學｜Blackjack True Count 下注策略",
        "content/cardcounting/high-cards.html": "高牌原理教學｜Blackjack 算牌為什麼有效",
        "content/cardcounting/deviations.html": "Blackjack Deviations 教學｜算牌偏離基本策略",
        "content/cardcounting/ev-variance.html": "Blackjack EV、ROI 與變異數教學｜算牌長期期望值",
        "content/cardcounting/reality.html": "Blackjack 算牌理想與現實｜桌規、資金與風險限制",
        "content/cardcounting/hiopt.html": "Hi-Opt I 算牌補充教學｜Blackjack 進階算牌系統",
        "content/cardcounting/ko.html": "KO 算牌補充教學｜Blackjack 不平衡算牌系統",
        "content/cardcounting/red7.html": "Red 7 算牌補充教學｜Blackjack 不平衡算牌系統",
        "content/cardcounting/felt.html": "FELT 算牌補充教學｜Blackjack 多級平衡算牌系統",
        "content/cardcounting/zen.html": "Zen Count 算牌補充教學｜Blackjack 多級平衡算牌系統",
        "content/cardcounting/omega-ii.html": "Omega II 算牌補充教學｜Blackjack 進階算牌系統",
        "content/app/strategy.html": "Blackjack 策略自訂功能介紹｜二十一點算牌訓練器",
        "content/pc/overview.html": "Blackjack 算牌訓練器 PC 版（Windows）概要｜二十一點算牌訓練器",
        "content/pc/play.html": "PC 版遊戲模式介紹｜Blackjack 算牌訓練器 Windows",
        "content/pc/training.html": "PC 版訓練模式介紹｜Blackjack 算牌訓練器 Windows",
        "content/pc/sim-stats.html": "PC 版模擬與統計功能｜Blackjack 算牌訓練器 Windows",
        "content/pc/replay.html": "PC 版回放功能介紹｜Blackjack 算牌訓練器 Windows",
        "content/pc/strategies.html": "PC 版策略自訂功能｜Blackjack 算牌訓練器 Windows",
        "content/pc/privacy.html": "PC 版隱私權政策｜Blackjack 算牌訓練器 Windows"
      },
      en: {
        "content/app/overview.html": "Blackjack Card Counting Trainer App Overview",
        "content/app/game.html": "Blackjack Game Mode Guide | Card Counting Trainer App",
        "content/app/training.html": "Blackjack Strategy and Hi-Lo Counting Training Features",
        "content/app/statistics.html": "Blackjack Statistics Simulator, EV, ROI, and Variance",
        "content/app/replay.html": "Blackjack Replay and Mistake Review | Card Counting Trainer",
        "content/app/faq.html": "Blackjack Card Counting Trainer FAQ",
        "content/app/privacy.html": "Blackjack Card Counting Trainer Privacy Policy",
        "content/cardcounting/rules.html": "Blackjack Rules Guide | Basic Gameplay and Table Rules",
        "content/cardcounting/basic-strategy.html": "Blackjack Basic Strategy Guide | Strategy Charts and Practice",
        "content/cardcounting/hilo.html": "Hi-Lo Card Counting Guide | Running Count and True Count",
        "content/cardcounting/bet-ramp.html": "Bet Ramp Guide | Blackjack True Count Betting Strategy",
        "content/cardcounting/high-cards.html": "High Card Principle | Why Blackjack Card Counting Works",
        "content/cardcounting/deviations.html": "Blackjack Deviations Guide | Count-Based Strategy Changes",
        "content/cardcounting/ev-variance.html": "Blackjack EV, ROI, and Variance Guide | Long-Term Counting Results",
        "content/cardcounting/reality.html": "Blackjack Card Counting Reality | Rules, Bankroll, and Risk Limits",
        "content/cardcounting/hiopt.html": "Hi-Opt I Card Counting Guide | Advanced Blackjack Counting System",
        "content/cardcounting/ko.html": "KO Card Counting Guide | Unbalanced Blackjack Counting System",
        "content/cardcounting/red7.html": "Red 7 Card Counting Guide | Unbalanced Blackjack Counting System",
        "content/cardcounting/felt.html": "FELT Card Counting Guide | Multi-Level Balanced Counting System",
        "content/cardcounting/zen.html": "Zen Count Guide | Multi-Level Balanced Blackjack Counting System",
        "content/cardcounting/omega-ii.html": "Omega II Card Counting Guide | Advanced Blackjack Counting System",
        "content/app/strategy.html": "Blackjack Strategy Profile Customization | Card Counting Trainer App",
        "content/pc/overview.html": "Blackjack Card Counting Trainer PC App (Windows) Overview",
        "content/pc/play.html": "PC App Play Mode Guide | Blackjack Card Counting Trainer Windows",
        "content/pc/training.html": "PC App Training Modes Guide | Blackjack Card Counting Trainer Windows",
        "content/pc/sim-stats.html": "PC App Simulation and Statistics | Blackjack Card Counting Trainer Windows",
        "content/pc/replay.html": "PC App Replay Guide | Blackjack Card Counting Trainer Windows",
        "content/pc/strategies.html": "PC App Strategy Customization | Blackjack Card Counting Trainer Windows",
        "content/pc/privacy.html": "PC App Privacy Policy | Blackjack Card Counting Trainer Windows"
      },
      ja: {
        "content/app/overview.html": "ブラックジャック カウントトレーナー アプリ概要",
        "content/app/game.html": "ブラックジャック Game モード紹介 | カウントトレーナー",
        "content/app/training.html": "ブラックジャック戦略と Hi-Lo カウント練習機能",
        "content/app/statistics.html": "ブラックジャック統計シミュレーター、EV、ROI、分散",
        "content/app/replay.html": "ブラックジャック Replay とミス確認 | カウントトレーナー",
        "content/app/faq.html": "ブラックジャック カウントトレーナー FAQ",
        "content/app/privacy.html": "ブラックジャック カウントトレーナー プライバシーポリシー",
        "content/cardcounting/rules.html": "ブラックジャック ルール解説 | 基本玩法とテーブルルール",
        "content/cardcounting/basic-strategy.html": "ブラックジャック基本戦略ガイド | 戦略表と判断練習",
        "content/cardcounting/hilo.html": "Hi-Lo カウント解説 | Running Count と True Count",
        "content/cardcounting/bet-ramp.html": "Bet Ramp 解説 | Blackjack True Count ベット戦略",
        "content/cardcounting/high-cards.html": "高カード原理 | Blackjack カウントが機能する理由",
        "content/cardcounting/deviations.html": "Blackjack Deviations 解説 | カウントによる基本戦略変更",
        "content/cardcounting/ev-variance.html": "Blackjack EV、ROI、分散解説 | カウントの長期結果",
        "content/cardcounting/reality.html": "Blackjack カウントの現実 | ルール、資金、リスク制限",
        "content/cardcounting/hiopt.html": "Hi-Opt I カウント解説 | 上級 Blackjack カウントシステム",
        "content/cardcounting/ko.html": "KO カウント解説 | 不平衡 Blackjack カウントシステム",
        "content/cardcounting/red7.html": "Red 7 カウント解説 | 不平衡 Blackjack カウントシステム",
        "content/cardcounting/felt.html": "FELT カウント解説 | 多レベル平衡 Blackjack カウントシステム",
        "content/cardcounting/zen.html": "Zen Count 解説 | 多レベル平衡 Blackjack カウントシステム",
        "content/cardcounting/omega-ii.html": "Omega II カウント解説 | 上級 Blackjack カウントシステム",
        "content/app/strategy.html": "Blackjack 戦略カスタマイズ機能 | カウントトレーナー",
        "content/pc/overview.html": "ブラックジャック カウントトレーナー PC アプリ（Windows）概要",
        "content/pc/play.html": "PC アプリ ゲームモード紹介 | ブラックジャック カウントトレーナー",
        "content/pc/training.html": "PC アプリ トレーニングモード紹介 | ブラックジャック カウントトレーナー",
        "content/pc/sim-stats.html": "PC アプリ シミュレーションと統計 | ブラックジャック カウントトレーナー",
        "content/pc/replay.html": "PC アプリ リプレイ機能 | ブラックジャック カウントトレーナー",
        "content/pc/strategies.html": "PC アプリ 戦略カスタマイズ | ブラックジャック カウントトレーナー",
        "content/pc/privacy.html": "PC アプリ プライバシーポリシー | ブラックジャック カウントトレーナー"
      }
    };
    const languageTitles = titles[activeLanguage] || titles["zh-Hant"];
    const fallbacks = {
      "zh-Hant": `${fallbackTitle}｜二十一點算牌訓練器 Blackjack Trainer`,
      en: `${fallbackTitle} | Blackjack Card Counting Trainer`,
      ja: `${fallbackTitle} | ブラックジャック カウントトレーナー`
    };
    return languageTitles[path] || fallbacks[activeLanguage] || fallbacks["zh-Hant"];
  }

  function pageDescription(path, fallbackTitle) {
    const descriptions = {
      "zh-Hant": {
        "content/app/overview.html": "二十一點算牌訓練器 App 概要，介紹 blackjack 基本策略、Hi-Lo、Hi-Opt I、訓練、統計、回放與模擬功能。",
        "content/app/game.html": "二十一點算牌訓練器 Game 模式介紹，說明 blackjack 實戰流程、下注、策略建議、算牌資訊、玩家座位與牌桌設定。",
        "content/app/training.html": "Blackjack 訓練功能介紹，包含基本策略、deviation、Running Count、True Count 與接近實戰發牌流程的 Hi-Lo 練習。",
        "content/app/statistics.html": "Blackjack 統計模擬功能介紹，說明 Round Stats、Session Stats、EV、ROI、SD、TC threshold、bet ramp 與策略比較。",
        "content/app/replay.html": "Blackjack Replay 回放功能介紹，說明如何檢查牌局紀錄、下注錯誤、動作錯誤、保險錯誤、Timeline 與決策細節。",
        "content/app/faq.html": "二十一點算牌訓練器 FAQ，說明 app 定位、訓練順序、Decision Training、RC/TC Drill、Bet Ramp、Replay、統計模擬與算牌風險。",
        "content/app/privacy.html": "二十一點算牌訓練器隱私權政策，說明 App 的本機資料、訓練紀錄、統計資料、Replay 回放資料與第三方資產授權。",
        "content/cardcounting/rules.html": "21點規則教學，說明 blackjack 牌面點數、莊家規則、blackjack 賠率、加倍、分牌、投降與常見桌規差異。",
        "content/cardcounting/basic-strategy.html": "21點基本策略教學，整理 blackjack 硬牌、軟牌、對子、加倍與投降決策，作為算牌 deviations 前的基礎策略表。",
        "content/cardcounting/hilo.html": "Hi-Lo 算牌教學，說明 blackjack 牌值、Running Count、True Count 換算、剩餘牌副數估算與下注判斷。",
        "content/cardcounting/bet-ramp.html": "Bet Ramp 下注級距教學，說明如何把 blackjack True Count 轉成下注大小，並理解 bet ramp、風險與資金限制。",
        "content/cardcounting/high-cards.html": "Blackjack 高牌原理教學，說明 10、A 與高牌密度如何影響 blackjack、double、insurance、莊家爆牌率與玩家優勢。",
        "content/cardcounting/deviations.html": "Blackjack deviations 教學，整理 Hi-Lo Illustrious 18、Fab 4、保險、投降與常見 TC 門檻，說明何時偏離基本策略。",
        "content/cardcounting/ev-variance.html": "Blackjack EV、ROI 與變異數教學，說明基本策略、Hi-Lo 算牌、bet ramp、標準差與長期模擬結果的量級。",
        "content/cardcounting/reality.html": "Blackjack 算牌現實限制說明，整理桌規、穿透率、桌限、資金、速度、心理壓力與賭場拒絕服務等實戰風險。",
        "content/cardcounting/hiopt.html": "Hi-Opt I 算牌教學，說明牌值、ace side count、Playing TC、Betting TC、Insurance TC 與核心 deviations。",
        "content/cardcounting/ko.html": "KO 算牌教學，說明牌值、不平衡系統、IRC 概念、Running Count 與核心 deviations。",
        "content/cardcounting/red7.html": "Red 7 算牌教學，說明紅 7 與黑 7 的牌值差異、不平衡系統、IRC 概念與 RC-based deviations。",
        "content/cardcounting/felt.html": "FELT 算牌教學，說明多級牌值、平衡系統、True Count 換算與核心 deviations。",
        "content/cardcounting/zen.html": "Zen Count 算牌教學，說明多級牌值、平衡系統、True Count 換算與核心 deviations。",
        "content/cardcounting/omega-ii.html": "Omega II 算牌教學，說明多級牌值、ace side count、Playing TC、Betting TC 與核心 deviations。",
        "content/app/strategy.html": "Blackjack 策略自訂功能介紹，說明 Strategy Profile 的建立、編輯、Deviation 規則自訂與套用方式。",
        "content/pc/overview.html": "Blackjack Card Counting Trainer PC 版（Windows）概要，介紹 Play、Training、模擬統計、Replay 回放、Strategies 自訂功能，支援 Hi-Lo 等七套算牌系統。",
        "content/pc/play.html": "PC 版 Play 模式說明，介紹算牌 HUD、Bet Ramp、決策建議、多人席位與桌規設定。",
        "content/pc/training.html": "PC 版 Training 模式說明，介紹 Decision Training、Running Count Drill、True Count Drill 與七套系統的 Count Drill。",
        "content/pc/sim-stats.html": "PC 版 Sim 與 Stats 功能說明，介紹 Python Monte Carlo 模擬設定與長期統計結果比較。",
        "content/pc/replay.html": "PC 版 Replay 回放功能說明，介紹遊玩紀錄、錯誤篩選與 Timeline 逐手查看。",
        "content/pc/strategies.html": "PC 版 Strategies 策略自訂功能說明，介紹八套系統的 Deviation 規則集建立與 Index 門檻修改。",
        "content/pc/privacy.html": "PC 版隱私權政策，說明 app 不收集個人資料、所有資料本機儲存，以及不含真實賭博功能。"
      },
      en: {
        "content/app/overview.html": "Blackjack Card Counting Trainer overview covering basic strategy, Hi-Lo, Hi-Opt I, practice modes, simulations, statistics, and replay review.",
        "content/app/game.html": "Blackjack Game mode guide for betting, table flow, strategy recommendations, count information, player seats, deck count, and table settings.",
        "content/app/training.html": "Blackjack training guide covering basic strategy, deviations, Running Count, True Count, and realistic Hi-Lo dealing drills.",
        "content/app/statistics.html": "Blackjack statistics simulator guide for Round Stats, Session Stats, EV, ROI, SD, TC thresholds, bet ramps, and strategy comparison.",
        "content/app/replay.html": "Blackjack Replay guide for reviewing game records, betting mistakes, action mistakes, insurance mistakes, timeline events, and decision details.",
        "content/app/faq.html": "FAQ for Blackjack Card Counting Trainer, covering app positioning, training order, Decision Training, RC/TC drills, Bet Ramp, Replay, simulations, and counting risks.",
        "content/app/privacy.html": "Privacy policy for Blackjack Card Counting Trainer, including local data, training records, simulation stats, replay data, and third-party assets.",
        "content/cardcounting/rules.html": "Blackjack rules guide covering card values, dealer rules, blackjack payout, double, split, surrender, and common table rule differences.",
        "content/cardcounting/basic-strategy.html": "Blackjack basic strategy guide for hard hands, soft hands, pairs, doubles, and surrender decisions before using counting deviations.",
        "content/cardcounting/hilo.html": "Hi-Lo card counting guide explaining card values, Running Count, True Count conversion, decks remaining, and betting decisions.",
        "content/cardcounting/bet-ramp.html": "Bet ramp guide explaining how to convert blackjack True Count into bet sizing while considering bankroll, variance, and risk limits.",
        "content/cardcounting/high-cards.html": "Blackjack high-card principle guide explaining how 10s, aces, and high-card density affect blackjack, doubles, insurance, bust rate, and player edge.",
        "content/cardcounting/deviations.html": "Blackjack deviations guide covering Hi-Lo Illustrious 18, Fab 4, insurance, surrender, and common TC thresholds for changing basic strategy.",
        "content/cardcounting/ev-variance.html": "Blackjack EV, ROI, and variance guide explaining basic strategy, Hi-Lo counting, bet ramps, standard deviation, and long-run simulation scale.",
        "content/cardcounting/reality.html": "Blackjack card counting reality guide covering table rules, penetration, table limits, bankroll, speed, psychological pressure, and casino restrictions.",
        "content/cardcounting/hiopt.html": "Hi-Opt I card counting guide covering card values, ace side count, Playing TC, Betting TC, Insurance TC, and core deviations.",
        "content/cardcounting/ko.html": "KO card counting guide covering card values, unbalanced system, IRC concept, Running Count, and core deviations.",
        "content/cardcounting/red7.html": "Red 7 card counting guide covering red/black 7 values, unbalanced system, IRC concept, and RC-based deviations.",
        "content/cardcounting/felt.html": "FELT card counting guide covering multi-level card values, balanced system, True Count conversion, and core deviations.",
        "content/cardcounting/zen.html": "Zen Count guide covering multi-level card values, balanced system, True Count conversion, and core deviations.",
        "content/cardcounting/omega-ii.html": "Omega II card counting guide covering multi-level values, ace side count, Playing TC, Betting TC, and core deviations.",
        "content/app/strategy.html": "Blackjack Strategy Profile customization guide for creating, editing, and applying custom deviation rule sets per counting system.",
        "content/pc/overview.html": "Blackjack Card Counting Trainer PC app overview for Windows, covering Play, Training, Sim, Stats, Replay, and Strategies across seven counting systems.",
        "content/pc/play.html": "PC app Play mode guide covering count HUD, Bet Ramp, strategy recommendations, multi-player seats, and table rule settings.",
        "content/pc/training.html": "PC app Training modes guide covering Decision Training, Running Count Drill, True Count Drill, and Count Drill across seven counting systems.",
        "content/pc/sim-stats.html": "PC app Sim and Stats guide covering Python Monte Carlo simulation setup and long-term performance statistics.",
        "content/pc/replay.html": "PC app Replay guide covering game session records, mistake filtering, and Timeline step-by-step hand review.",
        "content/pc/strategies.html": "PC app Strategies guide covering custom deviation rule sets for eight counting systems, index threshold editing, and PRO features.",
        "content/pc/privacy.html": "Privacy policy for Blackjack Card Counting Trainer PC app — no personal data collected, all data stored locally, no real-money gambling."
      },
      ja: {
        "content/app/overview.html": "ブラックジャック カウントトレーナーの概要。基本戦略、Hi-Lo、Hi-Opt I、練習、統計、リプレイ、シミュレーション機能を紹介します。",
        "content/app/game.html": "Blackjack Game モードの説明。ベット、テーブル進行、戦略提案、カウント情報、プレイヤー席、デッキ数、テーブル設定を扱います。",
        "content/app/training.html": "Blackjack トレーニング機能の説明。基本戦略、deviation、Running Count、True Count、実戦に近い Hi-Lo 発牌練習を扱います。",
        "content/app/statistics.html": "Blackjack 統計シミュレーターの説明。Round Stats、Session Stats、EV、ROI、SD、TC threshold、bet ramp、戦略比較を扱います。",
        "content/app/replay.html": "Blackjack Replay 機能の説明。プレイ記録、ベットミス、アクションミス、インシュランスミス、Timeline、判断詳細を確認できます。",
        "content/app/faq.html": "ブラックジャック カウントトレーナー FAQ。アプリの位置づけ、練習順序、Decision Training、RC/TC Drill、Bet Ramp、Replay、統計シミュレーション、カウントのリスクを説明します。",
        "content/app/privacy.html": "ブラックジャック カウントトレーナーのプライバシーポリシー。ローカルデータ、練習記録、統計、Replay データ、第三者資産について説明します。",
        "content/cardcounting/rules.html": "ブラックジャックのルール解説。カード点数、ディーラールール、blackjack 配当、double、split、surrender、テーブルルール差を説明します。",
        "content/cardcounting/basic-strategy.html": "ブラックジャック基本戦略の解説。hard hand、soft hand、pair、double、surrender の判断を、カウント deviation の前提として整理します。",
        "content/cardcounting/hilo.html": "Hi-Lo カウント解説。カード値、Running Count、True Count 換算、残りデッキ数、ベット判断を説明します。",
        "content/cardcounting/bet-ramp.html": "Bet ramp の解説。blackjack の True Count をベットサイズに変換し、bankroll、分散、リスク制限と合わせて理解します。",
        "content/cardcounting/high-cards.html": "ブラックジャックの高カード原理。10、A、高カード密度が blackjack、double、insurance、バースト率、プレイヤー優位に与える影響を説明します。",
        "content/cardcounting/deviations.html": "Blackjack deviations 解説。Hi-Lo Illustrious 18、Fab 4、insurance、surrender、基本戦略を変える TC しきい値を整理します。",
        "content/cardcounting/ev-variance.html": "Blackjack の EV、ROI、分散解説。基本戦略、Hi-Lo、bet ramp、標準偏差、長期シミュレーションの規模感を説明します。",
        "content/cardcounting/reality.html": "Blackjack カウントの現実面。テーブルルール、ペネトレーション、テーブルリミット、資金、速度、心理的負荷、カジノ側の制限を整理します。",
        "content/cardcounting/hiopt.html": "Hi-Opt I カウント解説。カード値、ace side count、Playing TC、Betting TC、Insurance TC、主要 deviations を説明します。",
        "content/cardcounting/ko.html": "KO カウント解説。カード値、不平衡システム、IRC 概念、Running Count、主要 deviations を説明します。",
        "content/cardcounting/red7.html": "Red 7 カウント解説。赤/黒 7 の値、不平衡システム、IRC 概念、RC-based deviations を説明します。",
        "content/cardcounting/felt.html": "FELT カウント解説。多レベルカード値、平衡システム、True Count 換算、主要 deviations を説明します。",
        "content/cardcounting/zen.html": "Zen Count 解説。多レベルカード値、平衡システム、True Count 換算、主要 deviations を説明します。",
        "content/cardcounting/omega-ii.html": "Omega II カウント解説。多レベルカード値、ace side count、Playing TC、Betting TC、主要 deviations を説明します。",
        "content/app/strategy.html": "Blackjack 戦略カスタマイズ機能の説明。Strategy Profile の作成、編集、deviation ルール設定と適用方法を説明します。",
        "content/pc/overview.html": "ブラックジャック カウントトレーナー PC アプリ（Windows）の概要。Play、Training、シミュレーション統計、Replay、戦略カスタマイズを 7 つのカウントシステムで説明します。",
        "content/pc/play.html": "PC アプリの Play モード説明。カウント HUD、Bet Ramp、戦略推奨、複数プレイヤー席、テーブルルール設定を扱います。",
        "content/pc/training.html": "PC アプリの Training モード説明。Decision Training、Running Count Drill、True Count Drill、7 システムの Count Drill を扱います。",
        "content/pc/sim-stats.html": "PC アプリの Sim と Stats 説明。Python Monte Carlo シミュレーション設定と長期統計比較を扱います。",
        "content/pc/replay.html": "PC アプリの Replay 機能説明。プレイ記録、ミスの絞り込み、Timeline の手順確認を扱います。",
        "content/pc/strategies.html": "PC アプリの Strategies 機能説明。8 システムの deviation ルールセット作成、Index しきい値編集、PRO 機能を扱います。",
        "content/pc/privacy.html": "PC アプリのプライバシーポリシー。個人情報を収集せず、すべてのデータはローカルに保存され、実際の賭博機能はないことを説明します。"
      }
    };
    const languageDescriptions = descriptions[activeLanguage] || descriptions["zh-Hant"];
    const fallbacks = {
      "zh-Hant": `${fallbackTitle}：二十一點算牌訓練器的 blackjack 教學、App 功能介紹與練習內容。`,
      en: `${fallbackTitle}: blackjack strategy lessons, card counting practice, app features, simulations, and replay review.`,
      ja: `${fallbackTitle}: blackjack の戦略学習、カードカウント練習、アプリ機能、シミュレーション、リプレイ確認。`
    };
    return languageDescriptions[path] || fallbacks[activeLanguage] || fallbacks["zh-Hant"];
  }

  function renderLayout() {
    const article = document.querySelector("article");
    if (!article || document.querySelector(".topbar")) {
      return;
    }

    const t = translations[activeLanguage] || translations["zh-Hant"];
    const { path, sectionKey, section, item } = currentPageInfo(t);

    if (sectionKey === "pc") document.body.classList.add("pc-section");
    if (sectionKey === "cardcounting") document.body.classList.add("cardcounting-section");

    document.documentElement.lang = activeLanguage;
    document.title = pageTitle(path, item.title);
    setMeta("viewport", "width=device-width, initial-scale=1");
    setMeta("description", pageDescription(path, item.title));
    setCanonical(path);
    setAlternateLinks(path);

    const pageIconUrl = assetUrl(
      sectionKey === "pc"
        ? "assets/img/pc/pc-icon.png"
        : sectionKey === "cardcounting"
          ? "assets/img/cardcounting/mixed_icon.png"
          : "assets/img/app/blackjack-icon.png"
    );
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.href = pageIconUrl;
    } else {
      const faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.href = pageIconUrl;
      document.head.appendChild(faviconLink);
    }

    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <div class="topbar-inner">
        <a class="brand" href="${relativeUrl("content/cardcounting/rules.html")}" aria-label="Blackjack Trainer 首頁">
          <img src="${pageIconUrl}" alt="${sectionKey === "pc" ? "Blackjack Card Counting Trainer PC App 圖示" : sectionKey === "cardcounting" ? "Blackjack Card Counting 教學圖示" : "二十一點算牌訓練器 App 圖示"}" class="brand-icon">
          <span>
            <strong>Blackjack</strong>
            <small>${t.brandSubtitle}</small>
          </span>
        </a>
        <div class="header-actions">
          <nav class="section-tabs" aria-label="主要分類">
            <a class="tab-button ${sectionKey === "cardcounting" ? "is-active" : ""}" href="${relativeUrl("content/cardcounting/rules.html")}">${t.tabCardCounting}</a>
            <a class="tab-button ${sectionKey === "app" ? "is-active" : ""}" href="${relativeUrl("content/app/overview.html")}">${t.tabApp}</a>
            <a class="tab-button ${sectionKey === "pc" ? "is-active" : ""}" href="${relativeUrl("content/pc/overview.html")}">${t.tabPC}</a>
          </nav>
          <button class="mobile-section-toggle" type="button" aria-expanded="false" aria-controls="mobileSectionNav" aria-label="開啟內容選單">
            <span class="mobile-nav-toggle-icon" aria-hidden="true"></span>
          </button>
          <label class="language-picker">
            <span>${t.languageLabel}</span>
            <select id="languageSelect" aria-label="選擇語言" onchange="window.__setBlackjackLanguage && window.__setBlackjackLanguage(this.value)">
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
          <img src="${assetUrl(sectionKey === "pc" ? "assets/img/pc/pc-icon.png" : sectionKey === "cardcounting" ? "assets/img/cardcounting/mixed_icon.png" : "assets/img/app/blackjack-icon.png")}" alt="${sectionKey === "pc" ? "Blackjack Card Counting Trainer PC App icon" : sectionKey === "cardcounting" ? "Blackjack Card Counting icon" : "二十一點算牌訓練器 App icon"}">
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
          <nav class="side-nav" id="mobileSectionNav" aria-label="內容選單"></nav>
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
          <img src="${assetUrl(sectionKey === "pc" ? "assets/img/pc/pc-icon.png" : sectionKey === "cardcounting" ? "assets/img/cardcounting/mixed_icon.png" : "assets/img/app/blackjack-icon.png")}" alt="${sectionKey === "pc" ? "Blackjack Card Counting Trainer PC App 圖示" : sectionKey === "cardcounting" ? "Blackjack Card Counting 教學圖示" : "二十一點算牌訓練器 App 圖示"}" class="download-icon">
          <div>
            <p class="eyebrow">${t.downloadEyebrow}</p>
            <h2 id="downloadTitle">${t.appName}</h2>
            <p>${t.downloadBody}</p>
          </div>
        </div>
        ${sectionKey === "cardcounting" ? `
        <div class="download-platforms download-platforms--cardcounting">
          <a class="platform-card platform-card--play" href="${playUrl}" target="_blank" rel="noopener" aria-label="前往 Google Play 下載二十一點算牌訓練器">
            <span class="platform-icon" aria-hidden="true">
              <svg viewBox="0 0 32 36" aria-hidden="true">
                <path fill="#00c3ff" d="M2.2 1.1 19.7 18 2.2 34.9A3 3 0 0 1 1 32.5v-29A3 3 0 0 1 2.2 1.1z"/>
                <path fill="#00e070" d="m19.7 18 4.9-4.7L5 1.9a3.1 3.1 0 0 0-2.8-.8L19.7 18z"/>
                <path fill="#ffd400" d="m19.7 18-17.5 17a3.1 3.1 0 0 0 2.8-.8l19.6-11.5-4.9-4.7z"/>
                <path fill="#ff4b55" d="m24.6 13.3 5.2 3a2 2 0 0 1 0 3.4l-5.2 3-4.9-4.7 4.9-4.7z"/>
              </svg>
            </span>
            <span class="platform-copy">
              <em>Android</em>
              <strong>Google Play</strong>
            </span>
          </a>
          <a class="platform-card platform-card--ms" href="${msStoreUrl}" target="_blank" rel="noopener" aria-label="前往 Microsoft Store 下載 Blackjack Card Counting Trainer PC 版">
            <span class="platform-icon" aria-hidden="true">
              <svg viewBox="0 0 21 21" aria-hidden="true" width="21" height="21">
                <rect x="0" y="0" width="10" height="10" fill="#f25022"/>
                <rect x="11" y="0" width="10" height="10" fill="#7fba00"/>
                <rect x="0" y="11" width="10" height="10" fill="#00a4ef"/>
                <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
              </svg>
            </span>
            <span class="platform-copy">
              <em>Windows</em>
              <strong>Microsoft Store</strong>
            </span>
          </a>
        </div>` : sectionKey === "pc" ? `
        <a class="ms-badge" href="${msStoreUrl}" target="_blank" rel="noopener" aria-label="前往 Microsoft Store 下載 Blackjack Card Counting Trainer PC 版">
          <svg viewBox="0 0 21 21" aria-hidden="true" width="21" height="21">
            <rect x="0" y="0" width="10" height="10" fill="#f25022"/>
            <rect x="11" y="0" width="10" height="10" fill="#7fba00"/>
            <rect x="0" y="11" width="10" height="10" fill="#00a4ef"/>
            <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
          </svg>
          <span><em>GET IT FROM</em><strong>Microsoft Store</strong></span>
        </a>` : `
        <a class="play-badge" href="${playUrl}" target="_blank" rel="noopener" aria-label="前往 Google Play 下載二十一點算牌訓練器">
          <svg viewBox="0 0 32 36" aria-hidden="true">
            <path fill="#00c3ff" d="M2.2 1.1 19.7 18 2.2 34.9A3 3 0 0 1 1 32.5v-29A3 3 0 0 1 2.2 1.1z"/>
            <path fill="#00e070" d="m19.7 18 4.9-4.7L5 1.9a3.1 3.1 0 0 0-2.8-.8L19.7 18z"/>
            <path fill="#ffd400" d="m19.7 18-17.5 17a3.1 3.1 0 0 0 2.8-.8l19.6-11.5-4.9-4.7z"/>
            <path fill="#ff4b55" d="m24.6 13.3 5.2 3a2 2 0 0 1 0 3.4l-5.2 3-4.9-4.7 4.9-4.7z"/>
          </svg>
          <span><em>GET IT ON</em><strong>Google Play</strong></span>
        </a>`}
        <div class="download-meta">
          <span>© 2026 CHANG YU-CHUN</span>
          <a href="mailto:yj.apps.devs@gmail.com"><strong>Support</strong> yj.apps.devs@gmail.com</a>
          ${sectionKey === "cardcounting" ? "" : `<a href="${relativeUrl(sectionKey === "pc" ? "content/pc/privacy.html" : "content/app/privacy.html")}"><strong>Privacy</strong> Policy</a>`}
          <a class="${sectionKey === "cardcounting" ? "download-meta-website" : ""}" href="https://blackjack.yuchunlab.com/"><strong>Website</strong> blackjack.yuchunlab.com</a>
        </div>
      </section>`;

    const sideNav = shell.querySelector(".side-nav");
    const sidebar = shell.querySelector(".sidebar");
    const mobileNavToggle = header.querySelector(".mobile-section-toggle");
    section.items.forEach((navItem, index) => {
      const link = document.createElement("a");
      link.className = `side-link ${navItem.path === path ? "is-active" : ""}`;
      link.href = relativeUrl(sections[sectionKey].items[index].path);
      link.textContent = navItem.title;
      sideNav.append(link);
    });

    if (mobileNavToggle && sidebar) {
      mobileNavToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("is-open");
        mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
        positionMobileSectionNav();
      });

      sideNav.addEventListener("click", (event) => {
        const link = event.target.closest(".side-link");
        if (!link || window.innerWidth > 820) {
          return;
        }
        sidebar.classList.remove("is-open");
        mobileNavToggle.setAttribute("aria-expanded", "false");
        positionMobileSectionNav();
      });
    }

    const contentPanel = shell.querySelector(".content-panel");
    article.querySelector("h1, h2")?.remove();
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
    languageSelect.addEventListener("change", () => switchLanguage(languageSelect.value));
    languageSelect.addEventListener("input", () => switchLanguage(languageSelect.value));

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
    const mobileNavToggle = document.querySelector(".mobile-section-toggle");
    if (!topbar || !sidebar || !siteShell) {
      return;
    }
    if (window.innerWidth > 820) {
      document.documentElement.style.removeProperty("--mobile-nav-top");
      siteShell.style.removeProperty("paddingTop");
      sidebar.classList.remove("is-open");
      mobileNavToggle?.setAttribute("aria-expanded", "false");
      return;
    }
    const topbarHeight = Math.ceil(topbar.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--mobile-nav-top", `${Math.max(0, topbarHeight - 1)}px`);
    requestAnimationFrame(() => {
      const navHeight = sidebar.classList.contains("is-open")
        ? Math.ceil(sidebar.getBoundingClientRect().height)
        : 0;
      siteShell.style.paddingTop = `${topbarHeight + navHeight + 16}px`;
    });
  }

  document.addEventListener("click", (event) => {
    const sidebar = document.querySelector(".sidebar");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    if (window.innerWidth <= 820 && sidebar?.classList.contains("is-open") && !event.target.closest(".sidebar")) {
      sidebar.classList.remove("is-open");
      mobileNavToggle?.setAttribute("aria-expanded", "false");
      positionMobileSectionNav();
    }
    handleLocalInternalLink(event);
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
