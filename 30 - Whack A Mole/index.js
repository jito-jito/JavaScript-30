const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastAppear;
let points = 0;
let start = false;
let setStop;
let setAppear;

function startGame() {
  console.log('start')
  points = 0
  scoreBoard.innerText = `${points}`
  clearInterval(setStop)
  start = true
  if(start){
    setStopGame()
    randomAppear()
  }
}

function hitMole(e) {
  points += 1
  scoreBoard.innerText = `${points}`
  console.log('hit')
}


function randomAppear() {
  let timeAppear = randomNumber(0.3, 0.8) * 1000
  lastAppear = Math.floor(randomNumber(0, 6))
  holes[lastAppear].classList.toggle('up')
  setAppear = setTimeout(() => {
    holes[lastAppear].classList.toggle('up')
    randomAppear()
  }, timeAppear)

}

function setStopGame() {
    setStop = setInterval(() =>{
    start = false
    clearInterval(setAppear)
    holes[lastAppear].classList.remove('up')
  }, 8000)
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

moles.forEach((mole) => mole.addEventListener('click', hitMole))


