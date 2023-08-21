import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main() {
    try {
        await prisma.$connect();
    } catch (error) {
        return Error("Error establishing connection to the database");
    }
}

export const GET = async(res: NextResponse, req: Request) => {
    try {
        await main();
        const posts = await prisma.post.findMany();
        return NextResponse.json({ message: "Success", posts}, { status : 202});
    } catch (err) {
        return NextResponse.json({ message: "Error", err}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}

export const POST = async(req: Request, res: NextResponse,) => {
    try {
        const { title, description } = await req.json();
        await main();
        const post = await prisma.post.create({ data: { description, title } });
        return NextResponse.json( { message: "Success", post }, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
}