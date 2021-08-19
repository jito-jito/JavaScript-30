let msg = new SpeechSynthesisUtterance('hola hola');
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const html = document.querySelector('html')


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

function loadVoices(e) {
    let results = speechSynthesis.getVoices()
    voices = results.filter((voice) => voice.lang.includes(html.lang))
    renderVoices()

}

function renderVoices(){
    let renderData = ''
    voices.forEach((voice) => {
        renderData += `<option value="">${voice.name}</option>`
    })
    voicesDropdown.innerHTML = renderData
}

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




speakButton.addEventListener('click', speak)
stopButton.addEventListener('click', ( ) => speechSynthesis.cancel())
speechSynthesis.addEventListener('voiceschanged', loadVoices)
