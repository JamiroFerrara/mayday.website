import { z } from 'zod';
import { createRouter } from '../context'
import { prisma } from '../utils/prisma'

const goodbye = createRouter()
  .query('goodbye', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `goodbye ${input?.text ?? 'world'}`,
      };
    },
  });

const hello = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  });

const createUser = createRouter()
  .mutation('createUser', {
    input: z .object({ 
      Username: z.string(), 
      Password: z.string(),
      Email: z.string(),
    }),
    async resolve({ input }) {
      const userInDb = await prisma.user.create({
        data: {
          ...input,
        }
      })
      return {
        success: true, vote: userInDb
      };
    },
  });


export const appRouter = createRouter()
  .merge(hello)
  .merge(goodbye)
  .merge(createUser)
  ;

export type AppRouter = typeof appRouter;
