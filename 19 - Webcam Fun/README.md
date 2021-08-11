# 19 Webcam Fun

This challenge was to capture images of the webcam for show in html for set filters and take photos:

//foto


Steps to complete the challenge:

#### 1.- Get DOM elements:


    // where we show the images of the webcam
    const video = document.querySelector('.player');
    // used for show images with filter and take photos 
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    // where we insert photos
    const strip = document.querySelector('.strip');
    // sound for take a photo
    const snap = document.querySelector('.snap');



#### 2.- Get video of the webcam:

The 'getVideo' function use 'getUserMedia' method of navigator interface for get stream video of the webcam and to add the data in the video element.

    function getVideo() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
            .then(data => {
                console.log(data)
                // get video 
                video.srcObject = data
                video.play()
            })
            .catch(err => console.error(err))
         
    }



#### 3.- Paint in canvas:

This function set a canvas width and height according to the size of the video, and listen each 16 miliseconds for change a new image and set filter:

function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height

    return setInterval(( )=> {
        // for set screen of the video in canvas 
        ctx.drawImage(video, 0, 0, width, height)
    
        // this variable for take the image in a Uint8ClampedArray and to work the image with the pixels
        let pixels = ctx.getImageData(0, 0, width, height)
        
        // this modify the color of the pixels(the filter function)
        pixels = rgbSplit(pixels)
        
        // this show new picture with filter in canvas
        ctx.putImageData(pixels, 0, 0)
        //console.log(pixels)
        //debugger
    }, 16)
}



#### 4.- Filters for canvas:

The filters functions recibes a Uint8ClampedArray to change the value for each pixel recived.

    function redEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i + 0] = pixels.data[i + 0] + 200; //red
            pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
    
        }
        return pixels
    }
    
    function rgbSplit(pixels) {
        for (let i = 0; i < pixels.data.length; i+=4) {
          pixels.data[i - 150] = pixels.data[i + 0]; // RED
          pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
          pixels.data[i - 550] = pixels.data[i + 2]; // Blue
        }
        return pixels;
    }



#### 5.- Filter green screen:

This function recibes a Uint8ClampedArray to change the value for each pixel recived according to de values recibes in the inputs type range.

To Dissapear the pixels between a range seted according to the input values. 


    function greenScreen(pixels) {
        const levels = {}
    
        document.querySelectorAll('.rgb input').forEach((input) => {
            levels[input.name] = input.value
        })
    
        for (i =0; i < pixels.data.length; i = i + 4) {
            red = pixels.data[i + 0]
            green = pixels.data[i + 1]
            blue = pixels.data[i + 2]
            alpha = pixels.data[i + 3]
    
            if (red >= levels.rmin
                && green >= levels.gmin
                && blue >= levels.bmin
                && red <= levels.rmax
                && green <= levels.gmax
                && blue <= levels.bmax) {
    
                    pixels.data[i + 3] = 0
                }
    
    
        }
    
        return pixels
    
    }


#### 6.- Take a photo function :

This function play a sound 'snap' and get 'data url' of a picture of canvas for add the image in DOM for see and download: 

    function takePhoto() {
        snap.currentTime =0;
        snap.play()
    
        const data = canvas.toDataURL('image/jpeg')
        const link = document.createElement('a')
        link.href = data
        link.setAttribute('download', 'picture')
        link.innerHTML = `<img src="${data}" alt="picture of canvas" />`
        strip.insertBefore(link, strip.firstChild)
    
    }

