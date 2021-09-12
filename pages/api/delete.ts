import prisma from "../../lib/prisma.ts";
import { getSession } from "next-auth/react";

export default async function handle(req, res) {
  const session = await getSession({ req });

  const id = req.body;

  const message = await prisma.message.findUnique({
    where: { id },
    include: { user: true },
  });

  if (session.user?.name !== message.user.name) {
    // TODO some type of error or something
    return res.json(id);
  }

  const result = await prisma.message.delete({
    where: { id },
  });

  res.json(result);
}
