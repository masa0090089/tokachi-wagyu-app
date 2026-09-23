import { useState } from "react";

function ShopList({
  currentView,
  areas,
  selectedArea,
  setSelectedArea,
  filteredList,
  favorites,
  toggleFavorite,
  handleOpenShopDetail,
  handleOpenProducerDetail,
  handleBackToList,
  isAdmin,
  handleDelete,
}) {
  const [selectedDate, setSelectedDate] = useState("2026-06-01");

  return (
    <div>
      {/* お気に入り一覧のときのタイトル */}
      {currentView === "favorites" && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#ff6b6b", margin: 0 }}>❤️ お気に入り一覧</h2>

          <button onClick={handleBackToList} className="back-btn">
            一覧に戻る
          </button>
        </div>
      )}

      {/* 左右レイアウト */}
      <div className="main-layout">
        {/* =========================
            左側：サイドバー
        ========================== */}
        <div className="sidebar">
          <h3 className="sidebar-title">📅 予約・特売日カレンダー</h3>

          <p className="sidebar-desc">
            日付を選択すると、その日のイベントや特売情報を確認できます。
          </p>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="sidebar-input"
          />

          <div className="sidebar-info-box">
            <p
              style={{
                fontSize: "0.8rem",
                color: "#ff9e42",
                margin: "0 0 5px 0",
                fontWeight: "bold",
              }}
            >
              📌 {selectedDate} の情報
            </p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#ccc",
                margin: 0,
              }}
            >
              {selectedDate === "2026-06-01"
                ? "十勝若牛の特売イベント開催！全店で使えるクーポン配布中。"
                : "通常営業日：各店舗へのお問い合わせ受付中。"}
            </p>
          </div>
        </div>

        {/* =========================
            右側：メインエリア
        ========================== */}
        <div className="content-area">
          {/* エリアボタン */}
          {currentView === "list" && (
            <div className="area-filters">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`area-btn ${
                    selectedArea === area ? "active" : ""
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          )}

          {/* =========================
              カードグリッド
          ========================== */}
          <div className="card-grid">
            {filteredList.length === 0 ? (
              <p
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  color: "#888",
                  padding: "40px 0",
                }}
              >
                該当する十勝和牛が見つかりませんでした。
              </p>
            ) : (
              filteredList.map((item) => {
                // デバッグ用
                console.log("アイテムデータ:", item);

                return (
                  <div
                    key={item.id}
                    onClick={(e) => handleOpenShopDetail(item.id, e)}
                    className="card"
                  >
                    {/* =========================
                        商品画像
                    ========================== */}
                    <div style={{ position: "relative" }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-image"
                      />

                      {/* お気に入りボタン */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id, e);
                        }}
                        className="heart-btn"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          background: "rgba(0,0,0,0.6)",
                          borderRadius: "50%",
                          width: "34px",
                          height: "34px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {favorites.includes(item.id) ? "❤️" : "🤍"}
                      </button>
                    </div>

                    {/* =========================
                        カード本体
                    ========================== */}
                    <div className="card-body">
                      {/* 店舗名 */}
                      <p className="card-info">📍 {item.shopName}</p>

                      {/* 商品名 */}
                      <h3 className="card-title">{item.name}</h3>

                      {/* 価格 */}
                      <p className="card-price">{item.price}</p>

                      {/* 商品説明 */}
                      <p className="card-desc">{item.description}</p>

                      {/* =========================
                          アクションボタン
                      ========================== */}
                      <div className="card-action-btns">
                        {/* 店舗詳細 */}
                        <button
                          onClick={(e) => handleOpenShopDetail(item.id, e)}
                          className="to-shop-btn"
                        >
                          店舗詳細
                        </button>

                        {/* 生産者情報 */}
                        <button
                          onClick={(e) => handleOpenProducerDetail(item.id, e)}
                          className="to-producer-btn"
                        >
                          生産者情報
                        </button>

                        {/* =========================
                            管理者だけ削除ボタンを表示
                        ========================== */}
                        {isAdmin && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(item.id, e);
                            }}
                            style={{
                              backgroundColor: "#ff4d4d",
                              color: "#fff",
                              border: "none",
                              borderRadius: "8px",
                              padding: "12px",
                              cursor: "pointer",
                              fontSize: "1rem",
                              fontWeight: "bold",
                              flex: "1",
                            }}
                          >
                            🗑️ 削除
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopList;
