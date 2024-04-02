import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./provider/AuthProvider";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        path: "/", 
        element: <Home></Home> 
      },
      {
         path: "/login", 
         element: <Login></Login>
      },
      {
         path: "/register", 
         element: <Register></Register> 
      },
      {
        path: "/orders", 
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
