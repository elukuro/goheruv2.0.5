import Homepage from "../pages/homepage.tsx";
import ErrorPage from "../pages/error.tsx";
import ArticlePage from "../pages/devtips.tsx";
import DetailPage from "../pages/detail.tsx";

import App from "./../App.tsx";

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
        children: [
          {
            path: "/devtips/:title",
            element: <DetailPage />,
          },
          {
            path: "/devtips",
            element: <ArticlePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
