#01 - JavaScript Drum kit

The challenge is be touching a sound when you press one of the keys
indicated in the photo. 

foto//

Each key is associated with a sound using the  attribute "Data-Key" general in the HTML elements.

Steps to comply with the challenge:

#### 1.- Get DOM Elements:1.- Get DOM Elements:

I use **QuerySelectAll** to bring all audio elements and 'KBD' associated elements into a variable.

	const $keys = document.querySelectorAll('.key')
	const $audios = document.querySelectorAll('audio')

#### 2.- Event Listener "keydown"

**addEventListener** is added to know what key is pressed from the keyboard.

	window.addEventListener('keydown', verifyKey)


#### 3.- Verify if the pressed key matches one of the 'KBD' elements brought from the DOM. 

The VerifyKey function verifies whether the keycode that comes from the event against the elements brought from the DOM is the same using the **forEach** method.

If the condition is fulfilled we went to the next step, execute an animation and start the sound, which explained in step 4.
	
	
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

#### 4.- Start animation, execute sound and finish animation.

##### Start animation / finish animation.

If one of the 'Data-Kay' attributes of the DOM elements coincides with the 'Keycode' pressed in the event, I proceed to run an animation that will automatically end up when you finished executed:

	$key.addEventListener('transitionend', function () {removeAnimation($key)});
        $key.classList.add("playing")

The Removeanimation function will remove the animation when the effect it finished.

	function removeAnimation($key) {    
		$key.classList.remove("playing")

	}



##### execute sound

The PlaySound function looks for the Keycode that matches one of the audios brought from the Dom with a **forEach** and executes the corresponding sound

	function playSound(keyCode) {
		$audios.forEach(($audio) => {
		  let $keyCode = $audio.dataset.key

		  if(keyCode == $keyCode) {
		  //for restart the audio and can play it in multiple occasions without waiting for him 			to finish ringing
			$audio.currentTime = 0
			// for play the audio
			$audio.play()
		  }

		})
	}