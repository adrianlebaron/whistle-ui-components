import React from "react";

import "./index.scss";

import SimpleNavbar from "../SimpleNavbar";
import DynamicSidebar from "../DynamicSidebar";

export default function NavComponents(props) {
  return (
    <div className="navComponents">
      <SimpleNavbar />
      <div className="sidebarAndPageContainer">
        <div className="sidebarContainer">
          <DynamicSidebar />
        </div>

        <div className="thePage">{props.children}</div>
      </div>
    </div>
  );
}
