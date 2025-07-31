// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PurchasePage from "./PurchasePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/purchase" element={<PurchasePage />} />
    </Routes>
  );
}
