import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          National Case Management Platform
        </h1>
        <p className="text-gray-600 mb-2">Sri Lanka — SGBV & TFGBV Reporting System</p>
        <p className="text-gray-500 mb-10 text-sm">
          A safe, secure, and confidential platform to report incidents and track your case.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Report an Incident</h2>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Report a case of SGBV or online abuse. You can stay anonymous.
            </p>
            <button
              onClick={() => navigate("/report")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Report Now
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Track Your Case</h2>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Already reported? Enter your case ID to check the status.
            </p>
            <button
              onClick={() => navigate("/track")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 w-full"
            >
              Track Case
            </button>
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate("/internal")}
            className="text-sm text-gray-400 underline hover:text-gray-600"
          >
            Agency Officer Login →
          </button>
        </div>
      </div>
    </div>
  );
}