import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { createGalleryItem, getGalleryItems } from "@/app/lib/api/gallery";

export async function POST(request) {
    const body = await request.json();
    let count = 0;

    for (const item of body) {
        try {
            const { photoUrl, heading, description, category, active } = item;

            if (!photoUrl || !heading) {
                return NextResponse.json(
                    { error: "Missing required fields !!!" },
                    { status: 400 }
                );
            }

            await createGalleryItem(item);
        }
        catch (error) {
            console.error("Error creating the gallery item: ", error);
            return NextResponse.json(
                { error: `Internal server error !!! ${count} items created` },
                { status: 500 }
            );
        }
        count++;
    }
    return NextResponse.json(
        { message: "Gallery item successfully created !!!" },
        { status: 201 }
    );
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;
        const category = searchParams.get("category");
        const year = yearParam ? parseInt(yearParam) : undefined; 

        const result = await getGalleryItems({ category, year, page, limit,  });

        return NextResponse.json(
            { success: true, data: result },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal sever error !!!" },
            { status: 500 }
        );
    }
}