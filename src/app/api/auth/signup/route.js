import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request) {
    const body = await request.json();
    const { username, password } = body;
}