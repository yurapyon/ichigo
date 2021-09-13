import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const prisma = new PrismaClient();

  const settings = req.body;

  const result = await prisma.user.update({
    where: { name: session?.user?.name || undefined },
    data: {
      bio: settings.bio,
    },
  });

  res.json(result);
}
