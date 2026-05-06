import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cases from "../../data/cases.json";

export default function TrackCase() {
  const [caseId, setCaseId] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const found = cases.find((c) => c.id === caseId.trim());
    if (found) { setResult(found); setNotFound(false); }
    else { setResult(null); setNotFound(true); }
  };

  const statusColor = {
    "Under Investigation": "bg-yellow-100 text-yellow-800",
    "Pending Review": "bg-blue-100 text-blue-800",
    "Resolved": "bg-green-100 text-green-800",
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Track Your Case</h2>
        <p className="text-gray-500 text-sm mb-6">Enter your case ID to check the current status.</p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="e.g. NCMP-2024-0001"
            className="flex-1 border rounded-lg p-3 text-gray-700"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {notFound && <p className="text-red-500 text-sm mb-4">No case found with that ID.</p>}

        {result && (
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <p className="font-bold text-blue-800">{result.id}</p>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[result.status]}`}>
                {result.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {result.type}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Agency:</strong> {result.agency}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {result.date}</p>
            <p className="text-sm text-gray-600"><strong>Description:</strong> {result.description}</p>
          </div>
        )}

        <button onClick={() => navigate("/")} className="mt-6 text-sm text-blue-600 underline">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}