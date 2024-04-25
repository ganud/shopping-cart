import App from "./App";
import Header from "./components/Header";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: (
      <>
        <Header></Header>
        <div>hello</div>
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
        <Header></Header>
        cart stuff here
      </>
    ),
  },
];

export default routes;
