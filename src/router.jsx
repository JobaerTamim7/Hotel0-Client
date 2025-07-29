import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import { createBrowserRouter } from "react-router";
import PrivateRouteProvider from "./provider/PrivateRouteProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import RoomPage from "./pages/RoomPage";
import RoomDetails from "./pages/RoomDetails";
import MyRoomPage from "./pages/MyRooms";
import Error from "./pages/Error";
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
        element: <RoomPage />,
      },
      {
        path: "rooms/:roomID",
        element: <RoomDetails />,
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRouteProvider>
            <MyRoomPage />
          </PrivateRouteProvider>
        ),
      },
      {
        path: "*",
        element: <Error />,
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
    path: "*",
    element: <Error />,
  },
]);
