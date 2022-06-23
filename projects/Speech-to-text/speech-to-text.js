let SpeechRecognition = window.webkitSpeechRecognition;
// console.log(SpeechRecognition);

let recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";

let textBox = document.querySelector("#voiceTextBox");
let instruction = document.querySelector(".instruction");
let btnStart = document.querySelector("#btn-start");
let btnRestart = document.querySelector("#btn-Restart");
let clickCount = 0;

recognition.onstart = function() {
    instruction.innerHTML = "Start listening...";
};

recognition.onspeechend = function() {
    recognition.stop();
    instruction.innerHTML = "Stop listening...";
};
let text = "";
recognition.onresult = function(e) {
    text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    textBox.innerHTML = text;
    //   let transcript = e.results[0][0].transcript;
    //   textBox.innerHTML = transcript;
    //   console.log(transcript);
    //   transcript = " ";
};

btnStart.addEventListener("click", () => {
    clickCount += 1;
    if (clickCount % 2 !== 0) {
        recognition.start();
    } else {
        recognition.stop();
    }
});

$("#btn-Restart").click(() => {
    $("#voiceTextBox").empty();
    recognition.stop();
});