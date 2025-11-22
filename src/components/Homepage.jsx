export default function Homepage() {
  return (
    <div className="">
      <section className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
              Learn Python the fun way!
            </h1>
            <p className="mt-4 text-lg md:text-xl/relaxed">
              Hey there, young coder! Welcome to KidsLearnPython. We use simple
              words, bright colors, and playful examples to help you start your
              Python journey.
            </p>
            <ul className="mt-6 space-y-2 text-white/95">
              <li>• Super simple lessons</li>
              <li>• Try-it-yourself code runner</li>
              <li>• Short quizzes to earn points</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/20 p-6 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-white/80 grid place-items-center text-purple-700 text-7xl">
                🧠💡
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-white/60 rotate-6"></div>
            <div className="absolute -top-4 -right-6 w-16 h-16 rounded-full bg-yellow-300 animate-bounce"></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <Card title="Easy Lessons" emoji="📘" text="Short and sweet lessons for ages 8–14" />
        <Card title="Code Runner" emoji="🖥️" text="Type code and see the result right away" />
        <Card title="Fun Quizzes" emoji="🎯" text="Answer questions and track your score" />
      </section>
    </div>
  );
}

function Card({ title, text, emoji }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-3 font-bold text-xl text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}
