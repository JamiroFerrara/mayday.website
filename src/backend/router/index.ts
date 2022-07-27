import {mergeRefs} from '@mantine/hooks';
import {useQuery} from 'react-query';
import { z } from 'zod';
import { createRouter } from '../context'
import { prisma } from '../utils/prisma'

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

const addTrack = createRouter()
  .mutation('addTrack', {
    input: z.object({ 
      title: z.string(),
      price: z.number(),
      artists: z.array(z.number()),
      vinyls: z.array(z.string()),
      description: z.string(),
      url: z.string(),
      artworkUrl: z.string(),
      bannerUrl: z.string(),
    }),
    async resolve({ input }) {
      const track = await prisma.track.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          url: input.url,
          artworkUrl: input.artworkUrl,
          bannerUrl: input.bannerUrl,
        }
      })

      input.vinyls.forEach(async (vinyl) => {
        await prisma.tracksOnVinyl.create({
          data: {
            trackId: track.id,
            vinylId: vinyl.trim(),
          }
        })
      })

      input.artists.forEach(async (artistId) => {
        await prisma.tracksOnArtists.create({
          data: {
            trackId: track.id,
            artistId: artistId,
          }
        })
      })

      return {
        success: true, track: track, vinyls: input.vinyls
      };
    },
  });

const getAllTracks = createRouter()
  .query('getAllTracks', {
    async resolve() {
      const tracks = await prisma.track.findMany({
        include: {
          artists: {
            include: {
              artist: true
            }
          },
        }
      })
      return {
        success: true, tracks: tracks
      };
    },
  });

const getAllArtists = createRouter()
  .query('getAllArtists', {
    async resolve() {
      const artist = await prisma.artist.findMany({ })
      return {
        success: true, artist: artist
      };
    },
  });

const getAllVinyls = createRouter()
  .query('getAllVinyls', {
    async resolve() {
      const vinyls = await prisma.vinyl.findMany({ })
      return {
        success: true, vinyls: vinyls
      };
    },
  });

export const appRouter = createRouter()
  .merge(createUser)
  .merge(createComment)
  .merge(getComments)
  .merge(removeAllComments)
  .merge(getAllTracks)
  .merge(getAllArtists)
  .merge(getAllVinyls)
  .merge(addTrack)
  ;

export type AppRouter = typeof appRouter;
