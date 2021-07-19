$panels = document.querySelectorAll('.panel')
document.addEventListener('click', toggleOpen)


function toggleOpen(event) {
    document.addEventListener('transitionend', toggleActive)
    event.target.parentElement.classList.toggle('open')
}

function toggleActive(event){
    if(event.propertyName == "font-size") {
    event.target.classList.toggle('activeP')
    }
}