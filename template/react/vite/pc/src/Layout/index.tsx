/*
 * @Author: liu71
 * @Date: 2022-01-29 19:17:12
 * @Last Modified by: liu71
 * @Last Modified time: 2022-11-05 10:00:50
 */

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-nav">
        <Link to="/">Home</Link> 
      </div>
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
