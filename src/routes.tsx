import Home from "./components/Home";
import Page from "./components/Page";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
const routes = [
  {
    path: "/",
    element: <Page></Page>,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
