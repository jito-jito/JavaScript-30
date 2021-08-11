const $times = Array.from(document.querySelectorAll('[data-time]'))
let arr = $times.map((e) => {
    [ minutes, seconds ] = e.dataset.time.split(':')
    seconds = parseInt(seconds) + (parseInt(minutes) * 60)

    return seconds
})

let time = arr.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual
})

function parseTime(time) {
    let hours = Math.floor(time / 3600)
    let secondsLeft = time % 3600
    let minutes = Math.floor(secondsLeft / 60)
    secondsLeft = Math.floor(secondsLeft % 60)
    console.log(hours , minutes,  secondsLeft)
}

console.log(time)
parseTime(time)