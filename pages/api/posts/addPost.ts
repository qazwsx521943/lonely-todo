import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from "@/prisma/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const sessionUser = await getServerSession(req, res, authOptions);
        // console.log(sessionUser);'
        if (!sessionUser) return res.json({ message: "UnAuthorized" });
        const user = await prisma.user.findUnique({ where: { email: sessionUser?.user?.email! } });

        const { title, content } = req.body;
        console.log("user:", user?.id);
        console.log("title:", title);
        console.log("content:", content);
        try {
            const result = await prisma.post.create({
                data: {
                    userId: user?.id!,
                    title: title,
                    content: content,
                },
            });
        } catch (err) {
            console.log("error", err);
        }
        return res.json({ message: "OK" });
    }
}
