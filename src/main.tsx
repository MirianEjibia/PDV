import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Section1 } from './scenes/Section1/Section1';
import { PDVTabs } from './scenes/PDVTabs/PDVTabs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      // {
      //   index: true,
      //   element: <> some content el</>
      // },
      {
          index: true,
          element: <Section1/>
      },
      {
        path: 'pdvTabs',
        element: <PDVTabs/>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);