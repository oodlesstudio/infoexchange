import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import EJStatus from "../pages/EJStatus";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EJStatus />} />
        <Route path="/dashboard/ejs-status" element={<EJStatus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
