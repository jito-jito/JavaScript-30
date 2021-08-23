# 28 - Video Speed Controller

This challenge was create a speed bar for the video player for execute when pass over the bar.


//foto


Steps to complete the challenge:

#### 1.- Get DOM elements:

    // For get the speed bar
    const speedbar = document.querySelector('.speed')
    // For get the video player
    const videoPlayer = document.querySelector('.flex')


#### 2.- Add event listener and Set Speed function:

This event execute the 'setSpeed' function when we pass over the speed container with the mouse for set the speed according to the position of the pointer in the speed container.


    speedbar.addEventListener('mousemove', setSpeed)

    function setSpeed(e) {
        let height = (e.layerY * 100) / speedbar.offsetHeight 
        let speed = (e.layerY * 4) / speedbar.offsetHeight 
        speed = speed.toFixed(2)
        console.log(e.layerY)
        let bar = speedbar.querySelector('.speed-bar')
        bar.style.height = `${height}%`
        bar.innerText = `${speed}x`
        videoPlayer.playbackRate = speed
    }


   