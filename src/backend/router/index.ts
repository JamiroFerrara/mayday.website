import { z } from 'zod';
import { createRouter } from '../context'

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


export const appRouter = createRouter()
  .merge(hello)
  .merge(goodbye)
  ;
