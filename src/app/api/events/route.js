import { createEvent, getAllEvents } from "@/app/lib/api/events";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const allEvents = await getAllEvents();
        return NextResponse.json(
            { data: allEvents },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Internal Serber Error !!!' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const data = await createEvent(body);
        return NextResponse.json(
            { message: "New event created successfully !!!", data: data },
            { status: 201 }
        )
    }
    catch(error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Internal server error !!!' },
            { status: 500 }
        )
    }
}