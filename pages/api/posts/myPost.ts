import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const sessionUser = await getServerSession(req, res, authOptions);
        // console.log(sessionUser);'
        if (!sessionUser) return res.json({ message: "UnAuthorized" });
        try {
            const user = await prisma.user.findUnique({
                where: { email: sessionUser?.user?.email! },
                include: {
                    posts: { orderBy: { createdAt: "desc" }, include: { comments: true } },
                },
            });
            // console.log(data);
            return res.json(user);
        } catch (err) {
            console.log("error", err);
        }
    }
}
