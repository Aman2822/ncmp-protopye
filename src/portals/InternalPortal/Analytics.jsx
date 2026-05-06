import { useNavigate } from "react-router-dom";
import cases from "../../data/cases.json";

export default function Analytics() {
  const navigate = useNavigate();

  const agencyCounts = cases.reduce((acc, c) => {
    acc[c.agency] = (acc[c.agency] || 0) + 1;
    return acc;
  }, {});

  const typeCounts = cases.reduce((acc, c) => {
    acc[c.type] = (acc[c.type] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(agencyCounts));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Analytics</h1>
        <button onClick={() => navigate("/internal")} className="text-sm text-blue-300 underline">
          ← Dashboard
        </button>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Cases by Agency</h2>
          {Object.entries(agencyCounts).map(([agency, count]) => (
            <div key={agency} className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{agency}</span>
                <span>{count}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Cases by Type</h2>
          {Object.entries(typeCounts).map(([type, count]) => (
            <div key={type} className="flex justify-between items-center py-2 border-b text-sm">
              <span className="text-gray-600">{type}</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}