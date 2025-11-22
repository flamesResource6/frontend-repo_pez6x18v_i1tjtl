import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Runner() {
  const [code, setCode] = useState("print('Hello from KidsLearnPython!')");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    setOutput("");
    setError("");
    try {
      const res = await fetch(`${API_BASE}/run-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");
      setOutput(data.output || "");
      setError(data.error || "");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Type your Python</h2>
        <textarea
          className="mt-3 w-full h-72 p-3 rounded-xl border border-slate-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={run}
          disabled={loading}
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-60"
        >
          {loading ? "Running..." : "Run Code"}
        </button>
        <p className="text-xs text-slate-500 mt-2">
          Note: For safety, imports and special tricks are blocked.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">Output</h2>
        <pre className="mt-3 bg-slate-900 text-lime-300 p-4 rounded-xl h-72 overflow-auto text-sm whitespace-pre-wrap">
{output || ""}
{error ? `\n[Error]\n${error}` : ""}
        </pre>
      </div>
    </div>
  );
}
