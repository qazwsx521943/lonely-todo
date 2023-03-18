import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "@/prisma/prisma";
// const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await prisma.post.findMany({ include: { user: true, comments: true }, orderBy: { createdAt: "desc" } });
            // console.log(data);
            return res.json(data);
        } catch (err) {
            console.log("error", err);
        }
    }
}
