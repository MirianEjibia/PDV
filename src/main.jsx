import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Page1} from './components/Section1'
import {App} from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // children: [
    //     {
    //         index: true,
    //         element: <> Page 1 content </>
    //     }
    // ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);