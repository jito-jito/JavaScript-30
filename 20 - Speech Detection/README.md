# 20 Speech Detection

This challlenge was to use speech detection for write the results in the document html.

// foto

Steps to complete the challenge:

#### 1.- Get DOM element and create variables:

    // for get element of the DOM than will saves the results 
    const $div = document.querySelector('.words')
    // element for to write the results in screen
    let p = document.createElement('p')
    $div.appendChild(p)
    
    // for create a new instance of speak recognition and to begin listen
    const speakRecognition = new SpeechRecognition();

#### 2.- Add event listeners:

The 'result' event execute 'seeResults' function when we speak something near the microfone for see results in the html.

    speakRecognition.addEventListener('result', seeResults)

The 'end' event execute 'seeReults' function again when we end to speak for listen again the before event and await results.

    speakRecognition.addEventListener('end', speakRecognition.start)
    
    // for get each result obtein of the instance
    speakRecognition.interimResults = true
    // for begin to listen the microfone
    speakRecognition.start()


#### 3.- See results function:

This function recives the data of the speak recognition and add results in a 'p' element, when finish, create a new 'p' element for begin to write again.

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