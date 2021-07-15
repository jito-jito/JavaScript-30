const $handClock = document.querySelectorAll('.hand')

function clockStart() {     
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
    const timeDeg = parseTimeToDeg(time)

    setTime(timeDeg)
}

function parseTimeToDeg({ hour, minutes, seconds }) {
    hour = ((380 / 12) * (hour-12)) + 90
    minutes = ((380 / 60) * minutes) + 90
    seconds = ((380 / 60) * seconds) + 90

    return {
    hour,
    minutes,
    seconds
    }

}

function setTime({hour, minutes, seconds}) {
    console.log(hour, minutes, seconds)
    $handClock.forEach(($hand) => {
        switch ($hand.classList[1]) {
        case 'hour-hand':
            $hand.style.setProperty("transform", `rotate(${hour}deg)`);
            break;
        case 'min-hand':
            $hand.style.setProperty("transform", `rotate(${minutes}deg)`);
            break;
        case 'second-hand':
            $hand.style.setProperty("transform", `rotate(${seconds}deg)`);
            break;
        }
    })
}

setInterval(clockStart, 1000);
    