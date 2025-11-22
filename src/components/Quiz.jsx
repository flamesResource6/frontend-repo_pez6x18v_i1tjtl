import { useMemo, useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

const QUESTIONS = [
  {
    q: "What does print() do?",
    a: ["Shows text on the screen", "Adds two numbers", "Draws a picture"],
    correct: 0,
  },
  {
    q: "Which is a variable?",
    a: ["pizza = 3", "3 = pizza", "print(pizza)"],
    correct: 0,
  },
  {
    q: "What does range(3) make?",
    a: ["Numbers 0,1,2", "Numbers 1,2,3,4", "Just number 3"],
    correct: 0,
  },
  {
    q: "Can you use input() in the web runner?",
    a: ["Not now", "Yes always", "Only on Tuesdays"],
    correct: 0,
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [name, setName] = useState("");
  const [scores, setScores] = useState([]);

  const current = QUESTIONS[index];

  const pick = (i) => {
    if (finished) return;
    if (i === current.correct) setScore((s) => s + 25);
    if (index + 1 === QUESTIONS.length) setFinished(true);
    else setIndex((x) => x + 1);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  const submitScore = async () => {
    if (!name.trim()) return alert("Type your name to save your score.");
    const res = await fetch(`${API_BASE}/submit-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, score }),
    });
    if (res.ok) {
      await loadScores();
      alert("Score saved! Great job!");
    } else {
      const data = await res.json();
      alert(data.detail || "Could not save score.");
    }
  };

  const loadScores = async () => {
    try {
      const res = await fetch(`${API_BASE}/get-scores?limit=10`);
      const data = await res.json();
      if (res.ok) setScores(data.scores || []);
    } catch (e) {}
  };

  useEffect(() => {
    loadScores();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        {!finished ? (
          <>
            <h2 className="text-xl font-bold text-slate-800">Question {index + 1}</h2>
            <p className="mt-2 text-slate-700">{current.q}</p>
            <div className="mt-4 grid gap-3">
              {current.a.map((ans, i) => (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  className="text-left px-4 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200"
                >
                  {ans}
                </button>
              ))}
            </div>
            <p className="mt-4 text-slate-600">Score: {score}</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-slate-800">You're done! 🎉</h2>
            <p className="mt-2 text-slate-700">Your score is {score}.</p>
            <div className="mt-4 flex items-center gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-slate-300"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                onClick={submitScore}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700"
              >
                Save Score
              </button>
            </div>
            <button
              onClick={restart}
              className="mt-3 text-sm text-purple-700 hover:underline"
            >
              Start again
            </button>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800">Top Scores</h2>
        <ul className="mt-3 space-y-2">
          {scores.map((s, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-white rounded-xl p-3 border border-slate-200"
            >
              <span className="font-semibold text-slate-800">{s.name}</span>
              <span className="text-purple-700 font-bold">{s.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
