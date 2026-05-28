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
        { title: "常見問題", path: "content/app/faq.html" },
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
            { title: "FAQ", path: "content/app/faq.html" },
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
            { title: "よくある質問", path: "content/app/faq.html" },
            { title: "プライバシーポリシー", path: "content/app/privacy.html" }
          ]
        }
      }
    }
  };

  const canonicalBase = "https://blackjack.yuchunlab.com/";
  const playUrl = "https://play.google.com/store/apps/details?id=com.yujiunn.blackjack_mobile";
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
    if (path === "content/app/overview.html") {
      return `${prefix}/index.html`;
    }
    return `${prefix}/${path}`;
  }

  function localizedRoute(path, language = activeLanguage, { withExtension = false } = {}) {
    const prefix = languagePrefix(language);
    if (path === "content/app/overview.html") {
      return language === "en" ? "/" : `/${prefix}/`;
    }
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
    const match = cleanPath.match(/content\/(?:app|cardcounting)\/[^/.]+(?:\.html)?$/);
    if (match) {
      const normalized = match[0].replace(/\\/g, "/");
      return normalized.endsWith(".html") ? normalized : `${normalized}.html`;
    }
    const cleanHref = pathWithoutLanguagePrefix(window.location.href.replace(/^.*blackjack\.yuchunlab\.com\//, ""));
    const hrefMatch = cleanHref.match(/content\/(?:app|cardcounting)\/[^?#]+\.html/);
    return hrefMatch ? hrefMatch[0].replace(/^.*content\//, "content/") : "content/app/overview.html";
  }

  function sectionForPath(path) {
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
        return fileUrl(localizedPath("content/app/overview.html", language));
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
        "content/cardcounting/hiopt.html": "Hi-Opt I 算牌補充教學｜Blackjack 進階算牌系統"
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
        "content/cardcounting/hiopt.html": "Hi-Opt I Card Counting Guide | Advanced Blackjack Counting System"
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
        "content/cardcounting/hiopt.html": "Hi-Opt I カウント解説 | 上級 Blackjack カウントシステム"
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
        "content/cardcounting/hiopt.html": "Hi-Opt I 算牌教學，說明牌值、ace side count、Playing TC、Betting TC、Insurance TC 與核心 deviations。"
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
        "content/cardcounting/hiopt.html": "Hi-Opt I card counting guide covering card values, ace side count, Playing TC, Betting TC, Insurance TC, and core deviations."
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
        "content/cardcounting/hiopt.html": "Hi-Opt I カウント解説。カード値、ace side count、Playing TC、Betting TC、Insurance TC、主要 deviations を説明します。"
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

    document.documentElement.lang = activeLanguage;
    document.title = pageTitle(path, item.title);
    setMeta("viewport", "width=device-width, initial-scale=1");
    setMeta("description", pageDescription(path, item.title));
    setCanonical(path);
    setAlternateLinks(path);

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
