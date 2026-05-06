import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/report" element={<div>Report Page</div>} />
        <Route path="/track" element={<div>Track Page</div>} />
        <Route path="/internal" element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}