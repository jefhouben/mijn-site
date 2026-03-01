const activities = [
  "Acute Myocardial Infarction",
  "Endocrine Pathologies",
];

export default function RecentActivity() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-slate-900">Recent Activity</h2>

      <div className="mt-5 space-y-3">
        {activities.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
          >
            <p className="font-semibold text-slate-800">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}