import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { createGalleryItem } from "@/app/lib/api/gallery";

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
                { error:`Internal server error !!! ${count} items created` },
                { status: 500 }
            );
        }
        count ++;
    }
    return NextResponse.json(
                { message: "Gallery item successfully created !!!" },
                { status: 201 }
            );
}