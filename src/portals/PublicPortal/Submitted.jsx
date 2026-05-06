import { useLocation, useNavigate } from "react-router-dom";

export default function Submitted() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { caseId, agencies } = state || {};

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-green-700 mb-2">Report Submitted</h2>
        <p className="text-gray-500 mb-6">Your case has been registered and routed to the right agency.</p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">Your Case ID</p>
          <p className="text-2xl font-bold text-blue-800">{caseId}</p>
          <p className="text-xs text-gray-400 mt-1">Save this ID to track your case</p>
        </div>

        <div className="text-left mb-6">
          <p className="text-sm font-semibold text-gray-600 mb-2">Routed to:</p>
          {agencies?.map((a) => (
            <div key={a.id} className="bg-gray-50 rounded-lg p-3 mb-2 text-sm text-gray-700">
              🏛️ {a.name}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/track")}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-3"
        >
          Track My Case
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}