import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Book/CartPage";
import CheckOutPage from "../pages/Book/CheckOutPage";
import SingleBook from "../pages/Book/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/Book/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <div>Dashboard Home</div>
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <div>Add new book</div>
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <div>Edit books</div>
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <div>Manage books</div>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
