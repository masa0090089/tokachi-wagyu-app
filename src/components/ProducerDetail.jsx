import React from "react";

function ProducerDetail({ selectedItem, handleBackToList }) {
  if (!selectedItem) return null;

  return (
    <div className="producer-box-style">
      <h2
        style={{ margin: "0 0 10px 0", color: "#81c784", fontSize: "1.6rem" }}
      >
        {selectedItem.producerName} のこだわりとストーリー
      </h2>
      <p
        style={{ color: "#a5d6a7", margin: "0 0 15px 0", fontSize: "0.95rem" }}
      >
        📍 牧場所在地: {selectedItem.producerAddress}
      </p>

      <img
        src={selectedItem.image}
        alt={selectedItem.producerName}
        className="detail-image"
      />

      <div
        style={{
          backgroundColor: "#121c17",
          padding: "20px",
          borderRadius: "8px",
          borderLeft: "4px solid #81c784",
          marginBottom: "20px",
          lineHeight: "1.7",
        }}
      >
        <h3
          style={{ margin: "0 0 10px 0", color: "#a5d6a7", fontSize: "1.1rem" }}
        >
          🌱 作り手の想い
        </h3>
        <p style={{ margin: 0, color: "#e8f5e9" }}>{selectedItem.story}</p>
      </div>

      <table className="info-table producer-info-table">
        <tbody>
          <tr>
            <th>生産者・牧場名</th>
            <td style={{ fontWeight: "bold", color: "#81c784" }}>
              {selectedItem.producerName}
            </td>
          </tr>
          <tr>
            <th>牧場所在地</th>
            <td>{selectedItem.producerAddress}</td>
          </tr>
          <tr>
            <th>対象メニュー</th>
            <td>
              {selectedItem.name}（提供: {selectedItem.shopName}）
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleBackToList} className="back-btn">
        ← 一覧へ戻る
      </button>
    </div>
  );
}

export default ProducerDetail;
