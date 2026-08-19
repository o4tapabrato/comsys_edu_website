import { getPastConferences } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const pastConferences = await getPastConferences();
        return NextResponse.json(
            { data: pastConferences },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error !!!" },
            { status: 500 }
        )
    }
}