# 18 Adding Up Time with Reduce

This challenge was to sum all the times of the 'data-time' atributes into elements 'li'.

//foto

Steps to complete the challenge:

#### 1.- Get DOM elements:

Use 'Array.from'  for can use map method in the variable $times.

    const $times = Array.from(document.querySelectorAll('[data-time]'))


#### 2.- Get total time in seconds:

I use map method for received time string(from data-time atribute) for each element and save value in seconds in a new variable. 

    let arr = $times.map((e) => {
        [ minutes, seconds ] = e.dataset.time.split(':')
        seconds = parseInt(seconds) + (parseInt(minutes) * 60)
        
        return seconds
    })


Use 'reduce' method for get all seconds of all elements in a variable.

    let time = arr.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual
    })    


#### 3.- ParseTime function:

For to distribute all seconds a hours, minutes and seconds according to correspondence.

  
    function parseTime(time) {
        let hours = Math.floor(time / 3600)
        let secondsLeft = time % 3600
        let minutes = Math.floor(secondsLeft / 60)
        secondsLeft = Math.floor(secondsLeft % 60)
        console.log(hours , minutes,  secondsLeft)
    }
