import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens/home/HomeScreen";
// layouts
import { BaseLayout } from "./components/common/layout/BaseLayout";
import { SearchLayout } from "./components/common/layout/SearchLayout";
// screens
import { SearchScreen } from "./screens/search/SearchScreen";
import NotFoundScreen from "./screens/error/NotFoundScreen";
// auth pages
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { Forgetpassword } from "./screens/auth/Forgetpassword";
import { ResetPassword } from "./screens/auth/ResetPassword";
import { LoginWithOTP } from "./screens/auth/LoginWithOTP";
// dashboard
import { Dashboard } from "./screens/admin/dashboard/Dashboard";
import { AdminLayout } from "./components/common/layout/AdminLayout";
import Images from "./screens/admin/dashboard/Images";
import { Gallery } from "./screens/admin/dashboard/Gallery";
import { Account } from "./screens/admin/dashboard/Account";
import DetailsPage from "./screens/details/DetailsPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/search",
    element: <SearchLayout />,
    children: [
      {
        path: "/search",
        element: <SearchScreen />,
      },
      {
        path: "/search/1",
        element: <DetailsPage />
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />
      },
      {
        path: "/admin/images",
        element: <Images />
      },
      {
        path: "/admin/account",
        element: <Account />
      },
      {
        path: "/admin/gallery",
        element: <Gallery />
      }
    ]
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
    path: "/forgot-password",
    element: <Forgetpassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/login-with-otp",
    element: <LoginWithOTP />
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 100,   // Offset (in pixels) from the top of the screen
      easing: 'ease', // Easing function
      once: true,     // Only animate elements once
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
