import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "DELETE") {
        const data = req.body;
        // console.log(req.body);
        try {
            const response = await prisma.post.delete({
                where: {
                    id: data,
                },
            });
            console.log(response);
            return res.status(200).json({ message: "deleted" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: "wrong" });
        }
    }
}
