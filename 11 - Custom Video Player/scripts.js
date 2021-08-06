const $Button = document.querySelectorAll('.player__button')
const $sliderButton = document.querySelectorAll('.player__slider')
const $progress = document.querySelector('.progress')
const $progressBar = document.querySelector('.progress__filled')
const $player = document.querySelector('.player')
const $playerVideo = document.querySelector('.player__video')



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

function setSkip(videoPlayer, time) {
    videoPlayer.currentTime += parseInt(time)
}

function setVolume(input) {
    $playerVideo.volume = parseFloat(input.target.value)
}

function setPlayBackRate(input) {
    $playerVideo.playbackRate = parseFloat(input.target.value) 
}

function progressEvent(event) {
    let actualtime = event.target.currentTime
    let duration = event.target.duration
    let progress = (actualtime * 100) / duration
    $progressBar.style.setProperty('width', `${progress}%`);
    $progressBar.style.setProperty('flex-basis', `${progress}%`);
}

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

function mov(event) {
    if(event.type == 'mousedown') {
        $progress.addEventListener('mousemove', mov)
    }
    let progressMov = (event.offsetX * $playerVideo.duration) / $progress.offsetWidth
    $playerVideo.currentTime = progressMov
}

function disableProgressMov() {
    $progress.removeEventListener('mousemove', mov)
}

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

function mouseEvent(event) {
    let { target } = event
    if(target.name == 'volume') {
        target.addEventListener('input', setVolume)
    } else if (target.name == 'playbackRate') {
        target.addEventListener('input', setPlayBackRate)
    }
   

}

$player.addEventListener('click', clickEvent)
$player.addEventListener('mousedown', mouseEvent)
$player.addEventListener('mouseup', mouseEvent)
$playerVideo.addEventListener('timeupdate', progressEvent)

$progress.addEventListener('click', progressMov)
$progress.addEventListener('mousedown', progressMov)
$progress.addEventListener('mouseup', disableProgressMov)



