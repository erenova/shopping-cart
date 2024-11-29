import Cart from "../pages/Cart.jsx";
import Error from "../routes/Error.jsx";
import App from "../App.jsx";
import Homepage from "../pages/Homepage.jsx";
import Skins from "../modules/Skins.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "skins/:weaponType/:weaponId", element: <Skins /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];
export default routes;
