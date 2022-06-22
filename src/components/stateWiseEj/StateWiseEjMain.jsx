import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./stateWiseEj.css";
// Components
import SidebarMain from "../common/SidebarMain";
import StateWiseEjWindow from "./StateWiseEjWindow";

const StateWiseEjMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <StateWiseEjWindow />
      </div>
    </div>
  );
};

export default StateWiseEjMain;
