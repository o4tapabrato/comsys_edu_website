import { NextResponse } from "next/server";
import { createTrustee, getTrusteeData } from "@/app/lib/api/trustee";

export async function POST(request) {
    try {
        const body = await request.json();
        //Needs authentication

        const { name, designation, photoUrl, bio, order } = body;

        if(!name || !designation) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newTrustee = await createTrustee(body);
        return NextResponse.json(
            { message: "New Trustee createsd successfully", data: newTrustee },
            { status: 201 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        const trusteeData = await getTrusteeData();
        return NextResponse.json(
            { data: trusteeData },
            { status: 200 }
        );
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal Server Error !!!" },
            { status: 500 }
        )
    }
}