
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layout/MainLayOut';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

import Machineries from '../pages/products/Machineries';
import SingleProducts from '../pages/products/SingleProducts';
import CategoryProduct from '../components/categoryProducts/CategoryProduct';
import AdminDashboardLayout from '../layout/AdminDashboardLayout';

import Category from '../pages/dashboard/Category';
import AddProducts from '../components/dashboard/AddProducts';
import ContactUs from '../pages/contactUs/ContactUs';


 export const router = createBrowserRouter([
  {  path:'/',
    element: <MainLayOut></MainLayOut>,

    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about-us',
            element:<About></About>
        },
       
        {
            path:'/all-machinery',
            element:<Machineries></Machineries>
        },
        {
            path:'/products/:categorySlug',
            element:<CategoryProduct></CategoryProduct>,
            loader:  async ({params}) => await fetch(`https://nppinternational-server.vercel.app/allcategories/${params.categorySlug}`)     
        },
        {
            path:`/products/singleProduct/:id`,
            element:<SingleProducts></SingleProducts>,
            loader:  async ({params}) => await fetch(`https://nppinternational-server.vercel.app/products/${params.id}`)     
        },
        {
            path:'/contact-us',
            element:<ContactUs></ContactUs>
        },
    ]

},{
    path:'/dashboard',
    element: <AdminDashboardLayout></AdminDashboardLayout>,
    children:[
        {
            path:"/dashboard/addCategory",
            element:<Category></Category>
        },
        {
            path:"/dashboard/addProducts",
            element:<AddProducts></AddProducts>
        },
    ]
}

 ])