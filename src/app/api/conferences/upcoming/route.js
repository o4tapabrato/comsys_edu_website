import { getUpcomingConferences } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const upcomingConferences = await getUpcomingConferences();
        return NextResponse.json(
            { data: upcomingConferences },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse(
            { error: "Internal server error !!!" },
            { status: 500 }
        );
    }
}