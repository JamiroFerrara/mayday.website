import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from '../../../backend/utils/prisma'

export const config = {
  api: {
      bodyParser: {
        sizeLimit: "10mb"
    }
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Allow only POST requests
  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  try {

    const track = await prisma.track.create({
      data: {
        title: "test",
        description: "test",
        price: 0,
        mp3: "test",
        url: "test",
        artworkUrl: "test",
        bannerUrl: "test",
        genreId: "cl64tojqe0024p2uoms823uoh"
      }
    })

    await prisma.tracksOnVinyl.create({
      data: {
        trackId: track.id,
        vinylId: "cl5ph0j860029jbi5d88m8ue1",
      }
    })

    await prisma.tracksOnArtists.create({
      data: {
        trackId: track.id,
        artistId: 1,
      }
    })

    console.log(track);

    res.status(200).json({track: track});
  } catch(err){
    res.status(400).json({message: err});
  }

};
