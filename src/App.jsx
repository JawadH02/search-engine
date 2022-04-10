import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Search } from "./pages/index";
import { InputProvider } from "./context/inputContext";

export const App = () => {
  return (
    <InputProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </InputProvider>
  );
};
