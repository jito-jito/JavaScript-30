#  Speech Synthesis

This challenge was to use speech synthesis for read text of an input and set options for use the speak interface.


//foto


Steps to complete the challenge:


#### 1.- Get DOM elements and create variables:
	
	// for create a new SpeechSynthesisUtterance for each call a the 'speak' function 
    let msg = new SpeechSynthesisUtterance('');
	// for received all voices of the system
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector('#speak');
    const stopButton = document.querySelector('#stop');
	// for recive lang atribute
    const html = document.querySelector('html')


#### 2.- Add event listeners:

    speakButton.addEventListener('click', speak)
    stopButton.addEventListener('click', (e) => speechSynthesis.cancel())
    speechSynthesis.addEventListener('voiceschanged', loadVoices)


#### 3.- Functions:

The 'loadVoices' function to receive all voices enabled in the system and save the results.
    
    function loadVoices(e) {
        let results = speechSynthesis.getVoices()
        voices = results.filter((voice) => voice.lang.includes(html.lang))
        renderVoices()
    
    }

The 'renderVoices' function for charge the voices results in the html.
    
    function renderVoices(){
        let renderData = ''
        voices.forEach((voice) => {
            renderData += `<option value="">${voice.name}</option>`
        })
        voicesDropdown.innerHTML = renderData
    }
    
The 'getVoice' function for to set voice in the configuration.

    function getVoice() {
        let selectedVoice;
        voicesDropdown.querySelectorAll('option').forEach((voice) => { if(voice.selected === true) {selectedVoice = voice} })
        console.log(selectedVoice.text)
        let result = voices.find((voice) => {
            return voice.name.includes(selectedVoice.text)
        })
    
        console.log(result)
        return result
    
    }

The 'speak' function for received all configurations settled in html and read the text.

    function speak(e) {
        let config = {
            input: '',
            rate: 0,
            pitch: 0,
            voice: {},
        }
        config.voice = getVoice()
    
        options.forEach((input) => {
            if(input.name == 'rate' ) {
            config.rate = parseFloat(input.value)
            } else if (input.name == 'pitch') {
            config.pitch = parseFloat(input.value)
            } else {
            config.input = input.value
            }    
        })
    
        msg = new SpeechSynthesisUtterance(config.input)
        msg.rate =  config.rate
        msg.pitch =  config.pitch
        msg.voice = config.voice
        speechSynthesis.speak(msg)
    }