import { useNavigate, useParams } from "react-router-dom";
import cases from "../../data/cases.json";

export default function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const c = cases.find((x) => x.id === id);

  if (!c) return <div className="p-8 text-red-500">Case not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Case Detail — {c.id}</h1>
        <button onClick={() => navigate("/internal/cases")} className="text-sm text-blue-300 underline">
          ← Back to Cases
        </button>
      </div>

      <div className="p-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">{c.id}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              c.status === "Resolved" ? "bg-green-100 text-green-700" :
              c.status === "Under Investigation" ? "bg-yellow-100 text-yellow-700" :
              "bg-blue-100 text-blue-700"
            }`}>
              {c.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {c.type}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Agency:</strong> {c.agency}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Date:</strong> {c.date}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Anonymous:</strong> {c.anonymous ? "Yes" : "No"}</p>
          {c.victimName && <p className="text-sm text-gray-600 mb-2"><strong>Victim:</strong> {c.victimName}</p>}
          <p className="text-sm text-gray-600 mb-4"><strong>Description:</strong> {c.description}</p>

          {c.notes && (
            <div className="bg-yellow-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-yellow-800"><strong>Officer Notes:</strong> {c.notes}</p>
            </div>
          )}

          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Evidence Files:</p>
            {c.evidence.map((e) => (
              <div key={e} className="bg-gray-50 rounded p-2 text-sm text-gray-600 mb-1">
                📎 {e}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
              Mark Resolved
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Request Inter-Agency Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}