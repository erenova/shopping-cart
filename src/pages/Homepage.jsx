import { useState } from "react";
import { FaDice, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = ({ rawItems, cartItems, setCartItems }) => {
  function pickRandomItem() {
    const randomNumber = Math.floor(Math.random() * rawItems.length);
    const randomItem = rawItems[randomNumber];
    const randomWear =
      randomItem.wears[Math.floor(Math.random() * randomItem.wears.length)];
    return [randomItem, randomWear];
  }
  const [popups, setPopups] = useState([]);
  const [isWiggling, setIsWiggling] = useState(false);

  const addPopup = (fullName) => {
    const id = Date.now();
    setPopups((prev) => [...prev, { id, fullName }]);
    setTimeout(() => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    }, 2000);
  };
  const addToCart = (product, wear) => {
    console.log(product);
    setCartItems([
      ...cartItems,
      {
        id: product.id,
        name: product.name,
        img: product.image,
        stattrak: product.stattrak,
        rarityColor: product.rarity.color,
        wear: wear.name,
        fullName: `${product.name} (${wear.name})`,
      },
    ]);
    addPopup(`${product.name} (${wear.name})`);
    triggerWiggle();
  };

  const triggerWiggle = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 1000);
  };
  return (
    <div>
      <div className="text-center text-xl mt-3">
        Welcome to the cheapest skins market
      </div>
      {/* Cart Button */}
      <Link
        to="/cart"
        className="flex flex-col justify-center items-center bottom-8 right-8 fixed lg:bottom-auto lg:right-12 text-4xl  z-20 lg:top-8  "
      >
        <div className="text-white bg-black border rounded-full p-4">
          <FaShoppingCart />
        </div>
        <span
          className={` text-lg z-10 text-white ${
            isWiggling ? "animate-wiggle" : ""
          }`}
        >
          {cartItems.length}
        </span>
      </Link>
      <button
        onClick={() => {
          let pickedItem = pickRandomItem();
          addToCart(pickedItem[0], pickedItem[1]);
        }}
        className="border w-36 h-40 place-self-center lg:place-self-auto lg:ml-44 rounded-lg gap-6 p-2 flex flex-col justify-center items-center mt-6"
      >
        <FaDice className="text-4xl" />
        <div className="text-center">Pick a random skin</div>
      </button>
      <div className="fixed top-0 left-0 p-4 flex flex-col gap-2 max-w-60">
        {popups.map((popup) => (
          <div
            key={popup.id}
            className="bg-green-500 text-white p-4 rounded shadow-lg"
          >
            {popup.fullName} successfully added to cart!
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
