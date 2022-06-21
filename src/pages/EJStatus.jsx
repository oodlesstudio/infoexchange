import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/eJStatus/eJStatus.css";
// Components
import Header from "../components/common/Header";
import EJStatusMain from "../components/eJStatus/EJStatusMain";
import Footer from "../components/common/Footer";

const EJStatus = () => {
  return (
    <div>
      <Header />
      <EJStatusMain />
      <Footer />
    </div>
  );
};

export default EJStatus;
