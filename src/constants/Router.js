import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import EJStatus from "../pages/EJStatus";
import StateWiseEj from "../pages/StateWiseEj";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EJStatus />} />
        <Route path="/dashboard/ejs-status" element={<EJStatus />} />
        <Route path="/dashboard/statewise-ej-pulling-status" element={<StateWiseEj />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
