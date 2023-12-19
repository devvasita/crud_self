import { createBrowserRouter } from "react-router-dom";
import List from "../components/List";
import SingleList from "../components/SingleList";
import CreateList from "../components/Create";
import Edit from "../components/Edit";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <List />,
      },
      {
        path: "view/:id",
        element: <SingleList />,
      },
      {
        path: "create",
        element: <CreateList />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

export default routes;
