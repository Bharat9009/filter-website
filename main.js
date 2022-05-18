noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJ08Is-EGfEYrpwii9fz7D71L1qsaMSPJ4g&usqp=CAU');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-5;
    noseY = results[0].pose.nose.y-5;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}