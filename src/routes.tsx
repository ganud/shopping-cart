import Home from "./components/Home";
import Page from "./components/Page";
import Shop from "./components/Shop";
const routes = [
  {
    path: "/",
    element: <Page render={<Home />}></Page>,
  },
  {
    path: "shop",
    element: (
      <>
        <Page render={<Shop />}></Page>
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
        <Page></Page>
      </>
    ),
  },
];

export default routes;
