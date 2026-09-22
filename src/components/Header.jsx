import React from "react";

function Header({
  isAdmin,
  favoritesCount,
  currentView,
  setCurrentView,
  handleBackToList,
  handleLogout,
}) {
  return (
    <div className="header">
      <div>
        <h1 className="title" onClick={handleBackToList}>
          🥩 十勝和牛ナビ
        </h1>
        <p className="subtitle">〜 十勝の美味しいブランド牛・グルメを探す 〜</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {isAdmin && (
          <button
            onClick={() => setCurrentView("addForm")}
            className="fav-btn"
            style={{ backgroundColor: "#4caf50", color: "#fff" }}
          >
            ＋ 新規登録
          </button>
        )}

        <button
          onClick={() => setCurrentView("favorites")}
          className={`fav-btn ${currentView === "favorites" ? "active" : ""}`}
        >
          ❤️ お気に入り ({favoritesCount})
        </button>

        <button
          onClick={() => setCurrentView("contact")}
          className={`fav-btn ${currentView === "contact" ? "active" : ""}`}
          style={{ backgroundColor: "#2196f3", color: "#fff" }}
        >
          ✉️ お問い合わせ
        </button>

        {isAdmin ? (
          <button
            onClick={handleLogout}
            className="fav-btn"
            style={{ backgroundColor: "#555", color: "#fff" }}
          >
            🔓 ログアウト
          </button>
        ) : (
          <button
            onClick={() => setCurrentView("login")}
            className="fav-btn"
            style={{ backgroundColor: "#ff9800", color: "#fff" }}
          >
            🔒 ログイン
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
