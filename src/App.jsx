import { useState, useEffect } from "react"; // 1. useEffect を追加インポート
import "./App.css";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
import ProducerDetail from "./components/ProducerDetail";
import Login from "./components/Login";
import AddForm from "./components/AddForm";
import Contact from "./components/Contact";

function App() {
  const [currentView, setCurrentView] = useState("list");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedArea, setSelectedArea] = useState("すべて");
  const [favorites, setFavorites] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // 2. 初期データをモックではなく、空の配列に変更し、APIから取得するようにします！
  const [wagyuList, setWagyuList] = useState([]);

  // 3. アプリが起動したときにSpring Bootから店舗データを取得する処理
  useEffect(() => {
    fetch("http://localhost:8080/shops")
      .then((response) => response.json())
      .then((data) => {
        setWagyuList(data);
      })
      .catch((error) => console.error("データ取得エラー:", error));
  }, []);

  const [formName, setFormName] = useState("");
  const [formArea, setFormArea] = useState("帯広市");
  const [formPrice, setFormPrice] = useState("");
  const [formShopName, setFormShopName] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const areas = ["すべて", "帯広市", "音更町", "幕別町", "士幌町"];

  const handleOpenShopDetail = (id, e) => {
    e.stopPropagation();
    setSelectedId(id);
    setCurrentView("shopDetail");
  };

  const handleOpenProducerDetail = (id, e) => {
    e.stopPropagation();
    setSelectedId(id);
    setCurrentView("producerDetail");
  };

  const handleBackToList = () => {
    setSelectedId(null);
    setCurrentView("list");
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginId === "admin" && loginPassword === "tokachi123") {
      setIsAdmin(true);
      alert("管理者としてログインしました！");
      setCurrentView("list");
    } else {
      alert(
        "IDまたはパスワードが間違っています。\n(テスト用 ID: admin / パスワード: tokachi123)",
      );
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    alert("ログアウトしました。");
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formPrice || !formShopName) {
      alert("メニュー名、価格、店舗名は必須です！");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: formName,
      area: formArea,
      price: formPrice.includes("円") ? formPrice : formPrice + "円",
      description: formDescription || "美味しい十勝和牛のメニューです。",
      shopName: formShopName,
      shopAddress: `北海道${formArea}（詳細住所未登録）`,
      producerName: "こだわり生産者",
      producerAddress: `北海道${formArea}`,
      story: "丹精込めて育てられた自慢の食材です。",
      image: "/beefsteak.jpg",
      mapQuery: `北海道${formArea}`,
    };

    // バックエンド（Spring Boot）へPOSTリクエストを送信
    fetch("http://localhost:8080/shops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("登録に失敗しました");
        }
        return response.json();
      })
      .then((savedItem) => {
        // サーバーから返ってきたデータ（ID付きなど）をリストに追加
        setWagyuList([savedItem, ...wagyuList]);
        alert("新しいメニューを登録しました！");

        // フォームをリセットして一覧画面へ戻る
        setFormName("");
        setFormPrice("");
        setFormShopName("");
        setFormDescription("");
        setCurrentView("list");
      })
      .catch((error) => {
        console.error("登録エラー:", error);
        alert("データの登録に失敗しました。");
      });
  };

  // データを削除する処理
  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (!window.confirm("本当にこのメニューを削除しますか？")) {
      return;
    }

    fetch(`http://localhost:8080/shops/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("削除に失敗しました");
        }
        setWagyuList(wagyuList.filter((item) => item.id !== id));
        alert("メニューを削除しました！");
      })
      .catch((error) => {
        console.error("削除エラー:", error);
        alert("データの削除に失敗しました。");
      });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactMessage) {
      alert("お名前とお問い合わせ内容は必須です。");
      return;
    }
    alert(
      `お問い合わせを受け付けました。ありがとうございます！\n(内容: ${contactMessage})`,
    );
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setCurrentView("list");
  };

  const selectedItem = wagyuList.find((item) => item.id === selectedId);

  const filteredList = wagyuList.filter((item) => {
    if (currentView === "favorites") {
      return favorites.includes(item.id);
    }
    if (selectedArea === "すべて") return true;
    return item.area === selectedArea;
  });

  return (
    <div className="app-container">
      <Header
        isAdmin={isAdmin}
        favoritesCount={favorites.length}
        currentView={currentView}
        setCurrentView={setCurrentView}
        handleBackToList={handleBackToList}
        handleLogout={handleLogout}
      />

      {(currentView === "list" || currentView === "favorites") && (
        <ShopList
          currentView={currentView}
          areas={areas}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          filteredList={filteredList}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleOpenShopDetail={handleOpenShopDetail}
          handleOpenProducerDetail={handleOpenProducerDetail}
          handleBackToList={handleBackToList}
          isAdmin={isAdmin}
          handleDelete={handleDelete}
        />
      )}

      {currentView === "login" && (
        <Login
          loginId={loginId}
          setLoginId={setLoginId}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          handleLoginSubmit={handleLoginSubmit}
          handleBackToList={handleBackToList}
        />
      )}

      {currentView === "contact" && (
        <Contact
          contactName={contactName}
          setContactName={setContactName}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
          contactMessage={contactMessage}
          setContactMessage={setContactMessage}
          handleContactSubmit={handleContactSubmit}
          handleBackToList={handleBackToList}
        />
      )}

      {currentView === "addForm" && isAdmin && (
        <AddForm
          formName={formName}
          setFormName={setFormName}
          formArea={formArea}
          setFormArea={setFormArea}
          formPrice={formPrice}
          setFormPrice={setFormPrice}
          formShopName={formShopName}
          setFormShopName={setFormShopName}
          formDescription={formDescription}
          setFormDescription={setFormDescription}
          areas={areas}
          handleAddSubmit={handleAddSubmit}
          handleBackToList={handleBackToList}
        />
      )}

      {currentView === "shopDetail" && selectedItem && (
        <ShopDetail
          selectedItem={selectedItem}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          handleBackToList={handleBackToList}
        />
      )}

      {currentView === "producerDetail" && selectedItem && (
        <ProducerDetail
          selectedItem={selectedItem}
          handleBackToList={handleBackToList}
        />
      )}
    </div>
  );
}

export default App;
