import { createTrustee } from "@/app/lib/api/trustee";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
    let count = 0;
    const body = await request.json();

    //needs authentication


    for (const member of body) {
        try {
            const { name, designation, photoUrl, bio, order } = member;

            if (!name || !designation) {
                return NextResponse.json(
                    { message: "Missing required fields" },
                    { status: 401 }
                );
            }

            const newTrustee = await createTrustee(member);
            count++;
        }
        catch (error) {
            console.log(error);
            return NextResponse.json(
                { error: `Internal server error!!! ${count} items created successfully`},
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Trustee members created successfully"},
            { status: 201 }
        );
    }
}