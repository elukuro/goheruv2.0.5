import Homepage from "../pages/homepage.tsx";
import ErrorPage from "../pages/error.tsx";
import ArticlePage from "../pages/devtips.tsx";
import DetailPage from "../pages/detail.tsx";
import RemainderPage from "../pages/remainder.tsx";

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
        children: [
          {
            path: "/devtips/:title",
            element: <DetailPage />,
          },
          {
            path: "/devtips",
            element: <ArticlePage />,
          },
          {
            path: "/remainder",
            element: <RemainderPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
