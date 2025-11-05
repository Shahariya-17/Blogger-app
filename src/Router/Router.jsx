import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Service from "../Pages/Home/Service/Service";
import Contact from "../Pages/Home/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: '/services',
          Component: Service
        },
        {
          path: '/contact',
          Component: Contact
        }
    ]
  },
]);