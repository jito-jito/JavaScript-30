# 13 Slide in on scroll

This challenge was appear/disapear images when see or no in the screen.

//foto


Steps for complete the challenge.

#### 1.- Get all image elements

    $images = document.querySelectorAll('img')

#### 2.- Create intersection observer

Use 'intersection observer' for each image for appear/desappear images when we can see it un the screen or no.

The 'setClass' function add/remove class 'active' in the element when see or not the image in the screen. 


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


*In this case i let in the root the wes bos solution for see and learn about it.*