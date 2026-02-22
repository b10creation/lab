// =============================================
// アプリデータ
// ここを編集してアプリを追加・変更してください。
// ios / android / twitter が null の場合はボタンを非表示にします。
// =============================================
const apps = [
  {
    name: "CoMuse - アート・展示会情報アプリ",
    icon: "assets/icons/comuse.png",
    description: "日本国内の美術館や博物館等で開催されている様々なアートイベント、美術展、企画展、展示会を検索したり、管理できるアプリです。",
    ios: "https://apps.apple.com/jp/app/comuse-%E3%82%A2%E3%83%BC%E3%83%88-%E5%B1%95%E7%A4%BA%E4%BC%9A%E6%83%85%E5%A0%B1%E3%82%A2%E3%83%97%E3%83%AA/id6499095710",
    android: "https://play.google.com/store/apps/details?id=com.b10.comuse",
    twitter: "https://x.com/b10_comuse?s=21&t=ApUEjUbf3Wyn3KJg1g5eug"
  },
  {
    name: "ガチャ将棋",
    icon: "assets/icons/gacha-shogi.png",
    description: "ガチャで引いたランダムな駒で対戦する将棋。引いた駒の配置と王駒の選択によって戦略が無限に広がる新感覚将棋ゲーム。",
    ios: "https://apps.apple.com/jp/app/%E3%82%AC%E3%83%81%E3%83%A3%E5%B0%86%E6%A3%8B/id6443967891",
    android: "https://play.google.com/store/apps/details?id=com.b10.gachashogi",
    twitter: "https://x.com/gacha_shogi?s=21&t=ApUEjUbf3Wyn3KJg1g5eug"
  },
  {
    name: "ココミエ - AI性格診断アプリ",
    icon: "assets/icons/cocomie.png",
    description: "「自分のことを知り、大切な人との絆を深める」ココミエは、最新のAI技術と様々な性格診断を組み合わせた、新しい診断＆AI性格分析アプリです。",
    ios: "https://apps.apple.com/jp/app/%E3%82%B3%E3%82%B3%E3%83%9F%E3%82%A8-ai%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD%E3%82%A2%E3%83%97%E3%83%AA/id6756544610",
    android: "https://play.google.com/store/apps/details?id=com.b10.cocomie",
    twitter: null
  },
  {
    name: "どうぶつモノマネ選手権",
    icon: "assets/icons/animal-voice-challenge.png",
    description: "あなたの鳴き真似、何点？AIが本気で採点します！動物の鳴き声をマネして、AIが類似度を10,000点満点で採点するエンタメアプリです。",
    ios: "https://apps.apple.com/jp/app/%E3%81%A9%E3%81%86%E3%81%B6%E3%81%A4%E3%83%A2%E3%83%8E%E3%83%9E%E3%83%8D%E9%81%B8%E6%89%8B%E6%A8%A9/id6758698231",
    android: "https://play.google.com/store/apps/details?id=com.b10creation.animalvoicechallenge",
    twitter: null
  }
];

// =============================================
// SVG アイコン定義
// =============================================
const ICONS = {
  apple: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>`,
  google: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.954 11.616l2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.736-.079l8.33 8.404z"/>
    <path d="M16.415 15.078l3.074-1.729c.6-.336.929-.812.929-1.349 0-.537-.329-1.013-.929-1.349l-3.074-1.729-3.093 3.111 3.093 3.045z"/>
    <path d="M4.515 3.1C4.178 3.354 3.9 3.8 3.9 4.547v14.905c0 .747.278 1.193.615 1.447l8.385-8.385L4.515 3.1z"/>
    <path d="M12.952 12.384l-8.34 8.408c.51.31 1.105.26 1.735-.08l10.56-5.93-3.955-2.398z"/>
  </svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`
};

// =============================================
// カード生成
// =============================================
function createAppCard(app) {
  const card = document.createElement("article");
  card.className = "app-card";

  // アイコン
  if (app.icon) {
    const img = document.createElement("img");
    img.src = app.icon;
    img.alt = `${app.name} アイコン`;
    img.className = "app-icon";
    img.loading = "lazy";
    img.onerror = () => {
      img.replaceWith(createEmojiIcon(app.emoji || "📱"));
    };
    card.appendChild(img);
  } else {
    card.appendChild(createEmojiIcon(app.emoji || "📱"));
  }

  // アプリ名
  const nameEl = document.createElement("h2");
  nameEl.className = "app-name";
  nameEl.textContent = app.name;
  card.appendChild(nameEl);

  // 説明文
  if (app.description) {
    const descEl = document.createElement("p");
    descEl.className = "app-description";
    descEl.textContent = app.description;
    card.appendChild(descEl);
  }

  // ストアリンク
  const linksEl = document.createElement("div");
  linksEl.className = "store-links";

  if (app.ios) {
    linksEl.appendChild(createStoreBtn("ios", "App Store", ICONS.apple, app.ios));
  }
  if (app.android) {
    linksEl.appendChild(createStoreBtn("android", "Google Play", ICONS.google, app.android));
  }
  if (app.twitter) {
    linksEl.appendChild(createStoreBtn("x", "X", ICONS.x, app.twitter));
  }

  card.appendChild(linksEl);
  return card;
}

function createEmojiIcon(emoji) {
  const el = document.createElement("div");
  el.className = "app-icon-placeholder";
  el.textContent = emoji;
  el.setAttribute("aria-hidden", "true");
  return el;
}

function createStoreBtn(type, label, svgStr, href) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = `store-btn btn-${type}`;
  a.setAttribute("aria-label", `${label} で開く`);
  a.innerHTML = svgStr + `<span>${label}</span>`;
  return a;
}

// =============================================
// 描画
// =============================================
function renderApps() {
  const grid = document.getElementById("app-grid");
  if (!grid) return;

  if (apps.length === 0) {
    grid.innerHTML = '<p class="loading-text">アプリは近日公開予定です。</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  apps.forEach((app, index) => {
    const card = createAppCard(app);
    card.style.setProperty("--card-index", index);
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);

  setupScrollAnimation();
}

// =============================================
// スクロール入場アニメーション（Intersection Observer）
// =============================================
function setupScrollAnimation() {
  const cards = document.querySelectorAll(".app-card");

  // IntersectionObserver 非対応ブラウザは即表示
  if (!("IntersectionObserver" in window)) {
    cards.forEach(card => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach(card => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", renderApps);
