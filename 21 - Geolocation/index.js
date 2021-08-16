const $compass = document.querySelector('.arrow')
const $speedometer = document.querySelector('.speed-value')


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