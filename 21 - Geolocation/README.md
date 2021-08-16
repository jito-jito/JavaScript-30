# Geolocation

This challenge was to use the geolocation for see what  speed and direction we bring in the html.


//foto


Steps to complete the challenge:

#### 1.- Get DOM elements:
    
    // for get the compass of the DOM
    const $compass = document.querySelector('.arrow')
    // for get the speed value of the DOM
    const $speedometer = document.querySelector('.speed-value')

#### 2.- Geolocation interface:

I use the geolocation interface for recives the speed and direction and see results in the screen.

    function geo_success(position) {
      console.log(position)
      $compass.style.transform = `rotate(${position.coords.heading}deg)`
      $speedometer.innerText = position.coords.speed ? `${toString(position.coords.speed)}KM/H` : '- '
    }
    
    function geo_error(err) {
      console.error(err)
    }
    
    let geo_options = {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 13000
    } 
    
    let wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options)
