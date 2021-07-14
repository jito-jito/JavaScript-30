const $keys = document.querySelectorAll('.key')
const $audios = document.querySelectorAll('audio')
window.addEventListener('keydown', verifyKey)

function verifyKey(event) {
    let { keyCode } = event

    $keys.forEach(($key) => {
      let $keyCode= $key.dataset.key
      if( keyCode == $keyCode) {
        $key.addEventListener('transitionend', function () {removeAnimation($key)});
        $key.classList.add("playing")
        playSound(keyCode)
      }
    })
}

function playSound(keyCode) {
    $audios.forEach(($audio) => {
      let $keyCode = $audio.dataset.key

      if(keyCode == $keyCode) {
        $audio.currentTime = 0
        $audio.play()
      }

    })
}

function removeAnimation($key) {    
    $key.classList.remove("playing")

}