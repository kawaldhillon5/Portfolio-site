import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/erro-page";
import "./index.css";
import Root from "./routes/root";
import Projects from "./routes/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);