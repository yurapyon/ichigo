import prisma from '../../../lib/prisma.ts';

export default async function handle(req, res) {
  const user = req.query.user;
  const message = req.body;

  const result = await prisma.message.create({
    data: {
      content: message,
      tags: [],
      user: { connect: { name: user } },
    },
  });

  res.json(result);
}
