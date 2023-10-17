HEIGHT = 500
WIDTH = 500

wristX = [0, 0]
fontSize = 0

function modelLoaded(){console.log('Model Intact')}

function setup(){
    canvas = createCanvas(WIDTH, HEIGHT)
    canvas.center()
    
    video = createCapture(VIDEO)
    video.hide()
    
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if (results.length > 0){
        /* console.log(results) */
        wristX[0] = results[0].pose.leftWrist.x
        wristX[1] = results[0].pose.rightWrist.x
    }
}

function draw(){
    background(128, 128, 128)
    /* image(video, 0, 0, WIDTH, HEIGHT) */
    
    fontSize = Math.floor(wristX[0] - wristX[1]) / 5

    fill('#ffbb77')
    textSize(fontSize)
    text('Binacle', 75, 425)
    
    /* document.getElementById('fontSize').innerHTML = fontSize */
}