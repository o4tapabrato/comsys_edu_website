import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma"; // ← uncomment once Prisma is wired up

export async function GET(request, context) {
  const { section } = await context.params; // params is a Promise in Next 15+

  // TODO: replace each case with a real DB query, e.g.:
  // case "trustees": return NextResponse.json(await prisma.trustee.findMany());
  switch (section) {
    case "hero":
      return NextResponse.json({
        eyebrow: null,
        title: null,
        description: null,
      }); // shape: { eyebrow, title, description }

    case "vision-mission":
      return NextResponse.json({
        vision: { title: null, body: null },
        mission: { title: null, body: null },
      }); // { vision: {title, body}, mission: {title, body} }

    case "history":
      return NextResponse.json({
        intro: null,
        timeline: [],
      }); // { intro, timeline: [{year, title, body}] }

    case "leadership-messages":
      return NextResponse.json([]); // [{ role, name, designation, message, photoUrl }]

    case "trustees":
      return NextResponse.json([]); // [{ id, name, designation, photoUrl, bio }]

    case "executive-committee":
      return NextResponse.json([]); // [{ id, name, designation, photoUrl }]

    case "values":
      return NextResponse.json([]); // [{ icon, title, description }]

    case "roadmap":
      return NextResponse.json({
        title: null,
        milestones: [],
      }); // { title, milestones: [{year, title, body, status}] }

    default:
      return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  }
}