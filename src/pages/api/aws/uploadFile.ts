import {NextApiRequest, NextApiResponse} from "next";
import S3 from 'aws-sdk/clients/s3';

// Create S3 instance
const s3 = new S3({
  accessKeyId: "AKIAU2XPML7OPWGF62UX",
  secretAccessKey: "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",
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

  try {
    let {name, type} = req.body;

    // Setting parameteres - ACL will allow us to see a file
    const fileParams = {
      Bucket: "mayday-cloud",
      Key: name,
      ContentType: type,
      Expires: 600,
    }

    // Generate presigned URL
    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    res.status(200).json({url});
  } catch(err){
    res.status(400).json({message: err});
  }

};
