/*
 * @Author: liu71
 * @Date: 2022-02-06 23:10:18
 * @Last Modified by: liu71
 * @Last Modified time: 2022-11-05 09:59:54
 */
import React from "react";
import Layout from "@/Layout";
import Home from "pages/Home"; 
import Login from "pages/Login";
import Page404 from "pages/Page404"; 

export const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      }, 
      { path: "*", element: <Page404 /> },
    ],
  },
];
