import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SearchBar from "@/components/dashboard/SearchBar";
import StudyModes from "@/components/dashboard/StudyModes";
import ChallengeCard from "@/components/dashboard/ChallengeCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import BottomNav from "@/components/dashboard/BottomNav";
import FloatingActionButton from "@/components/dashboard/FloatingActionButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-6">
      <div className="mx-auto max-w-md rounded-[28px] border-4 border-blue-500 bg-white shadow-lg">
        <div className="px-6 pb-28 pt-6">
          <DashboardHeader />
          <SearchBar />
          <StudyModes />
          <ChallengeCard />
          <RecentActivity />
        </div>

        <BottomNav />
        <FloatingActionButton />
      </div>
    </main>
  );
}