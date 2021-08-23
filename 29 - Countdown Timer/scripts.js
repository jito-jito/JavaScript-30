const inputs = document.querySelectorAll('.timer__controls > button')
const customInput = document.querySelector('#custom')
const display = document.querySelector('.display')
let interval

let time = {
    minutes: 0,
    seconds: 0,
}


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


function getLength(number) {
    return number.toString().length
}


inputs.forEach((input) => input.addEventListener('click', setTime))
customInput.addEventListener('submit', setTime)

