// =============================================
// アプリデータ
// ここを編集してアプリを追加・変更してください。
// ios / android / twitter が null の場合はボタンを非表示にします。
// =============================================
const apps = [
  {
    name: "App One",
    icon: null, // "assets/icons/app1.png"
    emoji: "📱",
    description: "シンプルで使いやすいライフスタイルアプリ。日々のルーティンを記録・管理できます。",
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store/",
    twitter: "https://x.com/"
  },
  {
    name: "App Two",
    icon: null,
    emoji: "🎵",
    description: "音楽を楽しむための新しい体験を提供するアプリ。お気に入りの曲を発見しよう。",
    ios: "https://apps.apple.com/",
    android: null,
    twitter: "https://x.com/"
  },
  {
    name: "App Three",
    icon: null,
    emoji: "🗓️",
    description: "スケジュール管理をもっとスマートに。予定の共有や通知機能で毎日をサポート。",
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store/",
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
    <path d="M3.18 23.76c.3.17.64.24.99.21L15.45 12 11.79 8.34 3.18 23.76zM20.45 10.38c-.37-.2-3.53-1.96-3.93-2.18L5.17.38A1.09 1.09 0 0 0 3.79.22L15.42 11.87l5.03-1.49zM2.61.9A1.1 1.1 0 0 0 2.43 1.5v21c0 .22.06.42.18.59l.09.09 11.77-11.77v-.27L2.61.9zM16.25 15.24l-3.83-1.1L21.39 22.5c.29.26.67.35 1.04.23l.02-.01-6.2-7.48z"/>
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
