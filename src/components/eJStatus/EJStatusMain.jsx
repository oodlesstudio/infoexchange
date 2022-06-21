import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./eJStatus.css";
// Components
import SidebarMain from "../common/SidebarMain";
import EJStatusWindow from "./EJStatusWindow";

const EJStatusMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <EJStatusWindow />
      </div>
    </div>
  );
};

export default EJStatusMain;
