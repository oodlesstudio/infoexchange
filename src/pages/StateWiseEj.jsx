import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/stateWiseEj/stateWiseEj.css";
// Components
import Header from "../components/common/Header";
import StateWiseEjMain from "../components/stateWiseEj/StateWiseEjMain";
import Footer from "../components/common/Footer";

const StateWiseEj = () => {
  return (
    <div>
      <Header />
      <StateWiseEjMain />
      <Footer />
    </div>
  );
};

export default StateWiseEj;
