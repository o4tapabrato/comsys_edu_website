import { NextResponse } from "next/server";
import { getGalleryItems, getAvailableYears } from "@/app/lib/api/gallery";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category") || undefined;
    const yearParam = searchParams.get("year");
    const year = yearParam ? parseInt(yearParam, 10) : undefined;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "12", 10);

    const [data, years] = await Promise.all([
      getGalleryItems({ category, year, page, limit }),
      getAvailableYears(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        items: data?.items || [],
        pagination: data?.pagination || { page: 1, limit, totalPages: 1, totalItems: 0 },
      },
      years: years || [],
    }, { status: 200 });

  } catch (err) {
    // Check your terminal for this log to see the exact database crash reason
    console.error("CRITICAL API ERROR [GET /api/gallery]:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to load gallery" }, 
      { status: 500 }
    );
  }
}