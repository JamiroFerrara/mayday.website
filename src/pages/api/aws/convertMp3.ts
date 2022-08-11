import {NextApiRequest, NextApiResponse} from "next";
import elastictranscoder from 'aws-sdk/clients/elastictranscoder';

// Create S3 instance
const transcoder = new elastictranscoder({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: "eu-west-1",
  signatureVersion: "v4",
});

let transcoder_config = {
  videoBucket: 'mayday-bucket',
  transcode: {
    video: {
      pipelineId: '1660160312369-5q82e9',
      outputKeyPrefix: 'mp3/', // put the video into the transcoded folder
      presets: [ // Comes from AWS console
        {presetId: '1351620000001-300020', suffix: '.mp3'},
      ]
    }
  }
}

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
    PipelineId: transcoder_config.transcode.video.pipelineId,
    Input: {
        Key: name
    },
    OutputKeyPrefix: transcoder_config.transcode.video.outputKeyPrefix,
    Outputs: transcoder_config.transcode.video.presets.map(p => {
      return {Key: `${name}${p.suffix}`, PresetId: p.presetId};
    })
  }

  transcoder.createJob(params, (err, data) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.status(400).json({});
    } else {
      let jobId = data.Job?.Id;
      console.log(`JobId: ${jobId}`, data);
      res.status(200).json({jobId});
    }
  })

};
