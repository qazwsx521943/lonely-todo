import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await prisma.post.findMany({ include: { user: true }, orderBy: { createdAt: "desc" } });
            console.log(data);
            return res.json(data);
        } catch (err) {
            console.log("error", err);
        }
    }
}
