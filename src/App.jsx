import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./portals/PublicPortal/HomePage";
import ReportForm from "./portals/PublicPortal/ReportForm";
import Submitted from "./portals/PublicPortal/Submitted";
import TrackCase from "./portals/PublicPortal/TrackCase";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/submitted" element={<Submitted />} />
        <Route path="/track" element={<TrackCase />} />
        <Route path="/internal" element={<div>Dashboard coming soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}