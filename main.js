video = "";
status = "";
object = "";
function preload() {
    
}
function setup(){
    canvas = createCanvas(380,350);
    canvas.center();

    video = createCapture(380,350);
    video.hide();
}
function draw(){
    image(video,0,0 , 380,350);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}