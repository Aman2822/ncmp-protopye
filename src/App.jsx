import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./portals/PublicPortal/HomePage";
import ReportForm from "./portals/PublicPortal/ReportForm";
import Submitted from "./portals/PublicPortal/Submitted";
import TrackCase from "./portals/PublicPortal/TrackCase";
import Dashboard from "./portals/InternalPortal/Dashboard";
import CaseList from "./portals/InternalPortal/CaseList";
import CaseDetail from "./portals/InternalPortal/CaseDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/submitted" element={<Submitted />} />
        <Route path="/track" element={<TrackCase />} />
        <Route path="/internal" element={<Dashboard />} />
        <Route path="/internal/cases" element={<CaseList />} />
        <Route path="/internal/cases/:id" element={<CaseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}