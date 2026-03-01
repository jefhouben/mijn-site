export default function Hero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold tracking-tight">
          AI support for medical students
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Study smarter with AI-generated summaries, quizzes, and flashcards.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-black px-5 py-3 text-white">
            Get started
          </button>
          <button className="rounded-xl border px-5 py-3">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
