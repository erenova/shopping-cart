import { useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const [popups, setPopups] = useState([]);
  const addPopup = (fullName) => {
    const id = Date.now();
    setPopups((prev) => [...prev, { id, fullName }]);
    setTimeout(() => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    }, 2000);
  };
  console.log(cartItems);
  return (
    <div className=" lg:w-3/4 lg:max-w-4xl flex flex-col   ">
      <div className="lg:pl-52 lg:w-3/4 lg:max-w-4xl sm:p-14 p-6 flex flex-col gap-4 max-h-[30rem] w-3/4 place-self-center lg:place-self-auto mt-8 overflow-auto ">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="flex border rounded p-4 relative">
              <div className="flex items-center gap-8 pl-8 ">
                <img src={cartItem.img} className="w-16" alt="" />
                <span style={{ color: cartItem.rarityColor }}>
                  {cartItem.fullName}
                </span>
              </div>
              {cartItem.stattrak && (
                <img
                  src="./stattrak.png"
                  className="w-10 lg:w-12 absolute left-1 top-1"
                />
              )}
            </div>
          );
        })}
      </div>
      {cartItems[0] && (
        <div className="flex items-center justify-center mt-6">
          <button
            className="ring-1 hover:ring-offset-2 ring-offset-green-500 ring-green-700 hover:bg-green-900 rounded p-2  text-white bg-green-600 transition-colors"
            onClick={() => {
              addPopup();
              setCartItems([]);
            }}
          >
            Checkout
          </button>
        </div>
      )}
      <div className="fixed top-0 left-0 p-4 flex flex-col gap-2 max-w-60">
        {popups.map((popup) => (
          <div
            key={popup.id}
            className="bg-green-500 text-white p-4 rounded shadow-lg"
          >
            Thank you for choosing us!
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
