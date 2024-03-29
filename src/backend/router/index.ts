import {useQuery} from 'react-query';
import { z } from 'zod';
import { createRouter } from '../context'
import { prisma } from '../utils/prisma'

const addTrack = createRouter()
  .mutation('addTrack', {
    input: z.object({ 
      title: z.string(),
      price: z.number(),
      artists: z.array(z.number()),
      vinyls: z.array(z.string()),
      genre: z.string(),
      description: z.string(),
      url: z.string(),
      mp3: z.string(),
      artworkUrl: z.string(),
      bannerUrl: z.string(),
    }),
    async resolve({ input }) {

      console.log("Track mutation started", input)

      const track = await prisma.track.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          mp3: input.mp3,
          url: input.url,
          artworkUrl: input.artworkUrl,
          bannerUrl: input.bannerUrl,
          genreId: input.genre
        }
      })

      console.log(track);

      for (let artist of input.artists) {
        await prisma.tracksOnArtists.create({
          data: {
            trackId: track.id,
            artistId: artist,
          }
        })
      }

      for (let vinyl of input.vinyls) {
        await prisma.tracksOnVinyl.create({
          data: {
            trackId: track.id,
            vinylId: vinyl.trim(),
          }
        })
      }

      return {
        success: true, track: track, vinyls: input.vinyls
      };
    },
  });

const deleteTrack = createRouter()
  .mutation('deleteTrack', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      await prisma.track.delete({
        where: {
          id: input.id,
        },
      });

      await prisma.tracksOnVinyl.deleteMany({
        where: {
          trackId: input.id,
        },
      });

      await prisma.tracksOnArtists.deleteMany({
        where: {
          trackId: input.id,
        },
      });

      return {
        success: true,
      };
    }
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

const getAllGenres = createRouter()
  .query('getAllGenres', {
    async resolve() {
      const genres = await prisma.genre.findMany({ })
      return {
        success: true, genres: genres
      };
    },
  });

export const appRouter = createRouter()
  .merge(getAllTracks)
  .merge(getAllArtists)
  .merge(getAllVinyls)
  .merge(addTrack)
  .merge(getAllGenres)
  .merge(deleteTrack)
  ;

export type AppRouter = typeof appRouter;
