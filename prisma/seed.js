// prisma/seed.js
require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding About page content...");

  // ---------- Hero ----------
  await prisma.aboutHero.deleteMany();
  await prisma.aboutHero.create({
    data: {
      eyebrow: "About Us",
      title: "Advancing Knowledge, Empowering Communities",
      description:
        "Learn about our mission, our history, and the people driving COMSYS Educational Trust forward.",
      published: true,
    },
  });
  console.log("Hero seeded");

  // ---------- Vision & Mission ----------
  await prisma.visionMission.deleteMany();
  await prisma.visionMission.createMany({
    data: [
      {
        type: "vision",
        title: "Our Vision",
        body: "To be a globally recognized academic trust that bridges research, education, and community upliftment through sustained innovation and ethical leadership.",
      },
      {
        type: "mission",
        title: "Our Mission",
        body: "To foster academic excellence through world-class conferences, accessible research opportunities, and outreach programs that create lasting impact in underserved communities.",
      },
    ],
  });
  console.log("Vision & Mission seeded");

  // ---------- History ----------
  await prisma.historyIntro.deleteMany();
  await prisma.historyIntro.create({
    data: {
      intro:
        "COMSYS Educational Trust was founded with a singular purpose — to connect rigorous academic research with real-world community impact. Over the years, our reach has grown from a handful of local initiatives to an international network of conferences and outreach programs.",
    },
  });

  await prisma.historyMilestone.deleteMany();
  await prisma.historyMilestone.createMany({
    data: [
      {
        year: "2015",
        title: "Trust Founded",
        body: "COMSYS Educational Trust was established with a founding board of academics and industry leaders.",
        order: 1,
      },
      {
        year: "2017",
        title: "First COMSYS Symposium",
        body: "Launched our flagship international symposium, bringing together researchers from over 12 countries.",
        order: 2,
      },
      {
        year: "2019",
        title: "ICDEC Series Launched",
        body: "Introduced the International Conference on Digital Economy, expanding our focus into digital transformation research.",
        order: 3,
      },
      {
        year: "2021",
        title: "Outreach Programs Scaled",
        body: "Expanded rural education and STEM outreach initiatives to over 40 partner schools.",
        order: 4,
      },
      {
        year: "2024",
        title: "Digital Literacy Initiative",
        body: "Rolled out a nationwide digital literacy program in partnership with local governing bodies.",
        order: 5,
      },
    ],
  });
  console.log("History seeded");

  // ---------- Leadership Messages ----------
  await prisma.leadershipMessage.deleteMany();
  await prisma.leadershipMessage.createMany({
    data: [
      {
        role: "president",
        name: "Dr. [President Name]",
        designation: "President, COMSYS Educational Trust",
        message:
          "Our work is guided by a simple belief — that knowledge creates the greatest impact when it reaches beyond the walls of academia. Every conference we host and every outreach camp we run is a step toward that vision.",
        photoUrl: null,
        order: 1,
      },
      {
        role: "secretary",
        name: "[Secretary Name]",
        designation: "Secretary, COMSYS Educational Trust",
        message:
          "Transparency and community trust are at the core of everything we do. We remain committed to accountable governance as we scale our programs nationally and internationally.",
        photoUrl: null,
        order: 2,
      },
    ],
  });
  console.log("Leadership messages seeded");

  // ---------- Trustees ----------
  await prisma.trustee.deleteMany();
  await prisma.trustee.createMany({
    data: [
      { name: "[Trustee Name 1]", designation: "Chairperson", photoUrl: null, bio: null, order: 1 },
      { name: "[Trustee Name 2]", designation: "Vice Chairperson", photoUrl: null, bio: null, order: 2 },
      { name: "[Trustee Name 3]", designation: "Treasurer", photoUrl: null, bio: null, order: 3 },
      { name: "[Trustee Name 4]", designation: "Trustee", photoUrl: null, bio: null, order: 4 },
    ],
  });
  console.log("Trustees seeded");

  // ---------- Executive Committee ----------
  await prisma.executiveMember.deleteMany();
  await prisma.executiveMember.createMany({
    data: [
      { name: "[Exec Name 1]", designation: "Director of Academic Affairs", photoUrl: null, order: 1 },
      { name: "[Exec Name 2]", designation: "Director of Outreach", photoUrl: null, order: 2 },
      { name: "[Exec Name 3]", designation: "Director of Conferences", photoUrl: null, order: 3 },
      { name: "[Exec Name 4]", designation: "Finance Officer", photoUrl: null, order: 4 },
    ],
  });
  console.log("✓ Executive Committee seeded");

  // ---------- Our Values ----------
  await prisma.coreValue.deleteMany();
  await prisma.coreValue.createMany({
    data: [
      {
        icon: "target",
        title: "Excellence",
        description: "We hold every conference, publication, and program to the highest academic standard.",
        order: 1,
      },
      {
        icon: "heart",
        title: "Compassion",
        description: "Community impact guides our outreach — every camp and initiative starts with genuine need.",
        order: 2,
      },
      {
        icon: "shield",
        title: "Integrity",
        description: "Transparent governance and ethical conduct underpin every decision the Trust makes.",
        order: 3,
      },
      {
        icon: "globe",
        title: "Global Outlook",
        description: "We connect local impact with international research networks and collaboration.",
        order: 4,
      },
    ],
  });
  console.log("Values seeded");

  // ---------- Strategic Roadmap ----------
  await prisma.roadmapSection.deleteMany();
  await prisma.roadmapSection.create({
    data: { title: "Strategic Roadmap — Vision 2035" },
  });

  await prisma.roadmapMilestone.deleteMany();
  await prisma.roadmapMilestone.createMany({
    data: [
      {
        year: "2026",
        title: "Digital Infrastructure",
        body: "Launch a unified digital platform connecting all conference and outreach data.",
        status: "In Progress",
        order: 1,
      },
      {
        year: "2028",
        title: "International Chapters",
        body: "Establish regional chapters to coordinate global research partnerships.",
        status: "Planned",
        order: 2,
      },
      {
        year: "2031",
        title: "Endowment Fund",
        body: "Build a self-sustaining endowment to fund scholarships and research grants long-term.",
        status: "Planned",
        order: 3,
      },
      {
        year: "2035",
        title: "Vision 2035 Complete",
        body: "Achieve full operational scale across academic, outreach, and governance pillars.",
        status: "Planned",
        order: 4,
      },
    ],
  });
  console.log("Roadmap seeded");

  console.log("\nSeed complete.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });