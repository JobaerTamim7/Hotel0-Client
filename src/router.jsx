import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import { createBrowserRouter } from "react-router";
import PrivateRouteProvider from "./provider/PrivateRouteProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <div>Rooms List Page</div>,
      },
      {
        path: "rooms/:roomID",
        element: <div>Room Details Page</div>,
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRouteProvider>
            <div>My Bookings Page</div>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/special-offers",
    element: <div>Special Offers Page</div>,
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>,
  },
]);
