import { Link } from "react-router-dom";
import Navbar from "../modules/Navbar";

const Cart = ({ setPageState }) => {
  return (
    <div>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Link to="/">
        <img
          src="../../src/assets/cs2logo.png"
          className="w-20 lg:w-28 mt-2 ml-4 lg:mt-8 lg:ml-10"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Cart;
