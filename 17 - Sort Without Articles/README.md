# 17 Sort Without Articles

This challenge was sort an array of elements without articles:

//foto


Steps for complete the challenge:

#### 1.- Get DOM element:

    $ul = document.getElementById('bands')
    // Array for sort
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

#### 2.- The Sort metod:

I use sort method for clasify the elements of the array but before, i use the 'includes' function for clean the elements of the articles 'the, a or an'.

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

#### 3.- The 'includes' function:

This function verify if the string recived include 'the, a or an' in them, for clean it string and return the results:

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


#### 4.- The 'render results' function: 

This function load the results of the sort method in the HTML:

    function renderResults(array) {
        let html = '';
        
        bands.forEach((e) => {
          html +=`<li>${e}</li>`
         
        })
        $ul.innerHTML = html
    }


 