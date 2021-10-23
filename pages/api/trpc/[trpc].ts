import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

// TODO split this up

async function createIchigoAuthTrpcContext(opt: CreateNextContextOptions) {
  const session = await getSession({ req: opt.req });
  return {
    session,
  };
}

type IchigoAuthTrpcRouterContextType = inferAsyncReturnType<
  typeof createIchigoAuthTrpcContext
>;

function createRouter() {
  return trpc.router<IchigoAuthTrpcRouterContextType>();
}

const users = createRouter()
  .mutation("sendMessage", {
    input: z.object({
      username: z.string(),
      // TODO handle max len
      message: z.string(),
    }),
    resolve: async ({ input }) => {
      const prisma = new PrismaClient();
      return await prisma.message.create({
        data: {
          content: input.message,
          tags: [],
          user: { connect: { name: input.username } },
        },
      });
    },
  })
  .mutation("pushSettings", {
    // TODO use an actual type here
    input: z.object({
      bio: z.union([z.string(), z.null()]),
    }),
    resolve: async ({ ctx, input }) => {
      const prisma = new PrismaClient();

      const result = await prisma.user.update({
        where: { name: ctx.session?.user?.name || undefined },
        data: input,
      });
    },
  })
  .query("get-messages", {
    resolve: async ({ ctx, input }) => {
      const prisma = new PrismaClient();
      const messages = await prisma.message.findMany({
        where: {
          user: {
            name: ctx.session?.user?.name,
          },
        },
      });
      return messages;
    },
  });

const messages = createRouter().mutation("delete", {
  input: z.number().int(),
  resolve: async ({ ctx, input }) => {
    const id = input;
    const prisma = new PrismaClient();

    const message = await prisma.message.findUnique({
      where: { id },
      include: { user: true },
    });

    if (ctx.session?.user?.name !== message?.user?.name) {
      // TODO return error
      return;
    }

    const result = await prisma.message.delete({
      where: { id },
    });

    return result;
  },
});

const appRouter = createRouter()
  .merge("users.", users)
  .merge("messages.", messages);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createIchigoAuthTrpcContext,
});
