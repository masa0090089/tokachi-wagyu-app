function Contact({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactMessage,
  setContactMessage,
  handleContactSubmit,
  handleBackToList,
}) {
  return (
    <div className="contact-box">
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{ color: "#ff9e42", margin: "0 0 10px 0", fontSize: "1.8rem" }}
        >
          📬 お問い合わせ・掲載リクエスト
        </h2>
        <p
          style={{
            color: "#aaa",
            fontSize: "0.95rem",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          「こんなお店を掲載してほしい」「メニューを追加してほしい」などのご要望はこちらから送信してください。
        </p>
      </div>

      <form onSubmit={handleContactSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            お名前（必須）
          </label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="例: 十勝 太郎"
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            メールアドレス
          </label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="例: sample@tokachi.com"
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            お問い合わせ内容・掲載希望（必須）
          </label>
          <textarea
            rows="4"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            placeholder="例: 〇〇町の焼肉店「△△」を新しく掲載してほしいです。"
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #444",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontSize: "1rem",
              resize: "vertical",
            }}
          ></textarea>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "14px",
              backgroundColor: "#ff6b6b",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            送信する
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
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            戻る
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
