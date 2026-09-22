function ShopDetail({
  selectedItem,
  favorites,
  toggleFavorite,
  handleBackToList,
}) {
  if (!selectedItem) return null;

  return (
    <div className="detail-box-style">
      {/* 💡 この内側のdivで全体を包み、CSSで中央に寄せています */}
      <div className="detail-content-inner">
        {/* ヘッダー（タイトルとお気に入りボタン） */}
        <div className="detail-header">
          <h2 style={{ margin: 0, color: "#ff9e42", fontSize: "1.6rem" }}>
            {selectedItem.name}
          </h2>
          <button
            onClick={(e) => toggleFavorite(selectedItem.id, e)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {favorites.includes(selectedItem.id) ? "❤️ 解除" : "🤍 お気に入り"}
          </button>
        </div>

        {/* メイン写真 */}
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="detail-image"
        />

        {/* 情報テーブル */}
        <table className="info-table">
          <tbody>
            <tr>
              <th>メニュー名</th>
              <td>{selectedItem.name}</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>{selectedItem.price}</td>
            </tr>
            <tr>
              <th>食べるお店</th>
              <td style={{ fontWeight: "bold", color: "#ff9e42" }}>
                {selectedItem.shopName}
              </td>
            </tr>
            <tr>
              <th>店舗住所</th>
              <td>{selectedItem.shopAddress}</td>
            </tr>
            <tr>
              <th>エリア</th>
              <td>{selectedItem.area}</td>
            </tr>
          </tbody>
        </table>

        {/* メニューのこだわり */}
        <div style={{ marginBottom: "25px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              color: "#ff6b6b",
              marginBottom: "10px",
            }}
          >
            📝 メニューのこだわり
          </h3>
          <p
            style={{
              color: "#ccc",
              lineHeight: "1.6",
              margin: 0,
              backgroundColor: "#1e1e1e",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            {selectedItem.description}
          </p>
        </div>

        {/* マップ */}
        <div className="map-container">
          <h3
            style={{
              fontSize: "1rem",
              color: "#ff9e42",
              margin: "0 0 10px 0",
              padding: "15px 15px 0 15px",
            }}
          >
            🗺️ 店舗のアクセスマップ
          </h3>
          <iframe
            title="google-map"
            width="100%"
            height="250"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedItem.shopName + " " + selectedItem.shopAddress)}&output=embed`}
          ></iframe>
        </div>

        {/* 戻るボタン */}
        <button onClick={handleBackToList} className="back-btn">
          ← 一覧へ戻る
        </button>
      </div>
    </div>
  );
}

export default ShopDetail;
