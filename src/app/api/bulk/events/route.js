import { createEvent } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function POST(request) {
    var count = 0;
    try {
        const body = await request.json();

        for(let event of body) {
            await createEvent(event);
            count ++;
        }

        return NextResponse.json(
            { message: `Successfullt created ${count} events` },
            { status: 201 }
        )
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Internal server error !!!' },
            { status: 500 }
        )
    }
}