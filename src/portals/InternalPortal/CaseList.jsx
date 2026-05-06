import { useNavigate } from "react-router-dom";
import cases from "../../data/cases.json";

export default function CaseList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">All Cases</h1>
        <button onClick={() => navigate("/internal")} className="text-sm text-blue-300 underline">
          ← Dashboard
        </button>
      </div>

      <div className="p-8">
        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">Case ID</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Agency</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium text-blue-700">{c.id}</td>
                  <td className="py-3 text-gray-600">{c.type}</td>
                  <td className="py-3 text-gray-600">{c.agency}</td>
                  <td className="py-3 text-gray-600">{c.date}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      c.status === "Resolved" ? "bg-green-100 text-green-700" :
                      c.status === "Under Investigation" ? "bg-yellow-100 text-yellow-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => navigate(`/internal/cases/${c.id}`)}
                      className="text-blue-600 text-xs underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}