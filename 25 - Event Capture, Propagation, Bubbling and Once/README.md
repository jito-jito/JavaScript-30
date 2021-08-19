# 25 Event Capture, Propagation, Bubbling and Once

In this challenge i learned about event dispatch, event capture, propagation, Bubbling and Once.


// foto


Code:

    const divs = document.querySelectorAll('div')
    const button = document.querySelector('button')

    function logText(e) {
        console.log(this.classList.value)

    // This method stop event propagation when we have a lot listeners for nested elements.

        // e.stopPropagation()
        e.stopPropagation()
    }

    document.body.addEventListener('click', logText)

    divs.forEach(div => div.addEventListener('click', logText, {
        
        // In a propagation of events, this option  invert the order of execute for dispatch events.
        capture: true
    }))
    
    button.addEventListener('click', () => {
        console.log('Click!!!');
    }, {
        
        // This option remove event listener after its execute.
        once: true
    });


