export default function ChallengeCard() {
  return (
    <section className="mt-6">
      <div className="overflow-hidden rounded-3xl bg-blue-700 p-6 text-white shadow-lg">
        <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-xs font-bold tracking-wide">
          DAILY CHALLENGE
        </div>

        <h3 className="mt-4 text-4xl font-bold leading-tight">
          Cardiology Quiz Mode
        </h3>

        <p className="mt-3 max-w-xs text-base text-blue-100">
          Test your knowledge on Valve Disorders
        </p>

        <button className="mt-6 rounded-2xl bg-white px-5 py-3 text-lg font-bold text-blue-700">
          Start Practice
        </button>
      </div>
    </section>
  );
}