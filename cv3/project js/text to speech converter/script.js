const textarea = document.querySelector('textarea'),
voiceList = document.querySelector('select'),
speechBtn = document.querySelector('button');


let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for (let voice of synth.getVoices()){
        // selecting 'Google US English' voice as default
        let selected = voice.name === 'Google US English' ? 'selected' : '';
        // creating an option tag passing vioce name and voice language
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend', option) // inserting option tag beforeend of select tag
    }
}

synth.addEventListener('voiceschanged', voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text); //SpeechSynthesisUtterance represents a speech request
    for (let voice of synth.getVoices()){
        // if the available device voice name is equal to the user selected voice name
        //then set the speech voice to the user selected voice
        if(voice.name === voiceList.value){
            utterance.voice = voice
        }
    }
    synth.speak(utterance); // speechSynthesis is the controller interface for the speech service
                            //speak method of speechSynthesis add an utterance to the queue for speak
}

speechBtn.addEventListener('click', e =>{
    e.preventDefault();
    if(textarea.value !== ''){
        if(!synth.speaking){ // if an utternance/speech is not currently in the process of speaking

        
        textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            //if isSpeaking is true then change it's value to false and resume the utternance/speech
            // else change it's value to true and pause the speech
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = 'Pause speech';
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = 'Resume speech';
            }

            //checking is utternance/speech in speaking process or not every 100ms
            // if not then set the value of isSpeaking to true and change the button text
            setInterval(() =>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = 'Convert to speech'
                }
            });
        }else{
            speechBtn.innerText = 'Convert to speech'
        }
    }
});