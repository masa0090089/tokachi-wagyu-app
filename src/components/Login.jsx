function Login({
  loginId,
  setLoginId,
  loginPassword,
  setLoginPassword,
  handleLoginSubmit,
  handleBackToList,
}) {
  return (
    <div className="login-box">
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h2
          style={{ color: "#ff9e42", margin: "0 0 10px 0", fontSize: "1.8rem" }}
        >
          🔐 管理者ログイン
        </h2>
        <p style={{ color: "#aaa", fontSize: "0.95rem", margin: 0 }}>
          テスト用アカウント:
          <br />
          ID: <span style={{ color: "#ff6b6b" }}>admin</span> / パスワード:{" "}
          <span style={{ color: "#ff6b6b" }}>tokachi123</span>
        </p>
      </div>

      <form onSubmit={handleLoginSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            ログインID
          </label>
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="admin"
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
            パスワード
          </label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="パスワード"
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

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "14px",
              backgroundColor: "#ff9e42",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            ログイン
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

export default Login;
