narizx = "";

narizy = "";

function preload() {
    nariz = loadImage("cerdito.png");
}

function setup() {
    lienzo = createCanvas (300, 300);
    lienzo.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    pozenet = ml5.poseNet(video, modelocargado);
    pozenet.on("pose",gotPoses);
}

function draw() {
    image(video,0,0,300, 300);
    image(nariz,narizx,narizy,70,70);
    fill("#7fffd4");
    stroke("#00ffff");
    rect(0,0,300,20);
    rect(0,280,300,20);
    rect(0,0,20,300);
    rect(280,0,20,300);

}

function modelocargado(){
    console.log("El modelo ya se cargo")
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results)
        narizx = results[0].pose.nose.x-30;
        narizy = results[0].pose.nose.y-30;
    }
}

function tomarfoto() {
    save("foto.png")
}