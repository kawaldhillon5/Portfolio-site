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
import About from "./routes/about";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Projects />
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);