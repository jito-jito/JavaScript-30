# 30 Whack A Mole

This challenge was create a whack a mole game:

//foto

Steps to complete the challenge:


#### 1.- Get DOM elements and create variables:

    // For get hole elements
    const holes = document.querySelectorAll('.hole');
    // For get the score element
    const scoreBoard = document.querySelector('.score');
    // For get mole elements
    const moles = document.querySelectorAll('.mole');

    // For save last appear of the mole
    let lastAppear;
    // For save and set the score in the html
    let points = 0;
    // For know when start/stop the game
    let start = false;
    // For set interval for the stop the game
    let setStop;
    // For set interval for appear/disappear mole
    let setAppear;


#### 2.- Add event listener and onClick:

I used 'onClick' listener for start the game, and 'click' listener for set the score using 'hitMole' function

html:

    <button onClick="startGame()">Start!</button>
    
JavaScript:

    moles.forEach((mole) => mole.addEventListener('click', hitMole))
    

#### 3- Functions:
    
The 'startGame' function for begin the game

    function startGame() {
      console.log('start')
      points = 0
      score.innerText = `${points}`
      clearInterval(setStop)
      start = true
      if(start){
        setStopGame()
        randomAppear()
      }
    }

The 'hitMole' function for set the score in the html
    
    function hitMole(e) {
      points += 1
      score.innerText = `${points}`
      console.log('hit')
    }
    
The 'randomAppear' function for appear/disappear the mole 
    
    function randomAppear() {
      let timeAppear = randomNumber(0.3, 0.8) * 1000
      lastAppear = Math.floor(randomNumber(0, 6))
      holes[lastAppear].classList.toggle('up')
      setAppear = setTimeout(() => {
        holes[lastAppear].classList.toggle('up')
        randomAppear()
      }, timeAppear)
    
    }

The 'setStopGame' function for stop the game when passed 8 seconds
    
    function setStopGame() {
        setStop = setInterval(() =>{
        start = false
        clearInterval(setAppear)
        holes[lastAppear].classList.remove('up')
      }, 8000)
    }

The 'randomNumber' function for obtain random number 
    
    function randomNumber(min, max) {
      return Math.random() * (max - min) + min
    }
    
