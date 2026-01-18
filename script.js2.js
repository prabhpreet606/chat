const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";

function startVoice() {
  recognition.start();
}

recognition.onresult = e => {
  userInput.value = e.results[0][0].transcript;
};
