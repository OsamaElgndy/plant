import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, plantId } = req.body;
  if (req.method === "GET") {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { plant: true },

    });
    return res.status(200).json(favorites);

  } else if (req.method === "POST") {
    await prisma.favorite.create({
      data: {
        userId,
        plantId,
      },
    })
    res.status(201).json({ message: "Added to favorites" });
    // Add product to favorites
  } else if (req.method === "DELETE") {
    await prisma.favorite.delete({
      where: {
        userId_plantId: {
          userId,
          plantId,
        },
      },
    });
    res.status(200).json({ message: "Removed from favorites" });
    // Remove from favorites
  } else {
    res.status(405).end();
  }
}
