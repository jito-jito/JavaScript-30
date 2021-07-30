# 10 Hold Shift and Check Checkboxes

Create code for select all boxes between two checks, only if press 'shift' key in the last check


//foto



Steps to complete the challenge


#### 1.- Get DOM elements

I get all checks using querySelectorAll.

    const $cheks = document.querySelectorAll('.item > input')


#### 2.- Event listener, handleCheck function

I created 'event listener' for each check in DOM and execute 'handleCheck' function to verify when there is click to start logic.


	$cheks.forEach(check => check.addEventListener('click', handleCheck))


#### 3.- handleCheck function, lastCheck variable

The 'handleCheck' function verify if you press shift for checked all elements between 2 checks or all for down if only press one.

For each event, if you press 'shift' this function verify what check are the first/last press for checked between they using 'isBetween' variable.

'last Check' variable saves the last clicked check.

    let lastCheck

    function handleCheck(event) {
      console.log(event)
    
      let isBetween = false
      if (event.shiftKey) {
        $cheks.forEach((check) => {
          if (check === this || check === lastCheck) {
            isBetween = !isBetween
          }
          if(isBetween) {
            check.checked = true
          }
        })
      }
      lastCheck = this
    
    }