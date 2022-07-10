import WaveSurfer from 'wavesurfer.js';

const url = 'https://d31xpgvwmv5tnx.cloudfront.net/Stiwie%20-%20Quadruplex.mp3'

export default function Sandbox2(){
  var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
  });

  wavesurfer.on('ready', function () {
      wavesurfer.play();
  });

  wavesurfer.load('url');

  return (
    <div className='bg-white' id="waveform"></div>
  )
}
