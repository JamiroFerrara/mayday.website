import {NextApiRequest, NextApiResponse} from "next";
import S3 from 'aws-sdk/clients/s3';

// Create S3 instance
const s3 = new S3({
  accessKeyId: process.env.S3_ACCCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: "eu-west-3",
  signatureVersion: "v4",
});

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

  let {name} = req.body;

  const params = {
    Bucket: "mayday-cloud",
    Key: name,
  }

  try {
    await s3.headObject(params).promise();
    console.log("File exists");
    try {
      await s3.deleteObject(params).promise();
      console.log("File deleted");
    } catch (e) {
      console.log("File not deleted : " + JSON.stringify(e));
    }

  } catch(err){
    res.status(400).json({message: err});
  }
};
