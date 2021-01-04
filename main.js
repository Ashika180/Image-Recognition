Webcam.set({
    width: 450,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function Take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id= 'captured_img' src= " + data_uri + ">";
});
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ia2i5zCI9/model.json", Model_loaded)

function Model_loaded(){
    console.log("Model successfuly loaded.");
}

function Check(){
image = document.getElementById("captured_img");
classifier.classify(image, Result);
}

function Result(error, results){
if(error){
    console.error("Error");
}
else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}