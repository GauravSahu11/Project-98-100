var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    Content = event.results[0][0].transcript;
    console.log(Content);


    if (Content == "selfie") {
        console.log("selfie");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var uttrThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(uttrThis);
    Webcam.attach(camera);

    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var uttrThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(uttrThis);

    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var uttrThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(uttrThis);

    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();

    }, 15000);

}

Webcam.set({
    with: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {

    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id = "selfie1" src ="' + data_uri + '"/>'
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id = "selfie2" src ="' + data_uri + '"/>';
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id = "selfie3" src ="' + data_uri + '"/>';
        }
        
    });
}