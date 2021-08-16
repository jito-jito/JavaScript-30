# 22 Follow Along Link Highlighter

This challenge was to follow when pointer pass onto 'a' elements and show a white figure around the element.

//foto


Steps to complete the challenge:


#### 1.- Get DOM elements and create variables:

    // for get all 'a' elements
    const $a = document.querySelectorAll('a')
    // for create the element 'span' for show white square around the 'a' elements
    const $highlight = document.createElement('span')
    $highlight.classList.add('highlight')
    document.body.appendChild($highlight)



#### 2.- Add event listener:

I use 'mouse enter' event for each 'a' element and to move '$highlight' following the pointer

    $a.forEach((e) => e.addEventListener('mouseenter', moveHighlight))



#### 3.- 'moveHighlight' function:

This function recives coordinates for each element and move the '$highlight' element according to the pointer of the mouse.


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
    