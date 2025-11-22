import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Lessons from "./components/Lessons";
import Runner from "./components/Runner";
import Quiz from "./components/Quiz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/run" element={<Runner />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <footer className="mt-10 py-6 text-center text-slate-600">
        Made with love for young coders 💜
      </footer>
    </div>
  );
}

export default App;
