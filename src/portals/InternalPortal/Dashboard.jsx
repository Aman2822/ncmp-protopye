import { useNavigate } from "react-router-dom";
import cases from "../../data/cases.json";

export default function Dashboard() {
  const navigate = useNavigate();

  const total = cases.length;
  const pending = cases.filter((c) => c.status === "Pending Review").length;
  const investigating = cases.filter((c) => c.status === "Under Investigation").length;
  const resolved = cases.filter((c) => c.status === "Resolved").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">NCMP — Internal Dashboard</h1>
          <p className="text-blue-300 text-sm">Cyber Crimes Investigation Division (CCID)</p>
        </div>
        <button onClick={() => navigate("/")} className="text-sm text-blue-300 underline">
          ← Public Portal
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Cases", value: total, color: "bg-blue-600" },
            { label: "Pending Review", value: pending, color: "bg-yellow-500" },
            { label: "Under Investigation", value: investigating, color: "bg-orange-500" },
            { label: "Resolved", value: resolved, color: "bg-green-600" },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.color} text-white rounded-xl p-4 text-center`}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Cases</h2>
            <button
              onClick={() => navigate("/internal/cases")}
              className="text-sm text-blue-600 underline"
            >
              View All →
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">Case ID</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Agency</th>
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