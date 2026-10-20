import { NextRequest, NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prismaClient = new PrismaClient({ adapter });

export async function POST(req: NextRequest) {
    const data = await req.json();

    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    });

    return NextResponse.json({
        message: "you have been signed up"
    });
}

export async function GET(req: NextRequest){
    const user = await prismaClient.user.findFirst();
    return NextResponse.json({
        user
    })
}