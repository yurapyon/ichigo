import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO
  //   handle !session, !message

  const session = await getSession({ req });
  const prisma = new PrismaClient();

  const id = req.body;

  const message = await prisma.message.findUnique({
    where: { id },
    include: { user: true },
  });

  if (session?.user?.name !== message?.user?.name) {
    // TODO some type of error or something
    return res.json(id);
  }

  const result = await prisma.message.delete({
    where: { id },
  });

  res.json(result);
}
