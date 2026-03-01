export default function Features() {
  const features = [
    {
      title: "Smart Summaries",
      description:
        "Turn dense medical notes into clear, structured summaries in seconds.",
    },
    {
      title: "AI Quizzes",
      description:
        "Generate practice questions to test your understanding and prep faster.",
    },
    {
      title: "Flashcards",
      description:
        "Create quick revision cards from your material for active recall.",
    },
  ];

  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Built for better medical study sessions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to study faster, retain more, and stay organized.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}