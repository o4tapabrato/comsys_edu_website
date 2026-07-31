import { prisma } from "../prisma";

export async function getAboutHero() {
  const hero = await prisma.aboutHero.findFirst({ where: { published: true } });
  return hero
    ? { eyebrow: hero.eyebrow, title: hero.title, description: hero.description }
    : { eyebrow: null, title: null, description: null };
}

export async function getVisionMission() {
  const rows = await prisma.visionMission.findMany();
  const vision = rows.find((r) => r.type === "vision");
  const mission = rows.find((r) => r.type === "mission");
  return {
    vision: { title: vision?.title ?? null, body: vision?.body ?? null },
    mission: { title: mission?.title ?? null, body: mission?.body ?? null },
  };
}

export async function getHistory() {
  const [intro, timeline] = await Promise.all([
    prisma.historyIntro.findFirst(),
    prisma.historyMilestone.findMany({ orderBy: { order: "asc" } }),
  ]);
  return {
    intro: intro?.intro ?? null,
    timeline: timeline.map((t) => ({ year: t.year, title: t.title, body: t.body })),
  };
}

export async function getLeadershipMessages() {
  const rows = await prisma.leadershipMessage.findMany({ orderBy: { order: "asc" } });
  return rows.map((r) => ({
    role: r.role,
    name: r.name,
    designation: r.designation,
    message: r.message,
    photoUrl: r.photoUrl,
  }));
}

export async function getTrustees() {
  return prisma.trustee.findMany({ orderBy: { order: "asc" } });
}

export async function getExecutiveCommittee() {
  return prisma.executiveMember.findMany({ orderBy: { order: "asc" } });
}

export async function getOurValues() {
  return prisma.coreValue.findMany({ orderBy: { order: "asc" } });
}

export async function getRoadmap() {
  const [section, milestones] = await Promise.all([
    prisma.roadmapSection.findFirst(),
    prisma.roadmapMilestone.findMany({ orderBy: { order: "asc" } }),
  ]);
  return {
    title: section?.title ?? null,
    milestones: milestones.map((m) => ({
      year: m.year,
      title: m.title,
      body: m.body,
      status: m.status,
    })),
  };
}