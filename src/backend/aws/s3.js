import axios from 'axios';
import {dataURItoBlob} from '../../utils/'

const CLOUDFRONT_URL="https://d2cojv32t8nxxy.cloudfront.net/"

export const uploadBanner = async (file, name) => {
  const fileName = "Banner/" + name;
  let {data} = await axios.post('/api/aws/uploadFile', {
    name: fileName
  });

  const url = data.url;
  const blob = dataURItoBlob(file);

  //Uploading the file
  await axios.put(url, blob, {
    headers: {
      "Content-Type": file.type,
      "Access-Control-Allow-Origin": "*",
    },
  });
}
