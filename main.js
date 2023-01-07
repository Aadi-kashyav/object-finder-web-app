video = "";
status = "";
objects = [];
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
    if(status != ""){
        objectDetector.detect(video,gotResult);
        for(i = 0 ; i < objects.length ; i++){
            if(objects[i].label == object){
                document.getElementById("object_status").innerHTML = object + "Found";
            }
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill("#ff0000");
            percent =  floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y * 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height); 

        }
        
    }
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    object = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}