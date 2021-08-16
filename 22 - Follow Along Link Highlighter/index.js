// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const $a = document.querySelectorAll('a')
const $highlight = document.createElement('span')
$highlight.classList.add('highlight')
document.body.appendChild($highlight)

function moveHighlight(e) {
 // console.log(e.target.offsetHeight)
  let coords = {
    width: e.target.offsetWidth,
    height: e.target.offsetHeight,
    top: e.target.offsetTop + e.target.offsetParent.offsetTop,
    left: e.target.offsetLeft + e.target.offsetParent.offsetLeft
  }

  $highlight.style.transform = `translate(${coords.left - 2.5}px, ${coords.top - 2.5}px)`
  $highlight.style.width = `${coords.width + 5}px`
  $highlight.style.height = `${coords.height + 5}px`
}

$a.forEach((e) => e.addEventListener('mouseenter', moveHighlight))