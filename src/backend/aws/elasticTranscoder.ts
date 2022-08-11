import axios from 'axios';

export function convertToMp3(name: String){
  return axios.post('/api/aws/convertMp3', {
    name: name
  })
}
