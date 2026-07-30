import Hero from "./components/home/HeroSection";
import ImpactStats from "./components/home/ImpactStats";
import FeaturedConferences from "./components/home/FeaturedReferences";
import OutreachHighlights from "./components/home/OutReachHighlights";
import CallToAction from "./components/home/CaltToAction";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Hero />
      <ImpactStats />
      <FeaturedConferences />
      <OutreachHighlights />
      <CallToAction />
    </div>
  );
}