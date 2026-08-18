import { getHomeConferences } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const homeConferences = await getHomeConferences();
        return NextResponse.json(
            { homeConferences },
            { status: 200 }
        )
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error !!!" },
            { status: 500 }
        );
    }
}