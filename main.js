var x = 0;
var y = 0;
function preload(){
    mustache_filter = loadImage("R.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
    
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_filter, x, y, 50, 25);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        console.log("nose y: "+results[0].pose.nose.y);
        x = results[0].pose.nose.x - 25;
        y = results[0].pose.nose.y + 20;
        
    };
}