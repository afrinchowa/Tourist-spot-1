import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddItem from './Components/AddItem';
import UpdateItem from './Components/UpdateItem';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/spot')
  },
  {
    path: "/addItem",
    element: <AddItem></AddItem>,
  },
  {
    path: "/updateItem",
    element: <UpdateItem></UpdateItem>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
