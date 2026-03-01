export default function DashboardHeader() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
          🩺
        </div>
        <div>
          <p className="text-sm text-slate-500">Welcome back,</p>
          <h1 className="text-3xl font-bold text-slate-900">Dr. Houben</h1>
        </div>
      </div>

      <button className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-lg">
        🔔
      </button>
    </section>
  );
}