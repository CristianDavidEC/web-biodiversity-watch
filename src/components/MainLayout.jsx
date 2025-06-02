import React from "react";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="main-layout-row">
      <Sidebar />
      <div className="main-content-with-sidebar">{children}</div>
    </div>
  );
}

export default MainLayout;
