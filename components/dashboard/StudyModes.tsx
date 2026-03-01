const modes = [
  {
    title: "Learn a Topic",
    description: "Structured learning paths for exams",
    color: "bg-blue-600",
    icon: "🎓",
  },
  {
    title: "Differential Dx",
    description: "Practice clinical reasoning skills",
    color: "bg-emerald-500",
    icon: "🩺",
  },
  {
    title: "Medication Guide",
    description: "Drug references & clinical safety",
    color: "bg-amber-500",
    icon: "💊",
  },
  {
    title: "Slide Processor",
    description: "AI analysis of study materials",
    color: "bg-indigo-500",
    icon: "✨",
  },
];

export default function StudyModes() {
  return (
    <section className="mt-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Study Modes</h2>
        <button className="text-base font-semibold text-blue-600">View All</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {modes.map((mode) => (
          <div
            key={mode.title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white ${mode.color}`}
            >
              {mode.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{mode.title}</h3>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              {mode.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}