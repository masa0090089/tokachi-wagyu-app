function AddForm({
  formName,
  setFormName,
  formArea,
  setFormArea,
  formPrice,
  setFormPrice,
  formShopName,
  setFormShopName,
  formDescription,
  setFormDescription,
  areas,
  handleAddSubmit,
  handleBackToList,
}) {
  return (
    <div className="add-form-box">
      <h2
        style={{
          color: "#4caf50",
          marginTop: 0,
          marginBottom: "20px",
          fontSize: "1.8rem",
        }}
      >
        📝 新しい十勝和牛メニューを登録（管理者モード）
      </h2>

      <form
        onSubmit={handleAddSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            メニュー名（必須）
          </label>
          <input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder="例: 十勝特選サーロイン"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            エリア
          </label>
          <select
            value={formArea}
            onChange={(e) => setFormArea(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          >
            {areas
              .filter((a) => a !== "すべて")
              .map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            価格（必須）
          </label>
          <input
            type="text"
            value={formPrice}
            onChange={(e) => setFormPrice(e.target.value)}
            placeholder="例: 4,000円"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            店舗名（必須）
          </label>
          <input
            type="text"
            value={formShopName}
            onChange={(e) => setFormShopName(e.target.value)}
            placeholder="例: ステーキハウス十勝"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            メニューの説明
          </label>
          <textarea
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            placeholder="お肉の特徴や味わいを入力してください"
            rows="4"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              boxSizing: "border-box",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "14px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            登録する
          </button>
          <button
            type="button"
            onClick={handleBackToList}
            style={{
              padding: "14px 24px",
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
