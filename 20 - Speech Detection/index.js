const $div = document.querySelector('.words')
let p = document.createElement('p')
$div.appendChild(p)

const speakRecognition = new SpeechRecognition();

function seeResults(e) {
    const results = Array.from(e.results)

    results.map((element) => {

    const result = Array.from(element)

    result.map((e) => {
        p.innerText = e.transcript
    })

    if(element.isFinal) {
        p = document.createElement('p')
        $div.appendChild(p)
    }

    });
    

}



speakRecognition.interimResults = true
speakRecognition.start()


speakRecognition.addEventListener('result', seeResults)
speakRecognition.addEventListener('end', speakRecognition.start)