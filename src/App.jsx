import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Loading from "./modules/Loading";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Skins from "./modules/Skins";
import Navbar from "./modules/Navbar";
import Error from "./routes/Error";

export default function App() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://bymykel.github.io/CSGO-API/api/en/skins.json",
        );
        const data = await response.json();

        const categorizedData = {};

        data.forEach((item) => {
          let category = item.category.name;
          const weaponId = { id: item.weapon.id, name: item.weapon.name };
          if (weaponId.id.includes("sfui")) {
            return;
          }
          if (item.category.name === null) {
            category = "Gear";
          }

          if (!categorizedData[category]) {
            categorizedData[category] = {};
          }
          if (!categorizedData[category][weaponId.id]) {
            categorizedData[category][weaponId.id] = {
              name: weaponId.name,
              products: [],
            };
          }

          categorizedData[category][weaponId.id].products.push(item);
        });
        setCategories({ ...categorizedData });
        setLoading(false);
        console.log(categorizedData);
        console.log(cartItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-white">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar navs={categories} />

      <Routes>
        <Route
          path="skins/:weaponType/:weaponId"
          element={
            <Skins
              categories={categories}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </div>
  );
}
