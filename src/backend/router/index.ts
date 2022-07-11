import {mergeRefs} from '@mantine/hooks';
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

const createComment = createRouter()
  .mutation('createComment', {
    input: z .object({ 
      content: z.string()
    }),
    async resolve({ input }) {
      const comment = await prisma.comment.create({
        data: {
          ...input,
        }
      })
      return {
        success: true, comment: comment
      };
    },
  });

const getComments = createRouter()
  .query('getComments', {
    async resolve() {
      const comments = await prisma.comment.findMany()
      return {
        success: true, comments: comments
      };
    },
  });

const removeAllComments = createRouter()
  .mutation('removeAllComments', {
    async resolve() {
      const res = await prisma.comment.deleteMany({})
      return {
        success: true, res: res
      };
    },
  });

const getAllTracks = createRouter()
  .query('getAllTracks', {
    async resolve() {
      const tracks = await prisma.track.findMany({
        include: {
          artist: true
        }
      })
      return {
        success: true, tracks: tracks
      };
    },
  });


export const appRouter = createRouter()
  .merge(hello)
  .merge(goodbye)
  .merge(createUser)
  .merge(createComment)
  .merge(getComments)
  .merge(removeAllComments)
  .merge(getAllTracks)
  ;

export type AppRouter = typeof appRouter;
