const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// import VoiceAssistant from "./voiceAssistant";


function speak(sentence) {
    // var speech = new SpeechSynthesisUtterance();
    const text_to_speak = new SpeechSynthesisUtterance(sentence);
        text_to_speak.rate = -15;
        text_to_speak.pitch = 0.9;
        // text_to_speak.text = text;
        text_to_speak.voice = window.speechSynthesis.getVoices()[12];
        setTimeout(function(){text_to_speak.voice = window.speechSynthesis.getVoices()[12];
        },10);
        console.log(text_to_speak);

    window.speechSynthesis.speak(text_to_speak);
}
let wished = false;

function wishOnce(){
    if(!wished) wishMe();
}
function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning, ");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
    wished = true;
}

window.addEventListener('load', ()=>{
    wishOnce();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    setTimeout(function(){speech.voice = window.speechSynthesis.getVoices()[12];
    },10);
    console.log(speech);

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')|| message.includes('hi')|| message.includes('hi chitti')
    || message.includes('hey chitti')|| message.includes('hello chitti')) {
        const finalText = "Hello, How can I help you";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('Who are you')) {
        const finalText = "I am Chit ty";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Chit ty";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }


    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('Open youtube') || message.includes('Find youtube')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on Youtube regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }


    window.speechSynthesis.speak(speech);
}