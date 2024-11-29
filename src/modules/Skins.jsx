import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Skins = ({ categories, setCartItems, cartItems }) => {
  console.log(categories);
  const [wearPopup, setWearPopup] = useState(null);
  const [popups, setPopups] = useState([]);
  const [isWiggling, setIsWiggling] = useState(false);
  const { weaponType, weaponId } = useParams();
  const products = categories[weaponType][weaponId].products;

  const addPopup = (fullName) => {
    const id = Date.now();
    setPopups((prev) => [...prev, { id, fullName }]);
    setTimeout(() => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    }, 2000);
  };

  const addToCart = (product, wear) => {
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

      {/* Product Cards */}
      <div className="max-w-full flex flex-wrap lg:px-40 justify-center lg:justify-normal gap-4 p-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className={`border w-42 h-64 md:w-52 md:h-64 lg:h-80 lg:w-60 flex flex-col justify-center items-center text-center rounded relative p-2 py-6 `}
            >
              {product.stattrak && (
                <img
                  src="./stattrak.png"
                  className="w-10 lg:w-16 absolute top-2 right-2"
                />
              )}
              <div className="w-36 md:w-36 lg:w-44 flex flex-col justify-start items-center">
                <img
                  src={product.image}
                  alt=""
                  className={`w-36 md:w-36 lg:w-44 border-b-2 `}
                  style={{ borderColor: product.rarity.color }}
                />
                <div className="">{product.name}</div>
              </div>
              <div className="mt-2 flex gap-3 items-center justify-center relative">
                <button
                  className="border rounded-md p-1"
                  onClick={() => setWearPopup(product)}
                >
                  Add To Cart
                </button>
                {wearPopup === product && (
                  <div
                    className="absolute bottom-0 bg-black z-20 border flex flex-col max-h-52 md:max-h-80 md:w-40 overflow-auto select-none"
                    onMouseLeave={() => setWearPopup(null)}
                  >
                    {product.wears.map((wear) => {
                      return (
                        <div
                          key={wear.id}
                          className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer bg-black select-none"
                          onClick={() => {
                            addToCart(product, wear);
                            setWearPopup(null);
                          }}
                        >
                          {wear.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Popups */}
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

export default Skins;
