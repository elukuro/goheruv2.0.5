import Homepage from "../pages/homepage.tsx";
import ErrorPage from "../pages/error.tsx";
import ArticlePage from "../pages/article.tsx";

import App from "./../app.tsx";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "devtips",
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;
