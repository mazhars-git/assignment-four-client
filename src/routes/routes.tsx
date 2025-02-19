import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "create-product",
        element: <About />,
      },
      {
        path: "order",
        element: <About />,
      },
    ],
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

export default router;
