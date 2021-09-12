import prisma from "../../lib/prisma.ts";
import { getSession } from "next-auth/react";

export default async function handle(req, res) {
  const session = await getSession({ req });

  const settings = req.body;

  const result = await prisma.user.update({
    where: { name: session.user.name },
    data: {
      bio: settings.bio,
    },
  });

  res.json(result);
}
