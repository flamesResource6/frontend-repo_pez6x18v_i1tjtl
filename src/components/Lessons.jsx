export default function Lessons() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-800">Beginner Lessons</h1>
      <p className="text-slate-600 mt-2">Short bites to get you started.</p>

      <Lesson
        title="1. Variables"
        code={`name = "Mia"\nage = 10\nprint(name)\nprint(age)`}
      >
        Variables are like labeled boxes. You put a value inside and use the
        label later.
      </Lesson>

      <Lesson
        title="2. Print"
        code={`print("Hello, world!")\nprint(2 + 3)`}
      >
        print shows messages on the screen. It's great for checking your work!
      </Lesson>

      <Lesson
        title="3. Loops"
        code={`for i in range(3):\n    print("Hi!", i)`}
      >
        A loop repeats actions. Use range(3) to do something 3 times.
      </Lesson>

      <Lesson
        title="4. Input"
        code={`name = input("What is your name? ")\nprint("Hello, " + name + "!")`}
      >
        input asks the user to type something. Be careful: our online runner
        doesn't accept input for now.
      </Lesson>
    </div>
  );
}

function Lesson({ title, children, code }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      <p className="mt-2 text-slate-700">{children}</p>
      <pre className="mt-3 bg-slate-900 text-slate-100 p-4 rounded-xl overflow-auto text-sm">
        <code>{code}</code>
      </pre>
    </section>
  );
}
