import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import HomePage from "@/pages/Home";
import Login from "@/pages/Login";
import MyCart from "@/pages/MyCart";
import Signup from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "add-product",
        element: <About />,
      },
      {
        path: "products",
        element: <About />,
      },
      {
        path: "orders",
        element: <About />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
