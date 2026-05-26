(function () {
  const dictionaries = {
    en: {
      "21點規則": "Blackjack Rules",
      "基本策略": "Basic Strategy",
      "Hi-Lo 算牌": "Hi-Lo Counting",
      "Bet Ramp": "Bet Ramp",
      "高牌原理": "High Card Principle",
      "Deviations": "Deviations",
      "EV・量級・變異數": "EV, Scale, and Variance",
      "理想與現實": "Theory and Reality",
      "補充：Hi-Opt": "Extra: Hi-Opt",
      "概要": "Overview",
      "遊戲": "Game",
      "訓練": "Training",
      "統計": "Statistics",
      "回放": "Replay",
      "隱私權政策": "Privacy Policy",
      "App 模擬統計": "App Simulation Stats",
      "基本策略模擬": "Basic Strategy Simulation",
      "App 訓練範例：RC 怎麼累加": "App Training Example: How RC Adds Up",
      "遊戲流程": "Game Flow",
      "遊戲設定": "Game Settings",
      "訓練總覽": "Training Overview",
      "主要功能": "Main Features",
      "Demo 影片": "Demo Video",
      "Round Stats": "Round Stats",
      "Session Stats": "Session Stats",
      "遊玩紀錄與篩選": "Game Records and Filters",
      "詳細回放": "Detailed Replay",
      "Hi-Lo 牌值": "Hi-Lo Card Values",
      "RC / TC": "RC / TC",
      "TC 計算例子": "TC Calculation Examples",
      "算牌訊號怎麼用？": "How to Use Counting Signals",
      "Kelly 直覺": "Kelly Intuition",
      "Hi-Opt I 牌值": "Hi-Opt I Card Values",
      "變異數": "Variance",
      "加入算牌（Hi-Lo + ramp）": "Adding Card Counting (Hi-Lo + Ramp)",
      "基本策略（不算牌）": "Basic Strategy (No Counting)",
      "這個 app 是為了讓 blackjack 學習不只停留在策略表，而是能透過練習、統計與回放，把算牌流程和長期結果一起看懂。": "This app is designed so blackjack learning does not stop at strategy charts. It uses practice, statistics, and replay to connect the counting process with long-term results.",
      "遊戲模式用接近實戰的流程練習 blackjack 決策，並把下注、策略建議、算牌資訊與結果回饋放在同一個畫面中。": "Game mode practices blackjack decisions in a realistic flow, with betting, strategy recommendations, count information, and feedback on one screen.",
      "訓練模式把 blackjack 的幾個核心能力拆開練習：決策、Running Count、True Count 換算，以及接近真實發牌流程的 Hi-Lo 算牌。": "Training mode separates the core blackjack skills: decisions, Running Count, True Count conversion, and Hi-Lo counting in a realistic dealing flow.",
      "統計功能用大量模擬把 blackjack 的長期結果量化，讓使用者比較不同規則、策略、座位與 session 設定下的 EV、ROI、波動和風險。": "Statistics use large simulations to quantify long-term blackjack results, helping compare EV, ROI, variance, and risk across rules, strategies, seats, and session settings.",
      "Replay 讓使用者回看過去的 game 紀錄，從整體統計、錯誤篩選，到每一步決策細節都能重新檢查。": "Replay lets users review past game records, from overall stats and mistake filters to the details of each decision.",
      "Blackjack 的重點是：優勢通常很小，但波動很大。以下數字只是量級直覺，不是保證。": "The key point in blackjack is that the edge is usually small while variance is large. These numbers are scale intuition, not guarantees.",
      "算牌不是記住每一張牌，而是估計剩餘牌堆中高牌的密度。最主要的用途有兩個：調整下注大小，以及套用 deviation。": "Card counting is not memorizing every card. It estimates the density of high cards remaining. The two main uses are adjusting bet size and applying deviations.",
      "算牌最實際的價值，通常來自在 TC 高的時候加大下注。Bet ramp 就是把 true count 轉換成下注大小的規則。": "The practical value of counting usually comes from betting more when TC is high. A bet ramp is the rule that converts true count into bet size.",
      "高牌比例上升時，玩家在 blackjack、double、insurance 與莊家爆牌率上會得到幾個結構性優勢。": "When the high-card ratio rises, the player gains structural advantages in blackjack, doubles, insurance, and dealer bust rate.",
      "Hi-Opt I 是比 Hi-Lo 更進階的系統。這個專案中的 Hi-Opt I 使用 playing count、ace side count，以及修正過的 betting / insurance true count。": "Hi-Opt I is a more advanced system than Hi-Lo. In this project, Hi-Opt I uses a playing count, ace side count, and adjusted betting / insurance true counts.",
      "可以自行調整 Bet，或直接使用 Recommended 建議下注；也能開關決策建議與決策對錯提示。畫面同時顯示剩餘牌數、Decks、Running Count 和 True Count。": "You can adjust Bet manually or use the Recommended bet. Decision recommendations and correct/wrong feedback can be toggled. The screen also shows remaining cards, decks, Running Count, and True Count.",
      "Recommended 會顯示建議動作，並提供對應的策略理由，幫助理解為什麼這手牌應該這樣打。": "Recommended shows the suggested action and the strategy reason, helping explain why the hand should be played that way.",
      "做出決策後，app 會給出回饋，讓使用者知道這次選擇是否符合目前設定的判斷模式。": "After a decision, the app gives feedback so users know whether the choice matches the current evaluation mode.",
      "目前包含決策訓練、RC 練習、True Count 計算練習，以及模擬真實發牌的 Hi-Lo 算牌練習。": "Current modes include decision training, RC drills, True Count calculation drills, and Hi-Lo count drills with realistic dealing.",
      "可針對不同分類做專項練習，例如硬牌、軟牌、對子、加倍、投降、保險或偏離。": "You can practice specific categories such as hard hands, soft hands, pairs, doubles, surrender, insurance, or deviations.",
      "Round Stats 可模擬最多 500000 局，並自行調整策略、規則與 Bet Ramp。TC threshold 可以用來拆分不同 TC 區間，觀察高牌區間與其他區間的表現差異。": "Round Stats can simulate up to 500,000 rounds with custom strategy, rules, and Bet Ramp. TC threshold splits TC ranges to compare high-card zones with other zones.",
      "Session Stats 用來觀察一場一場的結果。可以設定每場停損、停利與最多局數，再模擬多場 session，並搭配 Settings 調整規則與策略。": "Session Stats observes results session by session. You can set stop loss, stop win, and max rounds per session, then simulate many sessions with custom rules and strategies.",
      "Replay 首頁會統計目前的 game 遊玩紀錄，並可用 All、Mistakes、Bet Mistakes、Action Mistakes、Insurance Mistakes 篩選。往下滑可以看到過去 round 的紀錄，並點進去查看細節。": "The Replay home summarizes game records and can filter by All, Mistakes, Bet Mistakes, Action Mistakes, and Insurance Mistakes. Scroll down to view past rounds and open details.",
      "詳細回放頁會顯示 Summary，並整理這一局出現過的錯誤，方便快速了解問題集中在哪些決策上。": "The detail replay page shows a Summary and lists mistakes in the round, making it easy to see where the problems were.",
      "Timeline 可以逐步查看先前的決策過程，上方的 Table Snapshot 會呈現當下牌桌狀態。": "Timeline lets you step through the previous decision process, while Table Snapshot shows the table state at that moment.",
      "Selected Event 會顯示 Timeline 當下事件的詳細內容，包含該次決策、結果與相關判斷資訊。": "Selected Event shows the details of the current Timeline event, including the decision, result, and related evaluation info."
    },
    ja: {
      "21點規則": "ブラックジャックのルール",
      "基本策略": "基本戦略",
      "Hi-Lo 算牌": "Hi-Lo カウント",
      "Bet Ramp": "ベットランプ",
      "高牌原理": "高カードの原理",
      "Deviations": "ディビエーション",
      "EV・量級・變異數": "EV・規模感・分散",
      "理想與現實": "理想と現実",
      "補充：Hi-Opt": "補足：Hi-Opt",
      "概要": "概要",
      "遊戲": "ゲーム",
      "訓練": "トレーニング",
      "統計": "統計",
      "回放": "リプレイ",
      "隱私權政策": "プライバシーポリシー",
      "App 模擬統計": "アプリのシミュレーション統計",
      "基本策略模擬": "基本戦略シミュレーション",
      "App 訓練範例：RC 怎麼累加": "アプリ練習例：RC の加算",
      "遊戲流程": "ゲームの流れ",
      "遊戲設定": "ゲーム設定",
      "訓練總覽": "トレーニング概要",
      "主要功能": "主な機能",
      "Demo 影片": "デモ動画",
      "Round Stats": "ラウンド統計",
      "Session Stats": "セッション統計",
      "遊玩紀錄與篩選": "プレイ履歴とフィルター",
      "詳細回放": "詳細リプレイ",
      "Hi-Lo 牌值": "Hi-Lo のカード値",
      "RC / TC": "RC / TC",
      "TC 計算例子": "TC 計算例",
      "算牌訊號怎麼用？": "カウントのサインの使い方",
      "Kelly 直覺": "Kelly の直感",
      "Hi-Opt I 牌值": "Hi-Opt I のカード値",
      "變異數": "分散",
      "加入算牌（Hi-Lo + ramp）": "カウントを加える（Hi-Lo + ランプ）",
      "基本策略（不算牌）": "基本戦略（カウントなし）",
      "這個 app 是為了讓 blackjack 學習不只停留在策略表，而是能透過練習、統計與回放，把算牌流程和長期結果一起看懂。": "このアプリは、ブラックジャック学習を戦略表だけで終わらせず、練習・統計・リプレイを通してカウントの流れと長期結果を理解するためのものです。",
      "遊戲模式用接近實戰的流程練習 blackjack 決策，並把下注、策略建議、算牌資訊與結果回饋放在同一個畫面中。": "ゲームモードでは実戦に近い流れで判断を練習し、ベット、戦略提案、カウント情報、結果フィードバックを同じ画面で確認できます。",
      "訓練模式把 blackjack 的幾個核心能力拆開練習：決策、Running Count、True Count 換算，以及接近真實發牌流程的 Hi-Lo 算牌。": "トレーニングモードでは、判断、Running Count、True Count 変換、実際の配牌に近い Hi-Lo カウントを分けて練習できます。",
      "統計功能用大量模擬把 blackjack 的長期結果量化，讓使用者比較不同規則、策略、座位與 session 設定下的 EV、ROI、波動和風險。": "統計機能は大量シミュレーションで長期結果を数値化し、ルール、戦略、座席、セッション設定ごとの EV、ROI、変動、リスクを比較できます。",
      "Replay 讓使用者回看過去的 game 紀錄，從整體統計、錯誤篩選，到每一步決策細節都能重新檢查。": "Replay では過去のゲーム記録を確認でき、全体統計、ミスの絞り込み、各判断の詳細まで見直せます。",
      "Blackjack 的重點是：優勢通常很小，但波動很大。以下數字只是量級直覺，不是保證。": "ブラックジャックでは優位性は小さく、変動は大きいのが重要な点です。以下の数値は規模感であり、保証ではありません。",
      "算牌不是記住每一張牌，而是估計剩餘牌堆中高牌的密度。最主要的用途有兩個：調整下注大小，以及套用 deviation。": "カードカウントは全カードを覚えることではなく、残りデッキの高カード密度を推定することです。主な用途はベット調整とディビエーションです。",
      "算牌最實際的價值，通常來自在 TC 高的時候加大下注。Bet ramp 就是把 true count 轉換成下注大小的規則。": "カウントの実用的価値は、TC が高いときにベットを増やすことにあります。Bet ramp は true count をベット額に変換するルールです。",
      "高牌比例上升時，玩家在 blackjack、double、insurance 與莊家爆牌率上會得到幾個結構性優勢。": "高カード比率が上がると、ブラックジャック、ダブル、インシュランス、ディーラーのバースト率でプレイヤーに構造的な優位が生まれます。",
      "Hi-Opt I 是比 Hi-Lo 更進階的系統。這個專案中的 Hi-Opt I 使用 playing count、ace side count，以及修正過的 betting / insurance true count。": "Hi-Opt I は Hi-Lo より高度なシステムです。このプロジェクトでは playing count、ace side count、補正された betting / insurance true count を使います。",
      "可以自行調整 Bet，或直接使用 Recommended 建議下注；也能開關決策建議與決策對錯提示。畫面同時顯示剩餘牌數、Decks、Running Count 和 True Count。": "Bet は手動調整でき、Recommended の推奨ベットも使えます。判断提案と正誤表示も切り替え可能で、残りカード数、Decks、Running Count、True Count も表示されます。",
      "Recommended 會顯示建議動作，並提供對應的策略理由，幫助理解為什麼這手牌應該這樣打。": "Recommended は推奨アクションと戦略理由を表示し、その手をなぜそう打つべきか理解する助けになります。",
      "做出決策後，app 會給出回饋，讓使用者知道這次選擇是否符合目前設定的判斷模式。": "判断後、アプリは現在の評価モードに合っているかどうかをフィードバックします。",
      "目前包含決策訓練、RC 練習、True Count 計算練習，以及模擬真實發牌的 Hi-Lo 算牌練習。": "現在は判断練習、RC 練習、True Count 計算練習、実際の配牌を模した Hi-Lo カウント練習があります。",
      "可針對不同分類做專項練習，例如硬牌、軟牌、對子、加倍、投降、保險或偏離。": "ハードハンド、ソフトハンド、ペア、ダブル、サレンダー、インシュランス、ディビエーションなどを分類別に練習できます。",
      "Round Stats 可模擬最多 500000 局，並自行調整策略、規則與 Bet Ramp。TC threshold 可以用來拆分不同 TC 區間，觀察高牌區間與其他區間的表現差異。": "Round Stats は最大 500,000 ラウンドをシミュレーションでき、戦略、ルール、Bet Ramp を調整できます。TC threshold で TC 区間を分け、高カード区間との差を見られます。",
      "Session Stats 用來觀察一場一場的結果。可以設定每場停損、停利與最多局數，再模擬多場 session，並搭配 Settings 調整規則與策略。": "Session Stats はセッションごとの結果を見るための機能です。損切り、利確、最大ラウンド数を設定し、複数セッションをシミュレーションできます。",
      "Replay 首頁會統計目前的 game 遊玩紀錄，並可用 All、Mistakes、Bet Mistakes、Action Mistakes、Insurance Mistakes 篩選。往下滑可以看到過去 round 的紀錄，並點進去查看細節。": "Replay のトップではゲーム履歴を集計し、All、Mistakes、Bet Mistakes、Action Mistakes、Insurance Mistakes で絞り込めます。下にスクロールして過去ラウンドの詳細を開けます。",
      "詳細回放頁會顯示 Summary，並整理這一局出現過的錯誤，方便快速了解問題集中在哪些決策上。": "詳細リプレイでは Summary とその局のミスが整理され、どの判断に問題があったか確認しやすくなります。",
      "Timeline 可以逐步查看先前的決策過程，上方的 Table Snapshot 會呈現當下牌桌狀態。": "Timeline では判断過程を段階的に確認でき、上部の Table Snapshot にはその時点のテーブル状態が表示されます。",
      "Selected Event 會顯示 Timeline 當下事件的詳細內容，包含該次決策、結果與相關判斷資訊。": "Selected Event は Timeline の現在イベントの詳細を表示し、その判断、結果、関連情報を確認できます。"
    }
  };

  Object.assign(dictionaries.en, {
    "如果播放器無法載入，可以": "If the player does not load, you can",
    "在 YouTube 開啟 Demo 影片": "open the demo video on YouTube",
    "策略與偏離練習": "Strategy and Deviation Practice",
    "練習基本策略、硬牌、軟牌、對子、加倍、投降、保險，以及算牌偏離。": "Practice basic strategy, hard hands, soft hands, pairs, doubles, surrender, insurance, and counting deviations.",
    "RC / TC 訓練": "RC / TC Training",
    "透過 Running Count 和 True Count 練習，熟悉從牌序追蹤到下注區間判斷的流程。": "Practice Running Count and True Count to get comfortable moving from card tracking to betting-zone decisions.",
    "算牌系統": "Counting Systems",
    "支援 Hi-Lo 與 Hi-Opt I，並可搭配不同桌規、牌組數、穿透率與 bet ramp 測試。": "Supports Hi-Lo and Hi-Opt I, with testing across table rules, deck counts, penetration, and bet ramps.",
    "回放與統計": "Replay and Statistics",
    "用 Replay 檢討過去決策，並透過大量模擬觀察 ROI、EV、SD、bankroll、停利停損和長期結果。": "Use Replay to review past decisions, and use large simulations to study ROI, EV, SD, bankroll, stop-win/stop-loss, and long-term results.",
    "目標不是把 blackjack 做成休閒遊戲，而是提供一個能反覆練習、觀察數據、修正錯誤，並用統計理解遊戲波動的算牌訓練工具。": "The goal is not to make blackjack a casual game, but to provide a counting trainer for repeated practice, data review, mistake correction, and statistical understanding of variance.",

    "可以調整 Mode，決定 Recommended 與決策對錯要用 Basic、Hi-Lo 或 Hi-Opt I 判斷；也能設定牌組數和穿透率。": "Adjust Mode to decide whether Recommended and correctness checks use Basic, Hi-Lo, or Hi-Opt I. Deck count and penetration can also be configured.",
    "可調整 blackjack 桌面規則與最低賭注，讓練習條件更接近想分析的桌況。": "Adjust table rules and minimum bet so practice conditions match the game you want to analyze.",
    "發牌速度可以自行調整，適合用來練習在不同節奏下追蹤 count。": "Deal speed can be adjusted, which helps practice count tracking at different rhythms.",
    "Bet Ramp 會影響前面的建議下注，也會影響 Replay 中對 Bet 是否正確的判斷。": "Bet Ramp affects the recommended bet and how Replay evaluates whether a bet was correct.",
    "Hi-Opt I 相關設定可用來調整進階算牌模式，包含搭配 A side count 後的判斷方式。": "Hi-Opt I settings adjust the advanced counting mode, including decisions that use the ace side count.",
    "可設定賭桌上的 Players 數量、自己的座位，以及各玩家使用的 Mode，例如 Basic、Hi-Lo 或 Hi-Opt I。": "Set the number of players at the table, your seat, and each player's mode, such as Basic, Hi-Lo, or Hi-Opt I.",
    "遊戲畫面把下注、牌桌、建議、對錯判斷與算牌資訊集中在同一個流程中。使用者可以選擇只靠自己判斷，也可以打開建議與對錯提示，讓 app 在每一步顯示建議動作、判斷結果與原因說明。這不只是背基本策略表，而是用實際手牌理解為什麼某些情況應該 Hit、Stand、Double、Split、Surrender 或買 Insurance。": "The game screen brings betting, the table, recommendations, correctness checks, and count information into one flow. You can play entirely from your own judgment, or turn on recommendations and feedback so the app shows the suggested action, whether the choice was correct, and the reason behind it at each step. The goal is not just to memorize a basic strategy chart, but to understand from real hands why certain spots call for Hit, Stand, Double, Split, Surrender, or Insurance.",
    "打開建議與對錯判斷後，畫面會顯示建議動作、這次選擇是否正確，以及對應的策略原因，幫助把基本策略和算牌偏離連到真實決策。": "When recommendations and correctness checks are enabled, the screen shows the suggested action, whether your choice was correct, and the strategy reason, helping connect basic strategy and counting deviations to real decisions.",
    "牌桌上方會依照目前 Mode 顯示 Basic、Hi-Lo 或 Hi-Opt I 相關資訊，包含剩餘牌數、Decks、Running Count、True Count 等數值。": "Above the table, the app displays information for the current Mode, such as Basic, Hi-Lo, or Hi-Opt I, including remaining cards, decks, Running Count, True Count, and related values.",
    "牌桌最多可以設定四個玩家位置，也可以選擇自己坐在哪個位置，用比較接近實戰的多人牌桌情境練習。": "The table can be configured with up to four player seats, and you can choose your own seat to practice in a more realistic multi-player table situation.",
    "下注區可以手動調整 Bet，也可以點 Use Recommended，讓 app 依照目前算牌系統、True Count 和 Bet Ramp 自動帶入建議下注。": "In the betting area, you can adjust Bet manually or tap Use Recommended so the app applies the recommended bet based on the current counting system, True Count, and Bet Ramp.",
    "右上角的設定按鈕可以調整桌規、牌組數、穿透率、發牌速度、Bet Ramp 和玩家模式，用來建立不同練習情境。": "The settings button in the top right lets you adjust table rules, deck count, penetration, deal speed, Bet Ramp, and player modes to create different practice scenarios.",
    "這個模式的設計重點，是讓使用者在接近實戰的節奏中建立記憶與理解。即時回饋可以幫助確認基本策略是否穩定，原因說明則用來補上「為什麼這樣打」的邏輯。對算牌練習來說，畫面上方的 count 結果可以作為對照：使用者先自己追蹤 Running Count 和 True Count，再立刻和 app 顯示的結果比較，修正漏算或換算錯誤。": "This mode is designed to build both memory and understanding in a pace close to real play. Instant feedback helps confirm whether basic strategy is stable, while the explanations fill in the logic behind why a hand should be played a certain way. For card counting practice, the count values above the table act as a check: you can track the Running Count and True Count yourself, then immediately compare your result with the app and correct missed cards or conversion mistakes.",
    "設定項目則是用來模擬不同 blackjack 桌況。你可以調整規則、玩家數量、自己的座位、發牌速度、牌組數、穿透率和下注級距，觀察同一套策略在不同條件下的差異，也可以把發牌速度調快，練習在壓力較高的節奏下追蹤 count。": "The settings are meant to simulate different blackjack table conditions. You can adjust rules, number of players, your seat, deal speed, deck count, penetration, and bet spread to see how the same strategy behaves under different conditions, or increase the deal speed to practice tracking the count under more pressure.",
    "Bet Ramp 可以設定不同 True Count threshold 對應幾倍下注。這會影響遊戲畫面中的建議下注，也會影響 Replay 回放時，app 如何判斷這一手的下注是否符合目前規則。": "Bet Ramp lets you define how many betting units to use at different True Count thresholds. This affects the recommended bet shown during play, and it also affects how Replay evaluates whether the bet for a hand matched the current rules.",
    "發牌速度可以依熟悉度調整。剛開始練習時可以放慢，保留時間計算 Running Count 和 True Count；熟悉後再加快速度，練習在更接近實戰壓力的節奏下追蹤牌序。": "Deal speed can be adjusted based on your comfort level. When starting out, you can slow it down to leave time for Running Count and True Count calculation; once familiar, you can speed it up to practice tracking cards under a rhythm closer to real pressure.",
    "座位設定除了選擇自己的位置，也可以指定其他玩家位置使用 Basic、Hi-Lo 或 Hi-Opt I 等模式。這些座位主要用來建立多人牌桌的發牌情境，讓練習更接近真實牌桌節奏。": "Seat settings let you choose your own position and assign modes such as Basic, Hi-Lo, or Hi-Opt I to other player seats. These seats mainly create a multi-player dealing context, making practice closer to the rhythm of a real table.",

    "上方可以調整 Mode 和問題種類，下方會顯示牌局題目與作答按鈕，用來練習每一手的正確決策。": "Use the top controls to adjust Mode and question type. The question and answer buttons below train correct decisions hand by hand.",
    "可調整 Mode、牌出現速度、Length、起始 RC，以及 Display Mode。Display 區域會依設定顯示牌，用來訓練追蹤 count 的速度與穩定度。": "Adjust Mode, card speed, Length, starting RC, and Display Mode. The display area shows cards according to the settings to train count speed and consistency.",
    "作答項目可以選 Running Count、Card Count，或兩者一起練。Card Count 用來確認自己是否同時掌握出現牌數。": "Choose to answer Running Count, Card Count, or both. Card Count checks whether you also tracked the number of cards shown.",
    "作答畫面讓使用者輸入最後的 count 結果，適合練習快速心算與累加。": "The answer screen lets users enter the final count, making it useful for quick mental math and accumulation practice.",
    "作答後會顯示結果，方便檢查自己在哪一段計算或追蹤時出錯。": "After answering, results are shown so you can check where the calculation or tracking went wrong.",
    "True Count 計算練習會給 Running Count 和剩餘牌數，讓使用者練習把 RC 換算成實用的 TC 判斷。": "True Count drills provide Running Count and remaining cards so users can practice converting RC into practical TC decisions.",
    "Hi-Lo Count Drill 會模擬真實發牌流程，可調整 Players 數量、發牌速度，並練習回答 Running Count 與剩餘牌數。": "Hi-Lo Count Drill simulates realistic dealing. You can adjust player count and deal speed, then answer Running Count and remaining cards.",

    "Settings 可調整桌面規則，概念和 Game 設定相同，用來建立要分析的遊戲條件。": "Settings adjust table rules, similar to Game settings, to define the game conditions for analysis.",
    "可調整座位數，並在同一組遊戲條件下比較不同座位或不同策略，例如不同 Bet Ramp 的長期表現。": "Adjust seat count and compare different seats or strategies under the same game conditions, such as long-term results from different Bet Ramps.",
    "模擬完成後會顯示整體結果統計，方便快速比較各座位的淨利、ROI、EV / 100 局與 SD / 100 局。": "After simulation, overall stats make it easy to compare each seat's net profit, ROI, EV / 100 rounds, and SD / 100 rounds.",
    "詳細統計會進一步拆解結果，讓使用者檢查不同區間或不同條件下的表現差異。": "Detailed stats break results down further so users can inspect performance differences across ranges or conditions.",
    "可調整 session 場數、每場最多玩幾局、停損和停利，用來測試不同資金管理設定下的結果分布。": "Adjust session count, max rounds per session, stop loss, and stop win to test result distributions under different bankroll-management settings.",
    "結果頁會顯示整體統計與每場盈虧分布圖，幫助理解同樣策略在多場 session 中可能出現的波動。": "The results page shows overall stats and a profit/loss distribution chart, helping explain variance across many sessions with the same strategy.",
    "每一場 session 都會保留簡單概要，方便回頭查看單場結果與長期統計之間的差異。": "Each session keeps a short summary so you can compare single-session outcomes with long-term statistics.",

    "Blackjack 的目標不是單純接近 21，而是在不爆牌的前提下打贏莊家。理解規則、桌規與一局流程，是學基本策略和算牌之前的基礎。": "The goal of blackjack is not simply to get close to 21, but to beat the dealer without busting. Rules, table rules, and hand flow are the foundation before strategy and counting.",
    "Blackjack 是 A 加上一張 10 點牌。3:2 代表贏 1.5 倍下注，6:5 只贏 1.2 倍下注，所以 3:2 對玩家明顯比較有利。": "Blackjack is an ace plus a 10-value card. A 3:2 payout wins 1.5x the bet, while 6:5 wins only 1.2x, so 3:2 is much better for the player.",
    "H17 通常讓玩家比較不利，因為莊家多一次把牌補強的機會。": "H17 is usually worse for the player because the dealer gets another chance to improve the hand.",
    "量級直覺：若每手下 1 unit，-0.5% 大約等於長期每 200 手輸 1 unit，但短期波動通常遠大於這個數字。": "Scale intuition: with a 1-unit bet each hand, -0.5% is about losing 1 unit per 200 hands in the long run, but short-term swings are usually much larger.",
    "這組數字可以對照前面的量級觀念：ROI 是正的，但只有 +0.08%，仍然是很小的長期優勢。換成每 100 局來看，EV 是 +1.66，但 SD 是 315.10；TC &gt;= k 時 ROI 提高到 +1.22%、EV / 100 局提高到 83.37，不過 SD / 100 局也提高到 741.40。也就是說，算牌能改善長期期望值，但短期仍會被變異數主導。": "These numbers match the scale idea above: ROI is positive, but only +0.08%, still a small long-term edge. Per 100 rounds, EV is +1.66 while SD is 315.10. When TC >= k, ROI rises to +1.22% and EV / 100 rounds rises to 83.37, but SD / 100 also rises to 741.40. Counting improves long-term expectation, but short-term results are still dominated by variance.",
    "這組數字和前面的量級直覺接近：不算牌時 ROI 落在負值，長期會慢慢被莊家優勢吃掉；但每 100 局的 SD 仍有 114.84，表示短期輸贏可能遠大於期望值本身。": "These numbers match the earlier scale intuition: without counting, ROI is negative and the house edge slowly takes over in the long run. But SD / 100 rounds is still 114.84, so short-term results can be much larger than the expectation itself.",
    "算牌通常不違法，但賭場仍可能拒絕服務。這個網站與 App 主要用於學習機率與策略，不是鼓勵賭博。": "Card counting is usually not illegal, but casinos may still refuse service. This site and app are for learning probability and strategy, not for encouraging gambling."
  });

  Object.assign(dictionaries.ja, {
    "如果播放器無法載入，可以": "プレイヤーを読み込めない場合は、",
    "在 YouTube 開啟 Demo 影片": "YouTube でデモ動画を開く",
    "策略與偏離練習": "戦略とディビエーション練習",
    "練習基本策略、硬牌、軟牌、對子、加倍、投降、保險，以及算牌偏離。": "基本戦略、ハードハンド、ソフトハンド、ペア、ダブル、サレンダー、インシュランス、カウントによるディビエーションを練習できます。",
    "RC / TC 訓練": "RC / TC トレーニング",
    "透過 Running Count 和 True Count 練習，熟悉從牌序追蹤到下注區間判斷的流程。": "Running Count と True Count の練習で、カード追跡からベット判断までの流れに慣れます。",
    "算牌系統": "カウントシステム",
    "支援 Hi-Lo 與 Hi-Opt I，並可搭配不同桌規、牌組數、穿透率與 bet ramp 測試。": "Hi-Lo と Hi-Opt I に対応し、ルール、デッキ数、ペネトレーション、bet ramp を変えてテストできます。",
    "回放與統計": "リプレイと統計",
    "用 Replay 檢討過去決策，並透過大量模擬觀察 ROI、EV、SD、bankroll、停利停損和長期結果。": "Replay で過去の判断を見直し、大量シミュレーションで ROI、EV、SD、bankroll、利確・損切り、長期結果を確認できます。",
    "目標不是把 blackjack 做成休閒遊戲，而是提供一個能反覆練習、觀察數據、修正錯誤，並用統計理解遊戲波動的算牌訓練工具。": "目的はブラックジャックをカジュアルゲームにすることではなく、反復練習、データ確認、ミス修正、統計による変動理解ができるカウント練習ツールを提供することです。",

    "可以調整 Mode，決定 Recommended 與決策對錯要用 Basic、Hi-Lo 或 Hi-Opt I 判斷；也能設定牌組數和穿透率。": "Mode を調整し、Recommended と正誤判定を Basic、Hi-Lo、Hi-Opt I のどれで行うか選べます。デッキ数とペネトレーションも設定できます。",
    "可調整 blackjack 桌面規則與最低賭注，讓練習條件更接近想分析的桌況。": "テーブルルールと最低ベットを調整し、分析したいゲーム条件に近づけられます。",
    "發牌速度可以自行調整，適合用來練習在不同節奏下追蹤 count。": "配牌速度を調整でき、異なるテンポで count を追跡する練習に使えます。",
    "Bet Ramp 會影響前面的建議下注，也會影響 Replay 中對 Bet 是否正確的判斷。": "Bet Ramp は推奨ベットに影響し、Replay でベットが正しいかどうかの判定にも影響します。",
    "Hi-Opt I 相關設定可用來調整進階算牌模式，包含搭配 A side count 後的判斷方式。": "Hi-Opt I 関連設定では、A side count を含む高度なカウント判断を調整できます。",
    "可設定賭桌上的 Players 數量、自己的座位，以及各玩家使用的 Mode，例如 Basic、Hi-Lo 或 Hi-Opt I。": "テーブル上の Players 数、自分の座席、各プレイヤーの Mode（Basic、Hi-Lo、Hi-Opt I など）を設定できます。",
    "遊戲畫面把下注、牌桌、建議、對錯判斷與算牌資訊集中在同一個流程中。使用者可以選擇只靠自己判斷，也可以打開建議與對錯提示，讓 app 在每一步顯示建議動作、判斷結果與原因說明。這不只是背基本策略表，而是用實際手牌理解為什麼某些情況應該 Hit、Stand、Double、Split、Surrender 或買 Insurance。": "ゲーム画面では、ベット、テーブル、推奨、正誤判定、カウント情報をひとつの流れで確認できます。自分の判断だけでプレイすることも、推奨と正誤表示をオンにして、各ステップで推奨アクション、判定結果、理由を表示することもできます。目的は基本戦略表を暗記するだけではなく、実際の手札を通して、なぜ Hit、Stand、Double、Split、Surrender、Insurance が必要になる場面があるのかを理解することです。",
    "打開建議與對錯判斷後，畫面會顯示建議動作、這次選擇是否正確，以及對應的策略原因，幫助把基本策略和算牌偏離連到真實決策。": "推奨と正誤判定をオンにすると、画面には推奨アクション、選択が正しかったかどうか、対応する戦略理由が表示され、基本戦略やカウントによる偏差を実際の判断につなげやすくなります。",
    "牌桌上方會依照目前 Mode 顯示 Basic、Hi-Lo 或 Hi-Opt I 相關資訊，包含剩餘牌數、Decks、Running Count、True Count 等數值。": "テーブル上部には、現在の Mode に応じて Basic、Hi-Lo、Hi-Opt I 関連の情報が表示されます。残りカード数、Decks、Running Count、True Count などを確認できます。",
    "牌桌最多可以設定四個玩家位置，也可以選擇自己坐在哪個位置，用比較接近實戰的多人牌桌情境練習。": "テーブルには最大 4 つのプレイヤー位置を設定でき、自分の座席も選べます。より実戦に近い複数プレイヤーの状況で練習できます。",
    "下注區可以手動調整 Bet，也可以點 Use Recommended，讓 app 依照目前算牌系統、True Count 和 Bet Ramp 自動帶入建議下注。": "ベット欄では Bet を手動で調整できます。また、Use Recommended を押すと、現在のカウントシステム、True Count、Bet Ramp に基づいて推奨ベットが自動で入力されます。",
    "右上角的設定按鈕可以調整桌規、牌組數、穿透率、發牌速度、Bet Ramp 和玩家模式，用來建立不同練習情境。": "右上の設定ボタンから、テーブルルール、デッキ数、ペネトレーション、配牌速度、Bet Ramp、プレイヤーモードを調整し、さまざまな練習条件を作れます。",
    "這個模式的設計重點，是讓使用者在接近實戰的節奏中建立記憶與理解。即時回饋可以幫助確認基本策略是否穩定，原因說明則用來補上「為什麼這樣打」的邏輯。對算牌練習來說，畫面上方的 count 結果可以作為對照：使用者先自己追蹤 Running Count 和 True Count，再立刻和 app 顯示的結果比較，修正漏算或換算錯誤。": "このモードの設計意図は、実戦に近いテンポの中で記憶と理解を同時に作ることです。即時フィードバックは基本戦略が安定しているか確認する助けになり、理由の説明は「なぜそう打つのか」という論理を補います。カウント練習では、画面上部の count 結果を答え合わせとして使えます。まず自分で Running Count と True Count を追跡し、その直後にアプリの表示と比較して、数え漏れや換算ミスを修正できます。",
    "設定項目則是用來模擬不同 blackjack 桌況。你可以調整規則、玩家數量、自己的座位、發牌速度、牌組數、穿透率和下注級距，觀察同一套策略在不同條件下的差異，也可以把發牌速度調快，練習在壓力較高的節奏下追蹤 count。": "設定項目は、さまざまな blackjack のテーブル条件を再現するためのものです。ルール、プレイヤー数、自分の座席、配牌速度、デッキ数、ペネトレーション、ベット幅を調整し、同じ戦略が条件によってどう変わるかを確認できます。配牌速度を速くして、より高いプレッシャーの中で count を追跡する練習にも使えます。",
    "Bet Ramp 可以設定不同 True Count threshold 對應幾倍下注。這會影響遊戲畫面中的建議下注，也會影響 Replay 回放時，app 如何判斷這一手的下注是否符合目前規則。": "Bet Ramp では、異なる True Count threshold に対して何倍のベットを使うか設定できます。これはゲーム画面の推奨ベットに影響し、Replay でそのハンドのベットが現在のルールに合っていたかを判定する基準にもなります。",
    "發牌速度可以依熟悉度調整。剛開始練習時可以放慢，保留時間計算 Running Count 和 True Count；熟悉後再加快速度，練習在更接近實戰壓力的節奏下追蹤牌序。": "配牌速度は習熟度に合わせて調整できます。練習を始めたばかりのときは遅くして Running Count と True Count を計算する時間を確保し、慣れてきたら速くして、より実戦のプレッシャーに近いテンポでカードを追跡できます。",
    "座位設定除了選擇自己的位置，也可以指定其他玩家位置使用 Basic、Hi-Lo 或 Hi-Opt I 等模式。這些座位主要用來建立多人牌桌的發牌情境，讓練習更接近真實牌桌節奏。": "座席設定では自分の位置を選べるだけでなく、他のプレイヤー位置に Basic、Hi-Lo、Hi-Opt I などのモードを指定できます。これらの座席は主に複数プレイヤーの配牌状況を作るためのもので、練習を実際のテーブルのテンポに近づけます。",

    "上方可以調整 Mode 和問題種類，下方會顯示牌局題目與作答按鈕，用來練習每一手的正確決策。": "上部で Mode と問題種類を調整し、下部に問題と回答ボタンが表示されます。各ハンドの正しい判断を練習できます。",
    "可調整 Mode、牌出現速度、Length、起始 RC，以及 Display Mode。Display 區域會依設定顯示牌，用來訓練追蹤 count 的速度與穩定度。": "Mode、カード表示速度、Length、開始 RC、Display Mode を調整できます。Display エリアに設定通りカードが表示され、count 追跡の速度と安定性を練習できます。",
    "作答項目可以選 Running Count、Card Count，或兩者一起練。Card Count 用來確認自己是否同時掌握出現牌數。": "回答項目は Running Count、Card Count、または両方を選べます。Card Count は表示されたカード枚数も追えているか確認するためのものです。",
    "作答畫面讓使用者輸入最後的 count 結果，適合練習快速心算與累加。": "回答画面では最後の count 結果を入力し、素早い暗算と累積計算を練習できます。",
    "作答後會顯示結果，方便檢查自己在哪一段計算或追蹤時出錯。": "回答後に結果が表示され、どの計算や追跡で間違えたか確認しやすくなります。",
    "True Count 計算練習會給 Running Count 和剩餘牌數，讓使用者練習把 RC 換算成實用的 TC 判斷。": "True Count 練習では Running Count と残りカード数が提示され、RC を実用的な TC 判断に変換する練習ができます。",
    "Hi-Lo Count Drill 會模擬真實發牌流程，可調整 Players 數量、發牌速度，並練習回答 Running Count 與剩餘牌數。": "Hi-Lo Count Drill は実際の配牌に近い流れを模擬し、Players 数と配牌速度を調整して Running Count と残りカード数を答える練習ができます。",

    "Settings 可調整桌面規則，概念和 Game 設定相同，用來建立要分析的遊戲條件。": "Settings では Game 設定と同じ考え方でテーブルルールを調整し、分析するゲーム条件を作れます。",
    "可調整座位數，並在同一組遊戲條件下比較不同座位或不同策略，例如不同 Bet Ramp 的長期表現。": "座席数を調整し、同じ条件で異なる座席や戦略、たとえば異なる Bet Ramp の長期結果を比較できます。",
    "模擬完成後會顯示整體結果統計，方便快速比較各座位的淨利、ROI、EV / 100 局與 SD / 100 局。": "シミュレーション後、各座席の純利益、ROI、EV / 100 ラウンド、SD / 100 ラウンドを比較しやすい統計が表示されます。",
    "詳細統計會進一步拆解結果，讓使用者檢查不同區間或不同條件下的表現差異。": "詳細統計では結果をさらに分解し、区間や条件ごとの違いを確認できます。",
    "可調整 session 場數、每場最多玩幾局、停損和停利，用來測試不同資金管理設定下的結果分布。": "session 数、各 session の最大ラウンド数、損切り、利確を調整し、資金管理設定ごとの結果分布をテストできます。",
    "結果頁會顯示整體統計與每場盈虧分布圖，幫助理解同樣策略在多場 session 中可能出現的波動。": "結果ページには全体統計と各 session の損益分布図が表示され、同じ戦略でも複数 session で起こる変動を理解できます。",
    "每一場 session 都會保留簡單概要，方便回頭查看單場結果與長期統計之間的差異。": "各 session には簡単な概要が残り、単発結果と長期統計の違いを見直せます。",

    "Blackjack 的目標不是單純接近 21，而是在不爆牌的前提下打贏莊家。理解規則、桌規與一局流程，是學基本策略和算牌之前的基礎。": "ブラックジャックの目的は単に 21 に近づくことではなく、バーストせずにディーラーに勝つことです。ルール、テーブルルール、1 ラウンドの流れは基本戦略とカウントの前提です。",
    "Blackjack 是 A 加上一張 10 點牌。3:2 代表贏 1.5 倍下注，6:5 只贏 1.2 倍下注，所以 3:2 對玩家明顯比較有利。": "ブラックジャックは A と 10 点カードの組み合わせです。3:2 はベットの 1.5 倍、6:5 は 1.2 倍なので、3:2 の方がプレイヤーに有利です。",
    "H17 通常讓玩家比較不利，因為莊家多一次把牌補強的機會。": "H17 はディーラーが手を強くする機会を増やすため、通常プレイヤーに不利です。",
    "量級直覺：若每手下 1 unit，-0.5% 大約等於長期每 200 手輸 1 unit，但短期波動通常遠大於這個數字。": "規模感として、1 ハンド 1 unit なら -0.5% は長期的に 200 ハンドで約 1 unit 負ける程度ですが、短期の変動は通常それより大きくなります。",
    "這組數字可以對照前面的量級觀念：ROI 是正的，但只有 +0.08%，仍然是很小的長期優勢。換成每 100 局來看，EV 是 +1.66，但 SD 是 315.10；TC &gt;= k 時 ROI 提高到 +1.22%、EV / 100 局提高到 83.37，不過 SD / 100 局也提高到 741.40。也就是說，算牌能改善長期期望值，但短期仍會被變異數主導。": "この数値は前述の規模感と対応します。ROI は正ですが +0.08% と小さい長期優位です。100 ラウンドあたりでは EV が +1.66、SD が 315.10 です。TC >= k では ROI が +1.22%、EV / 100 が 83.37 まで上がりますが、SD / 100 も 741.40 まで上がります。つまりカウントは長期期待値を改善しますが、短期は分散に支配されます。",
    "這組數字和前面的量級直覺接近：不算牌時 ROI 落在負值，長期會慢慢被莊家優勢吃掉；但每 100 局的 SD 仍有 114.84，表示短期輸贏可能遠大於期望值本身。": "この数値は前の規模感に近く、カウントしない場合 ROI は負で、長期的にはハウスエッジに削られます。ただし SD / 100 は 114.84 あり、短期の勝敗は期待値より大きく動く可能性があります。",
    "算牌通常不違法，但賭場仍可能拒絕服務。這個網站與 App 主要用於學習機率與策略，不是鼓勵賭博。": "カードカウントは通常違法ではありませんが、カジノがサービスを拒否する可能性はあります。このサイトとアプリは確率と戦略の学習用であり、賭博を推奨するものではありません。"
  });


  Object.assign(dictionaries.en, {
    "一局流程": "Hand Flow",
    "下注。": "Place a bet.",
    "發初始牌。": "Deal the initial cards.",
    "玩家行動。": "Player acts.",
    "莊家行動。": "Dealer acts.",
    "結算。": "Settle the hand.",
    "玩家行動": "Player Actions",
    "Hit：再拿一張牌，若超過 21 就爆牌。": "Hit: take another card. If the total goes over 21, the hand busts.",
    "Stand：停止拿牌，等莊家完成。": "Stand: stop taking cards and wait for the dealer to finish.",
    "Double：加倍下注，並且只再拿一張牌。": "Double: double the bet and take exactly one more card.",
    "Split：在規則允許時，把 pair 拆成兩手。": "Split: when allowed, split a pair into two hands.",
    "當莊家明牌是 A 時，會提供 Insurance。這其實是在押莊家的底牌是否為 10 點牌，也就是莊家是否為 blackjack。": "When the dealer upcard is an ace, Insurance is offered. It is a side bet on whether the dealer hole card is a 10-value card, meaning the dealer has blackjack.",
    "Insurance 的賠率是 2:1，但在大多數情況下是不利下注；只有牌堆中 10 點牌比例偏高時，才可能變成合理選擇。": "Insurance pays 2:1, but it is usually a bad bet. It becomes reasonable only when the deck is rich enough in 10-value cards.",
    "Surrender 可以讓玩家放棄這一手，拿回一半下注。": "Surrender lets the player give up the hand and recover half the bet.",
    "Late surrender 是莊家確認沒有 blackjack 後才可投降；early surrender 則是在莊家確認前即可投降，對玩家更有利但較少見。": "Late surrender is available only after the dealer checks for blackjack. Early surrender is available before that check and is better for the player, but less common.",
    "Shoe 通常是多副牌，例如 6 decks 或 8 decks。": "A shoe usually contains multiple decks, such as 6 or 8 decks.",
    "發到 cut card 後，代表這個牌鞋結束，會重新洗牌。": "When the cut card is reached, the shoe ends and the cards are shuffled again.",
    "穿透率越深，算牌通常越有價值；太早洗牌會降低可利用的資訊。": "Deeper penetration usually makes counting more valuable; shuffling too early reduces usable information.",
    "H17 補充": "H17 Note",
    "H17 代表莊家在 soft 17 時要繼續補牌，通常會讓玩家更不利，差異常出現在 soft hand 的臨界判斷。": "H17 means the dealer must hit soft 17. It is usually worse for the player, and the difference often appears in borderline soft-hand decisions.",
    "2-10 依照牌面數字計算。": "Cards 2-10 count as their face value.",
    "J、Q、K 都算 10。": "J, Q, and K all count as 10.",
    "A 可以算 1 或 11，採對自己較有利的算法。": "Ace can count as 1 or 11, whichever is better for the hand.",
    "牌": "Card",
    "點數": "Point Value",
    "行動代號": "Action Codes",
    "S = Stand，停牌。": "S = Stand.",
    "H = Hit，再拿一張牌。": "H = Hit, take another card.",
    "D = Double，加倍下注並只再拿一張。": "D = Double, double the bet and take one more card.",
    "P = Split，拆牌。": "P = Split.",
    "R = Surrender，投降；H / R 表示可投降就投降，不能投降時 Hit。": "R = Surrender. H / R means surrender if allowed, otherwise hit.",
    "Basic Strategy 是所有 count-based deviation 套用前的基礎行動表。它包含 hard totals、soft totals、pairs，以及啟用時的 surrender 規則。": "Basic Strategy is the baseline action table before count-based deviations. It covers hard totals, soft totals, pairs, and surrender rules when enabled.",
    "基本策略 - 硬牌": "Basic Strategy - Hard Hands",
    "基本策略 - 軟牌": "Basic Strategy - Soft Hands",
    "基本策略 - 對子": "Basic Strategy - Pairs",
    "基本策略 R": "Basic Strategy R",
    "牌型": "Hand Type",
    "門檻": "Threshold",
    "計數": "Count",
    "下注單位": "Bet Units",
    "意義": "Meaning",
    "情境": "Scenario",
    "剩幾張牌": "Cards Left",
    "換算副數": "Decks Converted",
    "解讀": "Interpretation",
    "牌鞋前段": "Early Shoe",
    "牌鞋中段": "Middle Shoe",
    "牌鞋後段": "Late Shoe",
    "優勢剛開始出現，訊號還不強。": "The edge is just starting to appear; the signal is still weak.",
    "高牌密度已經更明顯，可以開始注意下注級距。": "High-card density is more noticeable, so bet levels deserve attention.",
    "剩餘牌少且 RC 偏高，下注訊號更強，但波動也會變大。": "With fewer cards left and a high RC, the betting signal is stronger, but variance also increases.",
    "通常沒有優勢": "Usually no edge",
    "開始有些微優勢": "A small edge begins",
    "優勢更明顯": "The edge is clearer",
    "高牌密度偏強": "High-card density is strong",
    "優勢強，但波動仍大": "Strong edge, but still high variance",
    "TC 越高，代表剩餘牌堆高牌密度越高。": "Higher TC means the remaining shoe has a higher density of high cards.",
    "高 TC 常用於提高下注。": "High TC is commonly used to raise bets.",
    "部分牌局在 TC 達到門檻時，會從基本策略改成 deviation。": "Some hands switch from basic strategy to a deviation when TC reaches the threshold.",
    "實際估算時，可以先看牌鞋剩幾張牌，再換算成剩餘副數。因為 1 副牌是 52 張，所以 TC 大約等於 RC 除以「剩餘張數 / 52」。": "In practice, first estimate how many cards remain, then convert that to decks remaining. Since one deck has 52 cards, TC is roughly RC divided by (cards remaining / 52).",
    "Running Count 從 0 開始，每看到一張牌就依 Hi-Lo 牌值更新。下面這組牌中，2-6 算 +1，7-9 算 0，10、J、Q、K、A 算 -1；一路累加後，最後 RC 變成 +2。": "Running Count starts at 0 and updates with each exposed card based on Hi-Lo values. In this example, 2-6 count as +1, 7-9 count as 0, and 10, J, Q, K, A count as -1. After adding them up, the final RC is +2.",
    "App training：Hi-Lo RC 累加範例": "App training: Hi-Lo RC accumulation example",
    "Running Count（RC）會隨著每張已曝光的牌更新。True Count（TC）= RC / 剩餘牌副數。TC 的作用是把不同牌鞋深度下的優勢強度標準化。": "Running Count (RC) updates with every exposed card. True Count (TC) = RC / decks remaining. TC standardizes edge strength across different shoe depths.",
    "這也是為什麼 Hi-Lo 這類系統會把低牌視為 +1、高牌視為 -1：低牌被發掉後，剩餘牌堆的高牌密度相對上升，對玩家更有利。": "This is why systems like Hi-Lo count low cards as +1 and high cards as -1: after low cards are removed, the remaining shoe has a higher high-card density, which is better for the player.",
    "Blackjack 賠率是 3:2，所以 10 和 A 越多，玩家拿到 blackjack 的機率越高。": "Blackjack pays 3:2, so more 10s and aces increase the player's chance of getting blackjack.",
    "9、10、11 的 double 更容易打中高牌，而加倍會放大優勢。": "Doubles on 9, 10, and 11 benefit from hitting high cards, and doubling amplifies the edge.",
    "莊家在 12-16 必須補牌，高牌越多，補到 10 而爆牌的機率越高。": "The dealer must hit 12-16, and more high cards increase the chance of drawing a 10 and busting.",
    "Insurance 本質上是在押下一張是不是 10，只有 10 密度夠高時才可能變成正期望值。": "Insurance is essentially a bet on whether the next card is a 10-value card, so it only becomes positive EV when 10 density is high enough.",
    "不過，高 TC 區間雖然 EV 較高，標準差也明顯更大。這代表高牌多的時候雖然更有利，但短期波動也會更劇烈，所以資金管理和風險控制仍然很重要。": "However, high-TC zones have higher EV and also much higher standard deviation. More high cards are favorable, but short-term swings are more intense, so bankroll and risk control still matter."
  });


  Object.assign(dictionaries.ja, {
    "一局流程": "1 ラウンドの流れ",
    "下注。": "ベットする。",
    "發初始牌。": "初期カードを配る。",
    "玩家行動。": "プレイヤーが行動する。",
    "莊家行動。": "ディーラーが行動する。",
    "結算。": "精算する。",
    "玩家行動": "プレイヤーの行動",
    "Hit：再拿一張牌，若超過 21 就爆牌。": "Hit：もう 1 枚引く。21 を超えるとバースト。",
    "Stand：停止拿牌，等莊家完成。": "Stand：カードを引かず、ディーラーの終了を待つ。",
    "Double：加倍下注，並且只再拿一張牌。": "Double：ベットを倍にして、カードを 1 枚だけ引く。",
    "Split：在規則允許時，把 pair 拆成兩手。": "Split：ルールで許される場合、ペアを 2 つの手に分ける。",
    "當莊家明牌是 A 時，會提供 Insurance。這其實是在押莊家的底牌是否為 10 點牌，也就是莊家是否為 blackjack。": "ディーラーのアップカードが A の場合、Insurance が提示されます。これはホールカードが 10 点カードか、つまりディーラーがブラックジャックかを賭けるものです。",
    "Insurance 的賠率是 2:1，但在大多數情況下是不利下注；只有牌堆中 10 點牌比例偏高時，才可能變成合理選擇。": "Insurance の配当は 2:1 ですが、多くの場合不利なベットです。10 点カードの割合が十分高いときだけ合理的になります。",
    "Surrender 可以讓玩家放棄這一手，拿回一半下注。": "Surrender はその手を放棄し、ベットの半分を回収できます。",
    "Late surrender 是莊家確認沒有 blackjack 後才可投降；early surrender 則是在莊家確認前即可投降，對玩家更有利但較少見。": "Late surrender はディーラーが blackjack でないことを確認した後に使えます。Early surrender は確認前に使え、プレイヤーに有利ですが珍しいです。",
    "Shoe 通常是多副牌，例如 6 decks 或 8 decks。": "Shoe は通常 6 decks や 8 decks のような複数デッキです。",
    "發到 cut card 後，代表這個牌鞋結束，會重新洗牌。": "cut card まで配られると、その shoe は終了し、シャッフルされます。",
    "穿透率越深，算牌通常越有價值；太早洗牌會降低可利用的資訊。": "ペネトレーションが深いほどカウントの価値は上がります。早すぎるシャッフルは使える情報を減らします。",
    "H17 補充": "H17 補足",
    "H17 代表莊家在 soft 17 時要繼續補牌，通常會讓玩家更不利，差異常出現在 soft hand 的臨界判斷。": "H17 はディーラーが soft 17 でヒットするルールです。通常プレイヤーに不利で、soft hand の境界判断に差が出ます。",
    "牌": "カード",
    "點數": "点数",
    "行動代號": "アクション記号",
    "S = Stand，停牌。": "S = Stand。",
    "H = Hit，再拿一張牌。": "H = Hit、もう 1 枚引く。",
    "D = Double，加倍下注並只再拿一張。": "D = Double、ベットを倍にして 1 枚だけ引く。",
    "P = Split，拆牌。": "P = Split。",
    "R = Surrender，投降；H / R 表示可投降就投降，不能投降時 Hit。": "R = Surrender。H / R は可能なら surrender、できなければ hit。"
  });


  Object.assign(dictionaries.en, {
    "0，另外用 ace side count 追蹤": "0, tracked separately with an ace side count",
    "8以下": "8 or less",
    "App 以畫面顯示的 TC 為準。只有當 TC 達到表格門檻時才套用 deviation，否則回到基本策略。": "The app uses the TC shown on screen. Deviations apply only when TC reaches the table threshold; otherwise it falls back to basic strategy.",
    "Deviations 是在 TC 達到特定門檻時，從基本策略改成另一個動作。Illustrious 18 是 Hi-Lo 裡最有價值的一批 index play。": "Deviations are changes from basic strategy when TC reaches a specific threshold. The Illustrious 18 are among the most valuable Hi-Lo index plays.",
    "Fab 4 指的是 Hi-Lo 裡四個很重要的 late surrender index play。": "Fab 4 refers to four important late-surrender index plays in Hi-Lo.",
    "Hi-Lo + Bet Ramp 2/4/6/8/12，500000 局模擬結果": "Hi-Lo + Bet Ramp 2/4/6/8/12, 500,000-round simulation result",
    "Hi-Lo + Bet Ramp 的模擬結果": "Hi-Lo + Bet Ramp simulation result",
    "Hi-Lo vs Hi-Opt I，100000 局模擬結果": "Hi-Lo vs Hi-Opt I, 100,000-round simulation result",
    "Hi-Opt I 比 Hi-Lo 更吃紀律與追蹤能力，建議先把基本策略與 Hi-Lo 練穩，再進階到 Hi-Opt I。": "Hi-Opt I requires more discipline and tracking ability than Hi-Lo. It is better to stabilize basic strategy and Hi-Lo before moving to Hi-Opt I.",
    "Kelly 的核心是下注大小和 edge / variance 的關係。優勢越大可以下得更多，但波動大時仍然需要保守。": "Kelly is about the relationship between bet size, edge, and variance. A larger edge allows larger bets, but high variance still requires caution.",
    "以下是 Hi-Lo 與 Hi-Opt I 各跑 100000 局的比較。這組結果中 Hi-Opt I 的 EV 較高，但 SD / 100 局也較大；從整體來看，兩者差距沒有想像中明顯。": "Below is a 100,000-round comparison of Hi-Lo and Hi-Opt I. In this result, Hi-Opt I has higher EV, but also higher SD / 100 rounds; overall, the gap is not as large as it may seem.",
    "目前 App 的核心 index spec 包含 insurance、surrender、hard hand、10,10 分牌，以及部分 double。和 Hi-Lo 相比，Hi-Opt I 的概念更精細，但也多了 ace side count 與 true count 修正，因此實際結果會受到 Side A 的估算方式、下注門檻 k 值與使用情境影響。": "The app's core index spec includes insurance, surrender, hard hands, 10,10 splits, and some doubles. Compared with Hi-Lo, Hi-Opt I is more precise, but it also adds an ace side count and true-count adjustments, so actual results depend on Side A estimation, the betting threshold k, and the use case.",
    "解讀這類比較時要保留一點彈性。Hi-Opt I 不是單純換一組牌值就能直接和 Hi-Lo 對照，因為它會搭配 A 的 side count，並依不同 k 值修正 betting / insurance true count。換句話說，單次模擬可以提供方向，但不適合只靠一張總表就判定哪個系統絕對比較好。": "Interpret this kind of comparison with some flexibility. Hi-Opt I is not just a direct card-value swap against Hi-Lo, because it uses an ace side count and adjusts betting / insurance true count based on different k values. A single simulation can show direction, but it should not be used alone to decide which system is absolutely better.",

    "算牌在數學上可以建立優勢，但真實環境裡仍然有桌規、穿透率、桌限、速度、資金與心理壓力等限制。": "Card counting can create a mathematical edge, but real play still has limits such as table rules, penetration, table limits, speed, bankroll, and psychological pressure.",
    "幾個現實因素": "Practical Factors",
    "桌規差會吃掉優勢，例如 6:5 blackjack 通常很不利。": "Bad rules can consume the edge; for example, 6:5 blackjack is usually very unfavorable.",
    "就算 edge 為正，短期仍可能連續輸很多手。": "Even with a positive edge, many losing hands in a row can still happen in the short term.",
    "賭場可能因為行為模式拒絕服務。": "Casinos may refuse service based on play patterns.",
    "因此這個網站和 App 更適合作為學習機率、策略與訓練反應的工具，而不是把算牌包裝成穩賺方法。": "Therefore this site and app are better understood as tools for learning probability, strategy, and training reactions, not as a guaranteed-profit method.",
    "穿透率越深，算牌通常越有價值。": "Deeper penetration usually makes counting more valuable.",
    "常見 6D / H17 / DAS / 3:2 桌規下，莊家優勢大約是 0.4%-0.7%。": "With common 6D / H17 / DAS / 3:2 rules, the house edge is roughly 0.4%-0.7%.",
    "如果改成 S17，通常對玩家會再好約 0.1%-0.3%。": "With S17, the game is usually about 0.1%-0.3% better for the player.",
    "6:5 blackjack 通常很差，不建議。": "6:5 blackjack is usually poor and not recommended.",
    "桌規好、穿透率不差，而且依照 TC 調整下注時，總體期望值有機會變成正值。": "With good rules, decent penetration, and TC-based bet adjustment, the overall expectation can become positive.",
    "常見量級大約是總下注額的 +0.3%-+1.5%。": "A common scale is roughly +0.3% to +1.5% of total amount bet.",
    "玩家最有感的通常不是那一點點優勢，而是 variance 加上局數。": "What players feel most is usually not the small edge itself, but variance combined with the number of rounds.",
    "實際範圍會強烈受到桌規、穿透率、桌限與 bet ramp 影響。": "The actual range is heavily affected by rules, penetration, table limits, and bet ramp.",
    "Blackjack 是小優勢配上大波動的遊戲，短期輸贏很多時候都只是雜訊。": "Blackjack is a game of small edges and large swings; short-term results are often just noise.",
    "unit 就是你的基本下注金額。": "A unit is your base bet size.",
    "單手常見波動大約是 ±1.1-1.3 units。": "A common single-hand swing is around +/-1.1 to 1.3 units.",
    "假設 edge 是 +1%，每手期望值約 +0.01 unit，但單手波動約 ±1.2 units。打 100 手時，期望值只有約 +1 unit，可是出現 ±12 units 的波動仍然完全正常。": "If the edge is +1%, the expectation is about +0.01 unit per hand, but single-hand volatility is about +/-1.2 units. Over 100 hands, the expectation is only about +1 unit, while a +/-12 unit swing is still completely normal.",
    "以下結果使用基本策略、不算牌，共跑約 500000 局。整體 ROI 是 -0.70%，EV / 100 局是 -7.90，SD / 100 局是 114.84。": "The result below uses basic strategy without counting over about 500,000 rounds. Overall ROI is -0.70%, EV / 100 rounds is -7.90, and SD / 100 rounds is 114.84.",
    "以下結果使用 Hi-Lo，搭配 Bet Ramp 2/4/6/8/12，共跑 500000 局。整體 ROI 是 +0.08%，EV / 100 局是 +1.66，SD / 100 局是 315.10。": "The result below uses Hi-Lo with Bet Ramp 2/4/6/8/12 over 500,000 rounds. Overall ROI is +0.08%, EV / 100 rounds is +1.66, and SD / 100 rounds is 315.10.",

    "以下結果使用 Hi-Lo，並以不同 Bet Ramp 跑 200000 局，比較下注級距提高後的 EV 與波動變化。": "The result below uses Hi-Lo and different Bet Ramps over 200,000 rounds to compare how larger betting levels change EV and variance.",
    "可以看到，Bet Ramp 較大的 Seat 2 整體期望值較高，EV / 100 局也明顯提高；但同時 SD / 100 局也變大，代表下注放大優勢的同時，短期波動也會跟著增加。": "Seat 2, with the larger Bet Ramp, has higher overall expectation and clearly higher EV / 100 rounds. But SD / 100 rounds also rises, meaning larger bets amplify the edge and short-term swings at the same time.",
    "這只是教學示意。實際下注大小會強烈受到 bankroll、桌限、桌規、牌靴穿透率與風險承受度影響。": "This is only a teaching example. Real bet sizing is strongly affected by bankroll, table limits, rules, shoe penetration, and risk tolerance.",
    "初學時先理解 bet ramp 的概念，不要把範例級距直接當成固定公式。": "Beginners should first understand the idea of a bet ramp, not treat the example levels as a fixed formula.",

    "目前 surrender 規則：hard 16 vs 9-10-A，以及 hard 15 vs 10。只會在兩張牌、硬牌、非對子的手牌上檢查 surrender。": "Current surrender rules: hard 16 vs 9-10-A, and hard 15 vs 10. Surrender is checked only for two-card, hard, non-pair hands.",
    "實作前提": "Implementation Assumptions",
    "H17 代表莊家在 soft 17 時要 Hit。": "H17 means the dealer hits soft 17.",
    "S17 代表莊家在 soft 17 時要 Stand。": "S17 means the dealer stands on soft 17.",
    "App 以畫面顯示的 TC 為準。只有當 TC 達到表格門檻時才套用 deviation，否則回到基本策略。": "The app uses the TC shown on screen. A deviation applies only when TC reaches the table threshold; otherwise it falls back to basic strategy.",
    "未投降時 Stand": "Stand if surrender is unavailable",
    "投降": "Surrender",
    "買保險": "Take Insurance",
    "保險": "Insurance",
    "0，另外用 ace side count 追蹤": "0, tracked separately with ace side count",
    "8以下": "8 or less"
  });

  Object.assign(dictionaries.en, {
    "學習算牌時，常見問題不是只知道 Hi-Lo 牌值，而是能不能在接近實戰的情境中穩定追蹤 Running Count、換算 True Count、依照 TC 調整下注，並回頭檢討錯誤。除了練習之外，app 也能用大量模擬和統計結果，幫助理解 EV、ROI、變異數、bet ramp 和 session 規則如何影響 blackjack 的長期表現。": "When learning to count cards, the hard part is not only memorizing Hi-Lo values. It is staying accurate in realistic situations: tracking Running Count, converting True Count, adjusting bets by TC, and reviewing mistakes. The app also uses large simulations and statistics to show how EV, ROI, variance, bet ramps, and session rules affect long-term blackjack results.",
    "以下結果由 app 以 Hi-Lo 搭配 Bet Ramp 模擬，將 true count、下注級距、EV 和波動分組比較。": "The result below comes from an app simulation using Hi-Lo with a bet ramp, grouping true count, bet sizing, EV, and volatility for comparison.",
    "基本策略（不算牌）模擬結果": "Basic strategy simulation result, without counting",
    "這組模擬使用 Hi-Lo 算牌並搭配 Bet Ramp，共跑 100000 局，並把門檻設定為 k = 2。結果可以看到，當 true count 進入較高區間，也就是 TC >= 2 時，整體期望值明顯高於 TC < 2 的區間。": "This simulation uses Hi-Lo counting with a bet ramp, runs 100,000 rounds, and sets the threshold at k = 2. When the true count reaches the higher range, TC >= 2, the overall expected value is clearly higher than the TC < 2 range.",
    "這組模擬使用 Hi-Lo 算牌並搭配 Bet Ramp，共跑 100000 局，並把門檻設定為 k = 2。結果可以看到，當 true count 進入較高區間，也就是 TC &gt;= 2 時，整體期望值明顯高於 TC &lt; 2 的區間。": "This simulation uses Hi-Lo counting with a bet ramp, runs 100,000 rounds, and sets the threshold at k = 2. When the true count reaches the higher range, TC >= 2, the overall expected value is clearly higher than the TC < 2 range.",
    "這組數字可以對照前面的量級觀念：ROI 是正的，但只有 +0.08%，仍然是很小的長期優勢。換成每 100 局來看，EV 是 +1.66，但 SD 是 315.10；TC >= k 時 ROI 提高到 +1.22%、EV / 100 局提高到 83.37，不過 SD / 100 局也提高到 741.40。也就是說，算牌能改善長期期望值，但短期仍會被變異數主導。": "These numbers connect back to the earlier scale discussion. ROI is positive, but only +0.08%, so it is still a small long-term edge. Per 100 rounds, EV is +1.66 while SD is 315.10. When TC >= k, ROI rises to +1.22% and EV / 100 rounds rises to 83.37, but SD / 100 rounds also rises to 741.40. In short, counting can improve long-term expected value, but short-term results are still dominated by variance.",
    "這說明高牌比例上升時，玩家的優勢會更集中地出現；而 Bet Ramp 的核心，就是在這些高牌較多、優勢較好的時候提高下注。換句話說，想要真正利用算牌優勢，關鍵不只是知道牌堆變好，而是要在高 TC 時用下注級距把優勢放大。": "This shows that when the proportion of high cards rises, the player's edge becomes more concentrated. The point of a bet ramp is to raise bets in those higher-TC spots where the deck is more favorable. In other words, using a counting edge is not only about knowing the deck has improved; it is about increasing bet size when TC is high.",
    "94 張": "94 cards",
    "168 張": "168 cards",
    "286 張": "286 cards",
    "1.8 副": "1.8 decks",
    "3.2 副": "3.2 decks",
    "5.5 副": "5.5 decks"
  });

  Object.assign(dictionaries.ja, {
    "0，另外用 ace side count 追蹤": "0。別途 ace side count で追跡",
    "1.8 副": "1.8 デッキ",
    "168 張": "168 枚",
    "2-10 依照牌面數字計算。": "2-10 はカードの数字どおりに数えます。",
    "286 張": "286 枚",
    "3.2 副": "3.2 デッキ",
    "5.5 副": "5.5 デッキ",
    "6:5 blackjack 通常很差，不建議。": "6:5 blackjack は通常かなり不利なのでおすすめしません。",
    "8以下": "8 以下",
    "94 張": "94 枚",
    "9、10、11 的 double 更容易打中高牌，而加倍會放大優勢。": "9、10、11 の double は高カードを引きやすく、加倍によって優位も大きくなります。",
    "A 可以算 1 或 11，採對自己較有利的算法。": "A は 1 または 11 として数え、自分に有利な値を使います。",
    "App training：Hi-Lo RC 累加範例": "アプリ練習：Hi-Lo RC の累積例",
    "App 以畫面顯示的 TC 為準。只有當 TC 達到表格門檻時才套用 deviation，否則回到基本策略。": "アプリでは画面に表示される TC を基準にします。TC が表のしきい値に達した場合だけ deviation を使い、それ以外は基本戦略に戻ります。",
    "Basic Strategy 是所有 count-based deviation 套用前的基礎行動表。它包含 hard totals、soft totals、pairs，以及啟用時的 surrender 規則。": "Basic Strategy は count-based deviation を使う前の基礎行動表です。hard totals、soft totals、pairs、そして有効時の surrender ルールを含みます。",
    "Blackjack 是小優勢配上大波動的遊戲，短期輸贏很多時候都只是雜訊。": "ブラックジャックは小さな優位と大きな変動が同時にあるゲームで、短期の勝敗は多くの場合ノイズです。",
    "Blackjack 賠率是 3:2，所以 10 和 A 越多，玩家拿到 blackjack 的機率越高。": "Blackjack の配当は 3:2 なので、10 と A が多いほどプレイヤーが blackjack を引く確率は上がります。",
    "Deviations 是在 TC 達到特定門檻時，從基本策略改成另一個動作。Illustrious 18 是 Hi-Lo 裡最有價值的一批 index play。": "Deviations は TC が特定のしきい値に達したとき、基本戦略から別のアクションに変えるものです。Illustrious 18 は Hi-Lo で特に価値の高い index play です。",
    "Fab 4 指的是 Hi-Lo 裡四個很重要的 late surrender index play。": "Fab 4 は Hi-Lo における重要な late surrender index play の 4 つです。",
    "H17 代表莊家在 soft 17 時要 Hit。": "H17 はディーラーが soft 17 で Hit するルールです。",
    "Hi-Lo + Bet Ramp 2/4/6/8/12，500000 局模擬結果": "Hi-Lo + Bet Ramp 2/4/6/8/12、500,000 ラウンドのシミュレーション結果",
    "Hi-Lo + Bet Ramp 的模擬結果": "Hi-Lo + Bet Ramp のシミュレーション結果",
    "Hi-Lo vs Hi-Opt I，100000 局模擬結果": "Hi-Lo vs Hi-Opt I、100,000 ラウンドのシミュレーション結果",
    "Hi-Opt I 比 Hi-Lo 更吃紀律與追蹤能力，建議先把基本策略與 Hi-Lo 練穩，再進階到 Hi-Opt I。": "Hi-Opt I は Hi-Lo より規律と追跡力が必要です。まず基本戦略と Hi-Lo を安定させてから Hi-Opt I に進むのがおすすめです。",
    "Insurance 本質上是在押下一張是不是 10，只有 10 密度夠高時才可能變成正期望值。": "Insurance は本質的に次のカードが 10 かどうかに賭けるものです。10 の密度が十分高いときだけ期待値が正になり得ます。",
    "J、Q、K 都算 10。": "J、Q、K はすべて 10 として数えます。",
    "Kelly 的核心是下注大小和 edge / variance 的關係。優勢越大可以下得更多，但波動大時仍然需要保守。": "Kelly の核心はベットサイズと edge / variance の関係です。優位が大きいほど多く賭けられますが、変動が大きい場合は保守的にする必要があります。",
    "Running Count 從 0 開始，每看到一張牌就依 Hi-Lo 牌值更新。下面這組牌中，2-6 算 +1，7-9 算 0，10、J、Q、K、A 算 -1；一路累加後，最後 RC 變成 +2。": "Running Count は 0 から始まり、カードが出るたびに Hi-Lo の値で更新します。下の例では 2-6 が +1、7-9 が 0、10、J、Q、K、A が -1 です。順に足していくと、最後の RC は +2 になります。",
    "Running Count（RC）會隨著每張已曝光的牌更新。True Count（TC）= RC / 剩餘牌副數。TC 的作用是把不同牌鞋深度下的優勢強度標準化。": "Running Count（RC）は公開されたカードごとに更新されます。True Count（TC）= RC / 残りデッキ数です。TC はシューの深さが違っても優位の強さを比較できるよう標準化します。",
    "S17 代表莊家在 soft 17 時要 Stand。": "S17 はディーラーが soft 17 で Stand するルールです。",
    "TC 越高，代表剩餘牌堆高牌密度越高。": "TC が高いほど、残りカードに高カードが多いことを意味します。",
    "unit 就是你的基本下注金額。": "unit は基本ベット額です。",
    "下注單位": "ベット単位",
    "不過，高 TC 區間雖然 EV 較高，標準差也明顯更大。這代表高牌多的時候雖然更有利，但短期波動也會更劇烈，所以資金管理和風險控制仍然很重要。": "ただし、高 TC 区間は EV が高い一方で標準偏差も大きくなります。高カードが多いほど有利ですが、短期の変動も激しくなるため、資金管理とリスク管理は重要です。",
    "以下是 Hi-Lo 與 Hi-Opt I 各跑 100000 局的比較。這組結果中 Hi-Opt I 的 EV 較高，但 SD / 100 局也較大；從整體來看，兩者差距沒有想像中明顯。": "以下は Hi-Lo と Hi-Opt I をそれぞれ 100,000 ラウンド走らせた比較です。この結果では Hi-Opt I の EV が高い一方、SD / 100 ラウンドも大きく、全体として差は想像ほど大きくありません。",
    "以下結果使用 Hi-Lo，並以不同 Bet Ramp 跑 200000 局，比較下注級距提高後的 EV 與波動變化。": "以下は Hi-Lo で異なる Bet Ramp を使い、200,000 ラウンドを走らせた結果です。ベット段階を上げたときの EV と変動を比較しています。",
    "以下結果使用 Hi-Lo，搭配 Bet Ramp 2/4/6/8/12，共跑 500000 局。整體 ROI 是 +0.08%，EV / 100 局是 +1.66，SD / 100 局是 315.10。": "以下は Hi-Lo と Bet Ramp 2/4/6/8/12 を使い、500,000 ラウンド走らせた結果です。全体 ROI は +0.08%、EV / 100 ラウンドは +1.66、SD / 100 ラウンドは 315.10 です。",
    "以下結果使用基本策略、不算牌，共跑約 500000 局。整體 ROI 是 -0.70%，EV / 100 局是 -7.90，SD / 100 局是 114.84。": "以下は基本戦略のみ、カウントなしで約 500,000 ラウンド走らせた結果です。全体 ROI は -0.70%、EV / 100 ラウンドは -7.90、SD / 100 ラウンドは 114.84 です。",
    "以下結果由 app 以 Hi-Lo 搭配 Bet Ramp 模擬，將 true count、下注級距、EV 和波動分組比較。": "以下はアプリで Hi-Lo と Bet Ramp を使ってシミュレーションし、true count、ベット段階、EV、変動をグループ別に比較したものです。",
    "保險": "インシュランス",
    "假設 edge 是 +1%，每手期望值約 +0.01 unit，但單手波動約 ±1.2 units。打 100 手時，期望值只有約 +1 unit，可是出現 ±12 units 的波動仍然完全正常。": "edge が +1% だとすると、1 ハンドあたりの期待値は約 +0.01 unit ですが、1 ハンドの変動は約 ±1.2 units です。100 ハンドでは期待値は約 +1 unit しかなく、±12 units 程度の変動は十分普通に起こります。",
    "優勢剛開始出現，訊號還不強。": "優位が出始めた段階で、シグナルはまだ強くありません。",
    "優勢強，但波動仍大": "優位は強いが、変動も大きい",
    "優勢更明顯": "優位がより明確",
    "初學時先理解 bet ramp 的概念，不要把範例級距直接當成固定公式。": "最初は bet ramp の考え方を理解し、例の段階を固定公式として扱わないでください。",
    "剩幾張牌": "残りカード数",
    "剩餘牌少且 RC 偏高，下注訊號更強，但波動也會變大。": "残りカードが少なく RC が高い場合、ベットシグナルは強くなりますが、変動も大きくなります。",
    "可以看到，Bet Ramp 較大的 Seat 2 整體期望值較高，EV / 100 局也明顯提高；但同時 SD / 100 局也變大，代表下注放大優勢的同時，短期波動也會跟著增加。": "Bet Ramp が大きい Seat 2 は全体の期待値が高く、EV / 100 ラウンドも明確に上がっています。ただし SD / 100 ラウンドも大きくなり、ベットで優位を拡大する一方で短期変動も増えることが分かります。",
    "單手常見波動大約是 ±1.1-1.3 units。": "1 ハンドの一般的な変動は約 ±1.1-1.3 units です。",
    "因此這個網站和 App 更適合作為學習機率、策略與訓練反應的工具，而不是把算牌包裝成穩賺方法。": "そのため、このサイトとアプリはカウントを確実に稼げる方法として見せるものではなく、確率、戦略、反応練習を学ぶためのツールです。",
    "基本策略 - 對子": "基本戦略 - ペア",
    "基本策略 - 硬牌": "基本戦略 - ハードハンド",
    "基本策略 - 軟牌": "基本戦略 - ソフトハンド",
    "基本策略 R": "基本戦略 R",
    "基本策略（不算牌）模擬結果": "基本戦略（カウントなし）のシミュレーション結果",
    "如果改成 S17，通常對玩家會再好約 0.1%-0.3%。": "S17 に変えると、通常プレイヤーにとってさらに約 0.1%-0.3% 有利になります。",
    "學習算牌時，常見問題不是只知道 Hi-Lo 牌值，而是能不能在接近實戰的情境中穩定追蹤 Running Count、換算 True Count、依照 TC 調整下注，並回頭檢討錯誤。除了練習之外，app 也能用大量模擬和統計結果，幫助理解 EV、ROI、變異數、bet ramp 和 session 規則如何影響 blackjack 的長期表現。": "カードカウントを学ぶときの課題は、Hi-Lo の値を知っていることだけではありません。実戦に近い状況で Running Count を安定して追跡し、True Count に換算し、TC に応じてベットを調整し、ミスを見直せるかどうかです。練習だけでなく、アプリは大量シミュレーションと統計によって、EV、ROI、分散、bet ramp、session ルールがブラックジャックの長期成績にどう影響するかを理解しやすくします。",
    "實作前提": "実装上の前提",
    "實際估算時，可以先看牌鞋剩幾張牌，再換算成剩餘副數。因為 1 副牌是 52 張，所以 TC 大約等於 RC 除以「剩餘張數 / 52」。": "実際に見積もるときは、まずシューに残っているカード枚数を見て、それを残りデッキ数に換算します。1 デッキは 52 枚なので、TC はおおよそ RC を「残り枚数 / 52」で割った値です。",
    "實際範圍會強烈受到桌規、穿透率、桌限與 bet ramp 影響。": "実際の範囲は、ルール、ペネトレーション、テーブルリミット、bet ramp に大きく影響されます。",
    "就算 edge 為正，短期仍可能連續輸很多手。": "edge が正でも、短期では多くのハンドを連続して負けることがあります。",
    "常見 6D / H17 / DAS / 3:2 桌規下，莊家優勢大約是 0.4%-0.7%。": "一般的な 6D / H17 / DAS / 3:2 ルールでは、ハウスエッジはおよそ 0.4%-0.7% です。",
    "常見量級大約是總下注額的 +0.3%-+1.5%。": "一般的な規模感は総ベット額の約 +0.3%-+1.5% です。",
    "幾個現實因素": "いくつかの現実的な要因",
    "情境": "状況",
    "意義": "意味",
    "投降": "サレンダー",
    "換算副數": "換算デッキ数",
    "未投降時 Stand": "サレンダーしない場合は Stand",
    "桌規好、穿透率不差，而且依照 TC 調整下注時，總體期望值有機會變成正值。": "ルールが良く、ペネトレーションも悪くなく、TC に応じてベットを調整できる場合、全体の期待値は正になる可能性があります。",
    "桌規差會吃掉優勢，例如 6:5 blackjack 通常很不利。": "悪いルールは優位を削ります。たとえば 6:5 blackjack は通常かなり不利です。",
    "牌型": "手札",
    "牌鞋中段": "シュー中盤",
    "牌鞋前段": "シュー前半",
    "牌鞋後段": "シュー後半",
    "玩家最有感的通常不是那一點點優勢，而是 variance 加上局數。": "プレイヤーが最も体感しやすいのは小さな優位ではなく、variance とラウンド数です。",
    "目前 App 的核心 index spec 包含 insurance、surrender、hard hand、10,10 分牌，以及部分 double。和 Hi-Lo 相比，Hi-Opt I 的概念更精細，但也多了 ace side count 與 true count 修正，因此實際結果會受到 Side A 的估算方式、下注門檻 k 值與使用情境影響。": "現在のアプリの主要 index spec には insurance、surrender、hard hand、10,10 split、一部の double が含まれます。Hi-Lo と比べると Hi-Opt I はより細かい考え方ですが、ace side count と true count 補正も増えるため、実際の結果は Side A の見積もり方法、ベットしきい値 k、使用状況に影響されます。",
    "目前 surrender 規則：hard 16 vs 9-10-A，以及 hard 15 vs 10。只會在兩張牌、硬牌、非對子的手牌上檢查 surrender。": "現在の surrender ルールは hard 16 vs 9-10-A、および hard 15 vs 10 です。2 枚カード、ハードハンド、ペアでない手札の場合だけ surrender を確認します。",
    "穿透率越深，算牌通常越有價值。": "ペネトレーションが深いほど、カウントの価値は通常高くなります。",
    "算牌在數學上可以建立優勢，但真實環境裡仍然有桌規、穿透率、桌限、速度、資金與心理壓力等限制。": "カードカウントは数学的には優位を作れますが、現実にはルール、ペネトレーション、テーブルリミット、速度、資金、心理的負荷などの制約があります。",
    "莊家在 12-16 必須補牌，高牌越多，補到 10 而爆牌的機率越高。": "ディーラーは 12-16 でヒットする必要があり、高カードが多いほど 10 を引いてバーストする確率が上がります。",
    "解讀": "読み方",
    "解讀這類比較時要保留一點彈性。Hi-Opt I 不是單純換一組牌值就能直接和 Hi-Lo 對照，因為它會搭配 A 的 side count，並依不同 k 值修正 betting / insurance true count。換句話說，單次模擬可以提供方向，但不適合只靠一張總表就判定哪個系統絕對比較好。": "この種の比較は少し柔軟に読む必要があります。Hi-Opt I は単にカード値を変えれば Hi-Lo と直接比較できるものではなく、A の side count と、k 値に応じた betting / insurance true count 補正を使います。つまり、単発のシミュレーションは方向性を示せますが、1 枚の総表だけでどちらが絶対に優れているかを決めるのには向きません。",
    "計數": "カウント",
    "買保險": "インシュランスを買う",
    "賭場可能因為行為模式拒絕服務。": "カジノは行動パターンを理由にサービスを拒否する可能性があります。",
    "這也是為什麼 Hi-Lo 這類系統會把低牌視為 +1、高牌視為 -1：低牌被發掉後，剩餘牌堆的高牌密度相對上升，對玩家更有利。": "これが Hi-Lo のようなシステムで低カードを +1、高カードを -1 とする理由です。低カードが出ると、残りカードの高カード密度が相対的に上がり、プレイヤーに有利になります。",
    "這只是教學示意。實際下注大小會強烈受到 bankroll、桌限、桌規、牌靴穿透率與風險承受度影響。": "これは教学用の例です。実際のベットサイズは bankroll、テーブルリミット、ルール、シューのペネトレーション、リスク許容度に大きく左右されます。",
    "這組數字可以對照前面的量級觀念：ROI 是正的，但只有 +0.08%，仍然是很小的長期優勢。換成每 100 局來看，EV 是 +1.66，但 SD 是 315.10；TC >= k 時 ROI 提高到 +1.22%、EV / 100 局提高到 83.37，不過 SD / 100 局也提高到 741.40。也就是說，算牌能改善長期期望值，但短期仍會被變異數主導。": "この数値は前の規模感と対応します。ROI は正ですが +0.08% と小さな長期優位です。100 ラウンドあたりでは EV が +1.66、SD が 315.10 です。TC >= k では ROI が +1.22%、EV / 100 ラウンドが 83.37 まで上がりますが、SD / 100 ラウンドも 741.40 まで上がります。つまり、カウントは長期期待値を改善しますが、短期は分散に支配されます。",
    "這組模擬使用 Hi-Lo 算牌並搭配 Bet Ramp，共跑 100000 局，並把門檻設定為 k = 2。結果可以看到，當 true count 進入較高區間，也就是 TC &gt;= 2 時，整體期望值明顯高於 TC &lt; 2 的區間。": "このシミュレーションは Hi-Lo カウントと Bet Ramp を使い、100,000 ラウンドを走らせ、しきい値を k = 2 に設定しています。true count が高い区間、つまり TC >= 2 に入ると、全体の期待値は TC < 2 の区間より明確に高くなります。",
    "這組模擬使用 Hi-Lo 算牌並搭配 Bet Ramp，共跑 100000 局，並把門檻設定為 k = 2。結果可以看到，當 true count 進入較高區間，也就是 TC >= 2 時，整體期望值明顯高於 TC < 2 的區間。": "このシミュレーションは Hi-Lo カウントと Bet Ramp を使い、100,000 ラウンドを走らせ、しきい値を k = 2 に設定しています。true count が高い区間、つまり TC >= 2 に入ると、全体の期待値は TC < 2 の区間より明確に高くなります。",
    "這說明高牌比例上升時，玩家的優勢會更集中地出現；而 Bet Ramp 的核心，就是在這些高牌較多、優勢較好的時候提高下注。換句話說，想要真正利用算牌優勢，關鍵不只是知道牌堆變好，而是要在高 TC 時用下注級距把優勢放大。": "これは高カード比率が上がると、プレイヤーの優位がより集中して現れることを示しています。Bet Ramp の核心は、高カードが多く有利な場面でベットを上げることです。つまり、カウントの優位を活かすには、デッキが良くなったことを知るだけでなく、高 TC でベット段階を使って優位を拡大する必要があります。",
    "通常沒有優勢": "通常は優位なし",
    "部分牌局在 TC 達到門檻時，會從基本策略改成 deviation。": "一部の手は TC がしきい値に達したとき、基本戦略から deviation に変わります。",
    "門檻": "しきい値",
    "開始有些微優勢": "わずかな優位が出始める",
    "高 TC 常用於提高下注。": "高 TC はベットを上げる判断によく使われます。",
    "高牌密度偏強": "高カード密度がやや強い",
    "高牌密度已經更明顯，可以開始注意下注級距。": "高カード密度がより明確で、ベット段階に注意し始める場面です。"
  });

  Object.assign(dictionaries.en, {
    "本頁說明「二十一點算牌訓練器」如何處理使用者資料。這個 app 主要是離線練習、模擬統計與回放工具，不需要註冊帳號，也不以廣告或追蹤為目的收集個人資料。": "This page explains how Blackjack Card Counting Trainer handles user data. The app is mainly an offline practice, simulation statistics, and replay tool. It does not require account registration and does not collect personal data for advertising or tracking.",
    "資料收集": "Data Collection",
    "本 app 目前不會主動收集、上傳或出售使用者的個人資料。App 不需要姓名、電子郵件、電話、位置資訊或社群帳號才能使用。": "The app currently does not actively collect, upload, or sell users' personal data. It does not require a name, email address, phone number, location information, or social account to use.",
    "本機儲存資料": "Data Stored Locally",
    "為了提供訓練、統計與回放功能，app 可能會在你的裝置本機保存以下資料：": "To provide training, statistics, and replay features, the app may store the following data locally on your device:",
    "遊戲與訓練設定，例如桌面規則、牌組數、穿透率、bet ramp、速度與顯示偏好。": "Game and training settings, such as table rules, deck count, penetration, bet ramp, speed, and display preferences.",
    "練習與模擬統計，例如 ROI、EV、SD、session 結果與訓練表現。": "Practice and simulation statistics, such as ROI, EV, SD, session results, and training performance.",
    "Replay 回放資料，例如牌局流程、下注、玩家動作、結果與錯誤回饋。": "Replay data, such as hand flow, bets, player actions, results, and mistake feedback.",
    "這些資料主要用於讓你在 app 內檢視自己的練習結果與過去決策。": "This data is mainly used so you can review your practice results and past decisions inside the app.",
    "第三方服務": "Third-Party Services",
    "本 app 不使用廣告 SDK，也不以行為追蹤為目的整合分析工具。若你是從 Google Play 下載或更新 app，Google Play 本身可能會依 Google 的政策處理商店、下載、付款或裝置相關資料。": "The app does not use advertising SDKs and does not integrate analytics tools for behavioral tracking. If you download or update the app through Google Play, Google Play itself may process store, download, payment, or device-related data according to Google's policies.",
    "資料刪除": "Data Deletion",
    "你可以透過裝置系統的 app 資料清除功能，或直接解除安裝 app，刪除保存在裝置上的本機資料。": "You can delete local data stored on your device by using the system app-data clearing feature or by uninstalling the app.",
    "未成年人與用途提醒": "Minors and Usage Notice",
    "本 app 是 blackjack 策略、算牌與機率訓練工具，不提供真錢賭博功能，也不鼓勵賭博。使用者仍應遵守所在地法律與平台規範。": "This app is a blackjack strategy, card counting, and probability training tool. It does not provide real-money gambling features and does not encourage gambling. Users should follow local laws and platform rules.",
    "第三方資產與授權": "Third-Party Assets and Licenses",
    "本 app 使用或包含以下第三方資產與授權資訊：": "The app uses or includes the following third-party assets and license notices:",
    "Playing card face assets：Playing Cards Pack by Kenney，Creative Commons CC0 1.0 Universal。來源：https://kenney.nl/assets/playing-cards-pack。標示來源並非必要，但原作者歡迎 credit。": "Playing card face assets: Playing Cards Pack by Kenney, Creative Commons CC0 1.0 Universal. Source: https://kenney.nl/assets/playing-cards-pack. Attribution is not required, but credit is appreciated.",
    "Card back asset：使用 ChatGPT / OpenAI image generation 建立的自訂牌背圖。這是為本 app 製作的原始資產，未刻意使用第三方品牌、logo、賭場標誌或商標。": "Card back asset: a custom card back image created with ChatGPT / OpenAI image generation. It is an original asset made for this app, with no third-party brand, logo, casino mark, or trademark intentionally used.",
    "OpenAI output note：OpenAI 不主張使用者產出內容的著作權；使用者仍需自行確認產出資產不侵害第三方權利。來源：https://help.openai.com/en/articles/5008634。": "OpenAI output note: OpenAI does not claim copyright over output generated for users. Users are responsible for ensuring generated assets do not infringe third-party rights. Source: https://help.openai.com/en/articles/5008634.",
    "聯絡方式": "Contact",
    "如果你對隱私權政策、資料處理或授權資訊有疑問，可以聯絡：": "If you have questions about this privacy policy, data handling, or license notices, contact:",
    "最後更新：2026-05-23": "Last updated: 2026-05-23"
  });

  Object.assign(dictionaries.ja, {
    "本頁說明「二十一點算牌訓練器」如何處理使用者資料。這個 app 主要是離線練習、模擬統計與回放工具，不需要註冊帳號，也不以廣告或追蹤為目的收集個人資料。": "このページでは、「ブラックジャック カウントトレーナー」がユーザーデータをどのように扱うかを説明します。このアプリは主にオフライン練習、シミュレーション統計、リプレイのためのツールであり、アカウント登録は不要で、広告や追跡を目的として個人データを収集しません。",
    "資料收集": "データ収集",
    "本 app 目前不會主動收集、上傳或出售使用者的個人資料。App 不需要姓名、電子郵件、電話、位置資訊或社群帳號才能使用。": "このアプリは現在、ユーザーの個人データを能動的に収集、アップロード、販売しません。利用にあたり、氏名、メール、電話番号、位置情報、SNS アカウントは不要です。",
    "本機儲存資料": "端末内に保存されるデータ",
    "為了提供訓練、統計與回放功能，app 可能會在你的裝置本機保存以下資料：": "練習、統計、リプレイ機能を提供するため、アプリは以下のデータを端末内に保存する場合があります。",
    "遊戲與訓練設定，例如桌面規則、牌組數、穿透率、bet ramp、速度與顯示偏好。": "ゲームと練習の設定。例：テーブルルール、デッキ数、ペネトレーション、bet ramp、速度、表示設定。",
    "練習與模擬統計，例如 ROI、EV、SD、session 結果與訓練表現。": "練習とシミュレーション統計。例：ROI、EV、SD、session 結果、練習成績。",
    "Replay 回放資料，例如牌局流程、下注、玩家動作、結果與錯誤回饋。": "Replay データ。例：ハンドの流れ、ベット、プレイヤーの行動、結果、ミスのフィードバック。",
    "這些資料主要用於讓你在 app 內檢視自己的練習結果與過去決策。": "これらのデータは主に、アプリ内で練習結果や過去の判断を確認するために使われます。",
    "第三方服務": "第三者サービス",
    "本 app 不使用廣告 SDK，也不以行為追蹤為目的整合分析工具。若你是從 Google Play 下載或更新 app，Google Play 本身可能會依 Google 的政策處理商店、下載、付款或裝置相關資料。": "このアプリは広告 SDK を使用せず、行動追跡を目的とした分析ツールも組み込んでいません。Google Play からダウンロードまたは更新する場合、Google Play 自体が Google のポリシーに従ってストア、ダウンロード、支払い、端末関連データを処理する場合があります。",
    "資料刪除": "データ削除",
    "你可以透過裝置系統的 app 資料清除功能，或直接解除安裝 app，刪除保存在裝置上的本機資料。": "端末のアプリデータ削除機能、またはアプリのアンインストールによって、端末内に保存されたローカルデータを削除できます。",
    "未成年人與用途提醒": "未成年者と利用目的について",
    "本 app 是 blackjack 策略、算牌與機率訓練工具，不提供真錢賭博功能，也不鼓勵賭博。使用者仍應遵守所在地法律與平台規範。": "このアプリは blackjack の戦略、カウント、確率を練習するためのツールです。現金賭博機能は提供せず、賭博を推奨するものでもありません。ユーザーは居住地の法律とプラットフォーム規約を守る必要があります。",
    "第三方資產與授權": "第三者資産とライセンス",
    "本 app 使用或包含以下第三方資產與授權資訊：": "このアプリは以下の第三者資産およびライセンス情報を使用または含んでいます。",
    "Playing card face assets：Playing Cards Pack by Kenney，Creative Commons CC0 1.0 Universal。來源：https://kenney.nl/assets/playing-cards-pack。標示來源並非必要，但原作者歡迎 credit。": "Playing card face assets：Kenney による Playing Cards Pack、Creative Commons CC0 1.0 Universal。出典：https://kenney.nl/assets/playing-cards-pack。表示義務はありませんが、credit は歓迎されています。",
    "Card back asset：使用 ChatGPT / OpenAI image generation 建立的自訂牌背圖。這是為本 app 製作的原始資產，未刻意使用第三方品牌、logo、賭場標誌或商標。": "Card back asset：ChatGPT / OpenAI image generation で作成したカスタムカード裏面画像。このアプリのために作成されたオリジナル資産であり、第三者ブランド、ロゴ、カジノマーク、商標を意図的に使用していません。",
    "OpenAI output note：OpenAI 不主張使用者產出內容的著作權；使用者仍需自行確認產出資產不侵害第三方權利。來源：https://help.openai.com/en/articles/5008634。": "OpenAI output note：OpenAI はユーザーが生成した出力の著作権を主張しません。生成資産が第三者の権利を侵害しないことはユーザーが確認する責任があります。出典：https://help.openai.com/en/articles/5008634。",
    "聯絡方式": "連絡先",
    "如果你對隱私權政策、資料處理或授權資訊有疑問，可以聯絡：": "プライバシーポリシー、データ処理、ライセンス情報について質問がある場合は、以下までご連絡ください。",
    "最後更新：2026-05-23": "最終更新：2026-05-23"
  });

  function applyTranslations(language) {
    const dict = dictionaries[language];
    document.documentElement.lang = language || "zh-Hant";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      if (!node.__i18nOriginal) {
        node.__i18nOriginal = node.nodeValue;
      }
      const originalText = node.__i18nOriginal.trim();
      const translatedText = dict && dict[originalText] ? dict[originalText] : originalText;
      node.nodeValue = node.__i18nOriginal.replace(originalText, translatedText);
    });

    document.querySelectorAll("[alt], [title], [aria-label]").forEach((element) => {
      ["alt", "title", "aria-label"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) {
          return;
        }
        const key = `__i18nOriginal_${attribute}`;
        if (!element[key]) {
          element[key] = element.getAttribute(attribute);
        }
        const originalValue = element[key];
        element.setAttribute(attribute, dict && dict[originalValue] ? dict[originalValue] : originalValue);
      });
    });
  }

  function observeLanguageChanges() {
    let currentLanguage = document.documentElement.lang;
    setInterval(() => {
      const nextLanguage = readParentLanguage() || localStorage.getItem("blackjackLanguage");
      if (nextLanguage && nextLanguage !== currentLanguage) {
        currentLanguage = nextLanguage;
        applyTranslations(nextLanguage);
      }
    }, 500);
  }

  function readParentLanguage() {
    try {
      return window.parent && window.parent !== window
        ? window.parent.document.documentElement.lang
        : null;
    } catch (error) {
      return null;
    }
  }

  const parentLanguage = readParentLanguage();
  const savedLanguage = localStorage.getItem("blackjackLanguage") || parentLanguage || document.documentElement.lang;
  applyTranslations(savedLanguage);
  observeLanguageChanges();

  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "set-language") {
      localStorage.setItem("blackjackLanguage", event.data.language);
      applyTranslations(event.data.language);
    }
  });
})();
