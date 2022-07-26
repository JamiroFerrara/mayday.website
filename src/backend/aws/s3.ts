import axios from 'axios';

  export const uploadFile = async (blob: any) => {
    // const imageURL = 'https://res.cloudinary.com/maydayss/image/upload/v1649228691/sample.jpg'
    // const res = await fetch(imageURL)
    // const blob = await res.arrayBuffer()

    let {data} = await axios.post('/api/aws/uploadFile', {
      name: "test.png"
    });
    let reader = new FileReader();
    reader.onload = function () { console.log(reader.result);};

    // Fetching out an URL
    const url = data.url;
    console.log(url)

    //Uploading the file
    // await axios.put(url, _base64ToArrayBuffer(blob), {
      // headers: {
        // "Content-Type": "image/png",
        // "Access-Control-Allow-Origin": "*",
      // },
    // });
  }

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
