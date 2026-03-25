import LuminaRefactored from "../components/LuminaRefactored";
import TopBanner from "../components/TopBanner";
import RecentActivityToasts from "../components/RecentActivityToasts";
import ExitIntentModal from "../components/ExitIntentModal";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TopBanner />
      <LuminaRefactored />
      <RecentActivityToasts />
      <ExitIntentModal />
    </main>
  );
}