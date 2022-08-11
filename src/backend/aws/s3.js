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

export const uploadAudio = async (file, name, folder, type) => {
  const blob = file;
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

export const deleteTrack = async (trackUrl, bannerUrl, artworkUrl) => {
  try {
    var trackName = trackUrl.replace(CLOUDFRONT_URL, "");
    var bannerName = bannerUrl.replace(CLOUDFRONT_URL, "");
    var artworkName = artworkUrl.replace(CLOUDFRONT_URL, "");
    trackName = decodeURIComponent(trackName);
    bannerName = decodeURIComponent(bannerName);
    artworkName = decodeURIComponent(artworkName);
    console.log(trackName, bannerName, artworkName);

    deleteFile(trackName.trim());
    deleteFile("mp3/" + trackName.trim() + ".mp3");
    deleteFile(bannerName.trim());
    deleteFile(artworkName.trim());

    console.log("Deleted");

    return "Files Deleted!"
  } catch (error) {
    return error;
  }
}

export const deleteFile = async (fileName) => {
  let {data} = await axios.post('/api/aws/deleteFile', {
    name: fileName,
  });

  return data;
}
