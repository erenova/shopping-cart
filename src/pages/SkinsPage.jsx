import { Outlet } from "react-router-dom";
import Navbar from "../modules/Navbar";

const SkinsPage = ({ navs, setPageState, setCartItems, cartItems }) => {
  return (
    <div>
      <Navbar navs={navs} setPageState={setPageState} />

      <Outlet context={{ navs, setCartItems, cartItems, setPageState }} />
    </div>
  );
};

export default SkinsPage;
