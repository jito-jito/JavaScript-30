const $cheks = document.querySelectorAll('.item > input')
let lastCheck

function handleCheck(event) {

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

$cheks.forEach(check => check.addEventListener('click', handleCheck))
