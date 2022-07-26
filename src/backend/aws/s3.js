import axios from 'axios';

export const uploadImage = async (file) => {
  // const imageURL = 'https://res.cloudinary.com/maydayss/image/upload/v1649228691/sample.jpg'
  // const res = await fetch(imageURL)
  // const blob = await res.arrayBuffer()

  let {data} = await axios.post('/api/aws/uploadFile', {
    name: "test.png"
  });

  // Fetching out an URL
  const url = data.url;

  //Uploading the file
  await axios.put(url, dataURItoBlob(file), {
    headers: {
      "Content-Type": "image/png",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}
