import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
  

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: ()=>fetch('/doctorsData.json'),
            HydrateFallback: LoadingSpinner
        },
        {
          path: '/myBookings',
          Component: MyBookings,
          loader: ()=>fetch('/doctorsData.json'),
          HydrateFallback: LoadingSpinner
        },
        {
          path: '/blogs',
          Component: Blogs,
          loader: ()=>fetch('/blogs.json'),
          HydrateFallback: LoadingSpinner
        },
        {
          path: '/blogDetails/:id',
          Component: BlogDetails,
          loader: ()=>fetch('/blogs.json'),
          HydrateFallback: LoadingSpinner
        },
        {
          path: '/doctorDetails/:id',
          loader: ()=>fetch('/doctorsData.json'),
          Component: DoctorDetails,
          HydrateFallback: LoadingSpinner
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/registration',
          Component: Registration
        }
    ]
  },
]);