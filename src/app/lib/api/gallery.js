import { prisma } from "../prisma";

const DEFAULT_LIMIT = 12;

// Maps a Prisma Gallery row -> the shape MediaCard/LightboxModal expect
function toMediaItem(row) {
  return {
    id: row.id,
    url: row.photoUrl,
    title: row.heading,
    desc: row.description || "",
    category: row.category,
    type: "image", // video support intentionally skipped for now
    year: new Date(row.time).getFullYear(),
  };
}

export async function getGalleryItems({ category, year, page = 1, limit = DEFAULT_LIMIT } = {}) {
  const pageNum = Math.max(1, Number(page) || 1);
  const take = Math.max(1, Number(limit) || DEFAULT_LIMIT);
  const skip = (pageNum - 1) * take;

  const where = { active: true };

  if (category && category !== "all") {
    where.category = category;
  }

  if (year) {
    const y = Number(year);
    where.time = {
      gte: new Date(`${y}-01-01T00:00:00.000Z`),
      lt: new Date(`${y + 1}-01-01T00:00:00.000Z`),
    };
  }

  const [rows, total] = await Promise.all([
    prisma.gallery.findMany({
      where,
      orderBy: { time: "desc" },
      skip,
      take,
    }),
    prisma.gallery.count({ where }),
  ]);

  return {
    items: rows.map(toMediaItem),
    pagination: {
      page: pageNum,
      limit: take,
      total,
      totalPages: Math.max(1, Math.ceil(total / take)),
    },
  };
}

export async function getAvailableYears() {
  const rows = await prisma.$queryRaw`
    SELECT DISTINCT EXTRACT(YEAR FROM "time")::int AS year
    FROM "gallery"
    WHERE "active" = true
    ORDER BY year DESC
  `;
  return rows.map((r) => r.year);
}