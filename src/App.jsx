import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./portals/PublicPortal/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<div>Report Page</div>} />
        <Route path="/track" element={<div>Track Page</div>} />
        <Route path="/internal" element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}