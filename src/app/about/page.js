import { Suspense } from "react";
import {
  getAboutHero,
  getVisionMission,
  getHistory,
  getLeadershipMessages,
  getTrustees,
  getExecutiveCommittee,
  getOurValues,
  getRoadmap,
} from "../lib/api/about";
import { Skeleton } from "../components/ui/Skeleton";

import AboutHero from "../components/about/AboutHero";
import VisionMission from "../components/about/VisionMission";
import History from "../components/about/History";
import LeadershipMessages from "../components/about/LeadershipMessages";
import Leadership from "../components/about/Leadership";
import OurValues from "../components/about/OurValues";
import StrategicRoadmap from "../components/about/StrategicRoadmap";
import CallToAction from "../components/home/CaltToAction";

export const metadata = {
  title: "About Us | COMSYS Educational Trust",
};

// Small wrapper: fetches its own data, wraps itself in Suspense + skeleton
async function VisionMissionSection() {
  const data = await getVisionMission();
  return <VisionMission data={data} />;
}
async function HistorySection() {
  const data = await getHistory();
  return <History data={data} />;
}
async function LeadershipMessagesSection() {
  const data = await getLeadershipMessages();
  return <LeadershipMessages messages={data} />;
}
async function LeadershipSection() {
  const [trustees, executives] = await Promise.all([
    getTrustees(),
    getExecutiveCommittee(),
  ]);
  return <Leadership trustees={trustees} executives={executives} />;
}
async function OurValuesSection() {
  const data = await getOurValues();
  return <OurValues values={data} />;
}
async function RoadmapSection() {
  const data = await getRoadmap();
  return <StrategicRoadmap data={data} />;
}

export default async function AboutPage() {
  const hero = await getAboutHero(); // above-the-fold: awaited directly, no skeleton flash

  return (
    <>
      <AboutHero data={hero} />

      <Suspense fallback={<SectionSkeleton id="vision" />}>
        <VisionMissionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton id="history" />}>
        <HistorySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <LeadershipMessagesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton id="leadership" />}>
        <LeadershipSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <OurValuesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton id="roadmap" />}>
        <RoadmapSection />
      </Suspense>

      <CallToAction />
    </>
  );
}

function SectionSkeleton({ id }) {
  return (
    <section id={id} className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-8 w-1/3 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </section>
  );
}