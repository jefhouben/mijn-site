export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 rounded-b-[24px] border-t border-slate-200 bg-white px-6 py-4">
      <div className="grid grid-cols-4 text-center text-sm">
        <div className="font-semibold text-blue-600">Home</div>
        <div className="text-slate-400">Library</div>
        <div className="text-slate-400">Stats</div>
        <div className="text-slate-400">Profile</div>
      </div>
    </nav>
  );
}