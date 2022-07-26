import axios from 'axios';
import {dataURItoBlob} from '../../utils/'

const CLOUDFRONT_URL="https://d2cojv32t8nxxy.cloudfront.net/"

export const uploadFile = async (file, name, folder, type) => {
  const blob = dataURItoBlob(file);
  const fileName = folder + "/" + name + "." + type;

  let {data} = await axios.post('/api/aws/uploadFile', {
    name: fileName,
    type: blob.type,
  });

  const url = data.url;

  //Uploading the file
  await axios.put(url, blob, {
    headers: {
      "Content-Type": file.type,
      "Access-Control-Allow-Origin": "*",
    },
  });

  return CLOUDFRONT_URL + encodeURIComponent(fileName.trim());
}
