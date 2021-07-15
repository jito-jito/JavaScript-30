# 02 - JavaScript Drum kit

The challenge is do it work a clock made with html y css.

//foto

Steps to comply with the challenge:

#### 1.-  Get DOM elements

Save on the variable $handClock dom elements for interaction with JS.

    const $handClock = document.querySelectorAll('.hand')

#### 2.- Start function: clockStart, setInterval

I use the 'ClockStart' function that receives an updated date every 1000 milliseconds (using **SetInterval**) to save the **new Date** data in the 'time' variable.


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


#### 3.- Change time to deg

After receiving the data to operate in our watch the DOM, I use the 'parseTimeToDeg' function to change the time values to DEG (to rotate each hand element according to the time received).


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

#### 4.- Adding the time to clock DOM, 'setTime' function

With the data that returns the 'parseTimeToDeg' function I run the 'SetTime' function to search using a **forEach** and a **switch** the appropriate DOM element to give the associated time values.

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

I use the CSS Transform property to move every hand simulating the clock.

    .'time'-hand {
        transform: rorate('time'deg);
    }