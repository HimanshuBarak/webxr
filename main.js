feather.replace();

const controls = document.querySelector('.controls');
const blurwindow = document.querySelector('.blur-container');
const pause = document.querySelector('.pause-btn')
const video = document.querySelector('video')
let streamStarted = false;

const startAR = document.querySelector('.startAR')
const modelViewer = document.querySelector('#model-viewer')
const enterAR = document.querySelector('#enterAR')
startAR.onclick = () =>{
   
    startAR.classList.add('d-none');
  //  modelViewer.classList.add('d-none');
    video.classList.remove('d-none');
    blurwindow.classList.remove('d-none');
    startStream(constraints)
}

enterAR.onclick = () =>{
  const stream = video.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  video.srcObject = null;
  modelViewer.activateAR();
}

const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
    facingMode: {
        exact: 'environment'
      }
  }
};







const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  const gif = document.getElementById("stabilization")
  
 blurwindow.classList.remove('d-none');
  //gif.classList.remove('d-none');
  

 // creating the video element
 
 handleStream(stream);
};


const handleStream = (stream) => {
  video.srcObject = stream;
 
  pause.classList.remove('d-none');
  
  streamStarted = true;
};

const pauseStream = () => {
  video.src = "";
  video.classList.add('d-none')
  play.classList.remove('d-none');
  pause.classList.add('d-none');

};



//pause.onclick = pauseStream;


