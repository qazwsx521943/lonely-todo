import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        console.log(req.query.details);
        // coercion
        const postId = `${req.query?.details}`;
        const data = await prisma.post.findUnique({
            where: {
                id: postId,
            },
            include: {
                user: true,
                comments: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        user: true,
                    },
                },
            },
        });
        return res.status(200).json(data);
    }
}
