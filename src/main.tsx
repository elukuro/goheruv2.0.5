import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import router from "./config/router";

import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
