import App from "./App";
import Home from "./components/Home";
import Page from "./components/Page";
const routes = [
  {
    path: "/",
    element: <Page render={<Home />}></Page>,
  },
  {
    path: "shop",
    element: (
      <>
        <Page></Page>
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
