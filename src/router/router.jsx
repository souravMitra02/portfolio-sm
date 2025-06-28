import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Banner from "../components/Banner";
export const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            { index: true, element: <Home></Home> },
    ]
  },
]);