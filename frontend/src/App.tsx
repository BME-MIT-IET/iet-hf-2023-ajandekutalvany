import React from "react";
import "./App.css";
import { PlantListPage } from "./pages/PlantList";
import { Route, Routes } from "react-router-dom";
import { PlantPage } from "./pages/Plant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlantListPage />} />
      <Route path="/plant/:id" element={<PlantPage />} />
    </Routes>
  );
}

export default App;
