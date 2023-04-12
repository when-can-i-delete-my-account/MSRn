Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' )

console.log('ml5.version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fm6WSwuEt/model.json', modelLoaded)

function modelLoaded(){
    console.log('Model has been loaded.')
}