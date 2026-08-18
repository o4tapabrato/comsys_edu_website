import { getAllConferences, getAllEvents } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allConferences = await getAllConferences();
        return NextResponse.json(
            { data: allConferences }, { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal serber error !!!" },
            { status: 500 }
        );
    }
}