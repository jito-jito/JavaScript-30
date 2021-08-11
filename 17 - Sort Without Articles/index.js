$ul = document.getElementById('bands')
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function includes(string) {
  let word
  if(string.includes('The ')) {
    word = string.replace('The ', '')
    return word
  } else if (string.includes('A ')) {
    word = string.replace('A ', '')
    return word
  } else if (string.includes('An ')){
    word = string.replace('An ', '')
    return word
  } else {
    word = string
    return word
  }
}

function renderResults(array) {
    let html = '';
    
    bands.forEach((e) => {
      html +=`<li>${e}</li>`
     
    })
    $ul.innerHTML = html
}

bands.sort((first, second) => {
  a = includes(first)
  b = includes(second)

  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }

})

renderResults(bands)

console.log(bands)