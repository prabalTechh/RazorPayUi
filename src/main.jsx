import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainComponent from "./pages/MainComponent";

const router = createBrowserRouter([
  {path:"/" , element:<App />},
  {
    path: "/acccount",
    element: <MainComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
