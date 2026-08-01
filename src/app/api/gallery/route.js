import { NextResponse } from "next/server";
import { getGalleryItems, getAvailableYears } from "../../../lib/api/gallery";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category") || undefined;
  const year = searchParams.get("year") || undefined;
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "12";

  try {
    const [data, years] = await Promise.all([
      getGalleryItems({ category, year, page, limit }),
      getAvailableYears(),
    ]);

    return NextResponse.json({
      items: data.items,
      pagination: data.pagination,
      years,
    });
  } catch (err) {
    console.error("GET /api/gallery failed:", err);
    return NextResponse.json({ error: "Failed to load gallery" }, { status: 500 });
  }
}