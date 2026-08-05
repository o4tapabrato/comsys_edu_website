import { NextResponse } from "next/server";
// import { getGalleryItems, getAvailableYears } from "../../../lib/api/gallery";
import { getGalleryItems, getAvailableYears, NewGalleryItem, createGalleryItem } from "@/app/lib/api/gallery";
import { prisma } from "@/app/lib/prisma";

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { photoUrl, heading, description, category, active } = body;

    //data validation
    if (!photoUrl || !heading) {
      return NextResponse.json(
        { error: "Missing required fields !!!" },
        { status: 400 }
      );
    }

    await createGalleryItem(body);

    return NextResponse.json(
      { message: "Gallery item successfully created !!!" },
      { status: 201 }
    );
  }
  catch (error) {
    console.error("Error creating the gallery item: ", error);
    return NextResponse.json(
      { error: "Internal server error !!!" },
      { status: 500 }
    );
  }
}