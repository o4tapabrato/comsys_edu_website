function getBaseUrl() {
  // Explicit override (set this in .env.local for staging/prod if needed)
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;

  // In the browser, relative URLs resolve fine against the current origin
  if (typeof window !== "undefined") return "";

  // On the server (dev or prod), fetch() needs an absolute URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  const port = process.env.PORT || 3000;
  return `http://localhost:${port}`;
}

async function fetchSection(section) {
  const res = await fetch(`${getBaseUrl()}/api/about/${section}`, {
    next: { revalidate: 3600 }, // ISR: re-fetch from DB at most once/hour
  });
  if (!res.ok) throw new Error(`Failed to load about/${section}`);
  return res.json();
}

export const getAboutHero = () => fetchSection("hero");
export const getVisionMission = () => fetchSection("vision-mission");
export const getHistory = () => fetchSection("history");
export const getLeadershipMessages = () => fetchSection("leadership-messages");
export const getTrustees = () => fetchSection("trustees");
export const getExecutiveCommittee = () => fetchSection("executive-committee");
export const getOurValues = () => fetchSection("values");
export const getRoadmap = () => fetchSection("roadmap");