import axios from 'axios';

const CLOUDFRONT_URL="https://d2cojv32t8nxxy.cloudfront.net/"

export async function convertToMp3(name: String){
  await axios.post('/api/aws/convertMp3', {
    name: name
  })

  return CLOUDFRONT_URL + encodeURIComponent(name.trim());
}
