$images = document.querySelectorAll('img')

function setClass(entries, observer) {
    entries.forEach((element) => {
    if (element.isIntersecting == true) {
        element.target.classList.add('active')
    } else {
        element.target.classList.remove('active')
    }
    
    })
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(setClass, options)
$images.forEach(element => {
    observer.observe(element)
});