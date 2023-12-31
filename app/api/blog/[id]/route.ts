import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
    const id = req.url.split("/blog/")[1];
    await main();
    try {
        const post = await prisma.post.findUnique({ where: { id } });
        if (!post) {
            return NextResponse.json({ message: "not found", post }, { status: 404 });
        } else {
            return NextResponse.json({ message: "Success", post }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 400 });
    } finally {
        await prisma.$disconnect();
    }
}

export const PUT = async(req:Request, res:NextResponse) => {
    const id = req.url.split("/blog/")[1];
    const { title , description } = await req.json();
    await main();
    try {
        const post = await prisma.post.update({
            data: {title, description},
            where: { id }
         })
         if (!post) {
            return NextResponse.json({ message: "not found", post }, { status: 404 });
        } else {
            return NextResponse.json({ message: "Success", post }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 400 });
    } finally {
        await prisma.$disconnect();
    }
}

export const DELETE = async (req: Request, res: NextResponse) => {
    const id = req.url.split("/blog/")[1];
    await main();
    try {
        const post = await prisma.post.delete({ where: { id } });
        return NextResponse.json({ message: "Success", post }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 400 });
    } finally {
        await prisma.$disconnect();
    }
}
