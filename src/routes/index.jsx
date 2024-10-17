import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import SigIn from "../pages/SigIn";
import NotFound from "../pages/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/my-account", element: <MyAccount /> },
  { path: "/my-order", element: <MyOrder /> },
  { path: "/my-orders", element: <MyOrders /> },
  { path: "/my-orders/last", element: <MyOrder /> },
  { path: "/my-orders/:id", element: <MyOrder /> },
  { path: "/sign-in", element: <SigIn /> },
  { path: "/*", element: <NotFound /> },
];
