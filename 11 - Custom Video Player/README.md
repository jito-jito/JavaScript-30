# 11 Custom video player

The challenge was create video player controller for Element video of html.

//foto

Steps for complete the challenge:

#### 1.- Get DOM elements:

    const $Button = document.querySelectorAll('.player__button')
    const $sliderButton = document.querySelectorAll('.player__slider')
    const $progress = document.querySelector('.progress')
    const $progressBar = document.querySelector('.progress__filled')
    const $player = document.querySelector('.player')
    const $playerVideo = document.querySelector('.player__video')


#### 2.- Add event listeners:

    // listener for play/pause video and set skips buttons
    $player.addEventListener('click', clickEvent)
    
    // listener for set volume or playBackRate
    $player.addEventListener('mousedown', mouseEvent)
    $player.addEventListener('mouseup', mouseEvent)
    
    // listener for set progress in progress bar
    $playerVideo.addEventListener('timeupdate', progressEvent)
    
    // listener for set parts of the video using progress bar
    $progress.addEventListener('click', progressMov)
    $progress.addEventListener('mousedown', progressMov)
    $progress.addEventListener('mouseup', disableProgressMov)
    

#### 3.- Functions of the listeners:

**ClickEvent function:**

This function listen when do it click in the video element for play/pause video, the same action when do it click in play button or set skip when use set skips buttons.


    function clickEvent(event) {
        let {target} = event
        //console.dir(target)
           if (target.title == 'Toggle Play') {
               togglePlay($playerVideo, target)
           } else if (target.tagName == 'BUTTON') {
               setSkip($playerVideo, target.dataset.skip)
           } else if (target.tagName == 'VIDEO') {
                togglePlay($playerVideo, $Button[0])
           }
       }

**MouseEvent function:**

This function listen when we use the volume and playback rate bar for set for each when click.

    function mouseEvent(event) {
        let { target } = event
        if(target.name == 'volume') {
            target.addEventListener('input', setVolume)
        } else if (target.name == 'playbackRate') {
            target.addEventListener('input', setPlayBackRate)
        }
    }

**ProgressEvent function:**

This function sets the time of the video in the progress bar while the time of the video changes his value.

    function progressEvent(event) {
        let actualtime = event.target.currentTime
        let duration = event.target.duration
        let progress = (actualtime * 100) / duration
        $progressBar.style.setProperty('width', `${progress}%`);
        $progressBar.style.setProperty('flex-basis', `${progress}%`);
    }

**ProgressMov function:**

This function listen while do it click down with the mouse for set parts of the video according to the progress bar.


    function progressMov(event) {
        if(event.type == 'mousedown') {
            // $progress.removeEventListener('click', progressMov)
            $progress.addEventListener('mousemove', mov)
        }
        
        let progressMov = (event.offsetX * $playerVideo.duration) / $progress.offsetWidth
        console.groupCollapsed('dev')
        console.log('diarion total' + $playerVideo.duration)
        console.log('offset' + event.offsetX)
        console.log('progress mov' + progressMov)
        console.log('progress width' + event.target.offsetWidth)
        console.groupEnd('dev')
        $playerVideo.currentTime = progressMov
    }


**DisableProgressMov function:**

This function stops event listener with the function 'progress move' when release the click.

    function disableProgressMov() {
        $progress.removeEventListener('mousemove', mov)
    }


#### 4.- Video controller functions:

**'toggle Play' function** for play/pause video:

    function togglePlay(videoPlayer, element) {
        if (videoPlayer.paused) {
            videoPlayer.play()
            if(element) {
                element.innerText =  '❚ ❚'
            } 
        } else {
            videoPlayer.pause()
            if(element) {
                element.innerText = '►'
            }
        }
    }

**'setSkip' function** for set plus/less the current time video (for setSkip buttons).
    
    function setSkip(videoPlayer, time) {
        videoPlayer.currentTime += parseInt(time)
    }
    
**'setVolume'** for plus/less video volume

    function setVolume(input) {
        $playerVideo.volume = parseFloat(input.target.value)
    }
    
**'setPlayBackRate'** for change playback rate

    function setPlayBackRate(input) {
        $playerVideo.playbackRate = parseFloat(input.target.value) 
    }