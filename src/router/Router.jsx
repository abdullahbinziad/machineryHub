import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

import Machineries from "../pages/products/Machineries";
import SingleProducts from "../pages/products/SingleProducts";
import CategoryProduct from "../components/categoryProducts/CategoryProduct";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";

import Category from "../pages/dashboard/Category";
import AddProducts from "../components/dashboard/AddProducts";
import ContactUs from "../pages/contactUs/ContactUs";
import AddActivity from "../components/dashboard/AddActivity";
import Activity from "../components/dashboard/Activity";
import ActivityDetails from "../pages/ActivityDetails/ActivityDetails";
import Login from "../pages/Login/Login";
import AuthProvider from "../Providers/AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },

      {
        path: "/all-machinery",
        element: <Machineries></Machineries>,
      },
      {
        path: "/products/:categorySlug",
        element: <CategoryProduct></CategoryProduct>,
        loader: async ({ params }) =>
          await fetch(
            `https://nppinternational-server.vercel.app/allcategories/${params.categorySlug}`
          ),
      },
      {
        path: `/products/singleProduct/:id`,
        element: <SingleProducts></SingleProducts>,
        loader: async ({ params }) =>
          await fetch(
            `https://nppinternational-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "activity/:id",
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:3000/activity/${params.id}`),
        element: <ActivityDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <AdminDashboardLayout />
        </PrivateRoute>
      </AuthProvider>
    ),
    children: [
      {
        path: "addCategory",
        element: <Category></Category>,
      },
      {
        path: "addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "add-new-activity",
        element: <AddActivity />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
]);
