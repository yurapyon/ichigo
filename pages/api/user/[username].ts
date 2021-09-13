import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const user = req.query.username;
  const message = req.body;

  if (typeof user != "string") {
    // TODO error
    res.json(message);
    return;
  }

  const result = await prisma.message.create({
    data: {
      content: message,
      tags: [],
      user: { connect: { name: user } },
    },
  });

  res.json(result);
}
