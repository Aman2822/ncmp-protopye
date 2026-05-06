import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routeCase, generateCaseId } from "../../utils/routingEngine";

export default function ReportForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [anonymous, setAnonymous] = useState(false);
  const [form, setForm] = useState({
    incidentType: "",
    description: "",
    date: "",
    name: "",
    contact: "",
    evidence: null,
  });

  const incidentTypes = [
    { value: "TFGBV", label: "Technology-Facilitated Gender-Based Violence" },
    { value: "online_harassment", label: "Online Harassment" },
    { value: "non_consensual_images", label: "Non-Consensual Images/Videos" },
    { value: "child_abuse", label: "Child Abuse" },
    { value: "child_exploitation", label: "Child Exploitation" },
    { value: "domestic_violence", label: "Domestic Violence" },
    { value: "SGBV", label: "Sexual & Gender-Based Violence" },
    { value: "cybersecurity", label: "Cybersecurity Incident" },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    const caseId = generateCaseId();
    const agencies = routeCase(form.incidentType);
    navigate("/submitted", { state: { caseId, agencies } });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8">
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 mx-1 rounded-full ${s <= step ? "bg-blue-600" : "bg-gray-200"}`}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Step 1: Incident Type</h2>
            <label className="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <input type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
              Report anonymously
            </label>
            <select
              className="w-full border rounded-lg p-3 text-gray-700 mb-4"
              value={form.incidentType}
              onChange={(e) => setForm({ ...form, incidentType: e.target.value })}
            >
              <option value="">-- Select incident type --</option>
              {incidentTypes.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <button
              onClick={handleNext}
              disabled={!form.incidentType}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Step 2: Incident Details</h2>
            <textarea
              className="w-full border rounded-lg p-3 text-gray-700 mb-4 h-32"
              placeholder="Describe what happened..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              type="date"
              className="w-full border rounded-lg p-3 text-gray-700 mb-4"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <div className="flex gap-2">
              <button onClick={handleBack} className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg">Back</button>
              <button onClick={handleNext} disabled={!form.description} className="flex-1 bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Step 3: Upload Evidence</h2>
            <p className="text-sm text-gray-500 mb-4">Optional — upload screenshots, documents, or videos.</p>
            <input
              type="file"
              multiple
              className="w-full border rounded-lg p-3 text-gray-700 mb-4"
              onChange={(e) => setForm({ ...form, evidence: e.target.files })}
            />
            <div className="flex gap-2">
              <button onClick={handleBack} className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg">Back</button>
              <button onClick={handleNext} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Step 4: Contact Info</h2>
            {!anonymous && (
              <>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg p-3 text-gray-700 mb-4"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Phone or email (optional)"
                  className="w-full border rounded-lg p-3 text-gray-700 mb-4"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                />
              </>
            )}
            {anonymous && (
              <p className="text-sm text-gray-500 mb-4 bg-yellow-50 p-3 rounded-lg">
                You are reporting anonymously. No personal details will be collected.
              </p>
            )}
            <div className="flex gap-2">
              <button onClick={handleBack} className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg">Back</button>
              <button onClick={handleSubmit} className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Submit Report</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}