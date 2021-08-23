# 29 - Countdown Timer

This challenge was to create a time down that receives the inputs and set a countdown.

//foto

Steps to complete the challenge:

#### 1.- Get DOM elements and set variables:
    
    // Inputs for set time
    const inputs = document.querySelectorAll('.timer__controls > button')
    const customInput = document.querySelector('#custom')
    // Elements for display time left in the screen
    const display = document.querySelector('.display')
    
    // For set/remove interval function with the time
    let interval
    
    // The time received in the inputs
    let time = {
        minutes: 0,
        seconds: 0,
    }

#### 2.- Add event listeners:

For recives the time of the inputs and begin the countdown

    inputs.forEach((input) => input.addEventListener('click', setTime))
    customInput.addEventListener('submit', setTime)

#### 3.- Functions:

The 'setTime' function for to receive the input, parse time and to clean last interval

    function setTime(event) {
    
        if(interval) {
            clearInterval(interval)
        }
        
        time.minutes = 0
        time.seconds = 0
    
        event.preventDefault()
        if(event.type == "click" && this.dataset.time <= 60) {
            console.log('< 60')
            loadTime(0, parseInt(this.dataset.time))
            
        } else if (event.type == "click") {
            console.log('> 60')
            let minutes = this.dataset.time / 60
            loadTime(parseInt(minutes), 0)
    
        } else {
            let input = this.querySelector('input')
            console.log(input.value)
            loadTime(parseInt(input.value))
        }
    
    }
    

The 'loadTime' function for to recieve the time of the 'setTime' function and begin to countdown.
    
    function loadTime(minutes = 0, seconds = 0) {
        time.minutes = minutes
        time.seconds = seconds
    
        renderData(time.minutes, time.seconds)
    
        // prerender time
        renderTime(time.minutes, time.seconds)
        
        if(time.minutes == 0 && time.seconds == 0) {
            clearInterval(interval)
        } else if (time.seconds == 0) {
            time.seconds = 59
            time.minutes -= 1
        } else if (time.seconds > 0) {
            time.seconds -=1
        }
    
        // set count time
        interval = setInterval(() => {
    
            console.log(time.minutes, time.seconds)
            renderTime(time.minutes, time.seconds)
            
            if(time.minutes == 0 && time.seconds == 0) {
                clearInterval(interval)
            } else if (time.seconds == 0) {
                time.seconds = 59
                time.minutes -= 1
            } else if (time.seconds > 0) {
                time.seconds -=1
            }
        }, 1000)
    
    }

The 'renderTime' function for charge the time in the DOM
    
    function renderTime(minutes, seconds) {
        const minutesLen = getLength(minutes)
        const secondsLen = getLength(seconds)
        const timeLeft = display.querySelector('h1')
    
        if(minutesLen < 2 && secondsLen < 2) {
            timeLeft.innerText = `0${minutes}:0${seconds}`
        } else if (minutesLen > 1 && secondsLen > 1) {
            timeLeft.innerText = `${minutes}:${seconds}`
        } else if (minutesLen > 1 && secondsLen < 2) {
            timeLeft.innerText = `${minutes}:0${seconds}`
        } else if (secondsLen > 1 && minutesLen < 2) {
            timeLeft.innerText = `0${minutes}:${seconds}`
        }
    }
    
The 'renderData' function for charge the time end in the DOM
    
    function renderData(minutes, seconds) {
    
        const endTime = display.querySelector('p')
        let date = new Date()
        let dateMinutes = date.getMinutes()
        let dateSeconds = date.getSeconds()
        date.setMinutes(minutes + dateMinutes)
        date.setSeconds(seconds + dateSeconds)
        let minutesLeft = getLength(date.getMinutes())
        
        console.log(date)
        if(minutesLeft <= 1) {
            endTime.innerText = `Be Back At ${date.getHours()}:0${date.getMinutes()}`
        } else {
            endTime.innerText = `Be Back At ${date.getHours()}:${date.getMinutes()}`
    
        }
    
    }
    

The 'getLength' function for obtain the digits number of a number
    
    function getLength(number) {
        return number.toString().length
    }
    

