import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const sessionUser = await getServerSession(req, res, authOptions);
        if (!sessionUser) {
            return res.status(500).json({ message: "unAuthorized" });
        }
        const user = await prisma.user.findUnique({ where: { email: sessionUser.user?.email } });
        const { postId, note } = req.body;
        try {
            if (!note.length) {
                return res.status(401).json({ message: "notes can't be empty" });
            }
            const result = await prisma.comment.create({
                data: {
                    message: note,
                    postId,
                    userId: user?.id,
                },
            });
            return res.json({ result });
        } catch (error) {
            console.log(error);
        }
    }
}
