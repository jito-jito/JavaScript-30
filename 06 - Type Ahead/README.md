# 06 Type Ahead

The challenge was to get a JSON file with data from cities and states to create a filter using a input element.


//foto


Steps for complete thge challenge:


#### 1.- Get DOM elements

    let $search = document.querySelector('.search')
    let $suggestions = document.querySelector('.suggestions')

#### 2.- Get JSON file, fetch API

Using the link saved in 'URL' variable, i used **fetch** for get json file with the data of cities and save in the 'data' variable.

    const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    let data;

    fetch(URL)
      .then((response) => response.json())
      .then((fetchData) => data = fetchData)
    


#### 3.- Event listener input and search function

The 'search' function execute when write in the input DOM element for remove the li elements(results the previus search or elements by default) and find data than coincide with the input value using filter method in the 'data' variable for render results in html.

    $search.addEventListener('input', search)
    
    function search(event) {
      $li = document.querySelectorAll('.suggestions > li')
      removePrevius($li)
    
      let filterData = data.filter((item) => {
        return item.city.includes($search.value) || item.state.includes($search.value) || 
        item.city.toLowerCase().includes($search.value) || item.state.toLowerCase().includes($search.value)
      })
      renderResults(filterData)
    
    }


#### 4.- Erase previus results, removePrevius function
    
Using **forEach** i removed the li elements in html:

    function removePrevius(element) {
      element.forEach((item) => {
        item.remove()
      })
    }


#### 5.- Render results in HTML, renderResults function

Using  **forEach** created a 'Li' element for each element within the array received to add it within a 'Document Fragment' and finally insert the results to the DOM using the 'UL' element, 'Suggestions' variable.

    function renderResults(array) {
      const DomFragment = document.createDocumentFragment();
      array.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = `${element.city} ${element.state} <span class="population">${element.population}</span>`
        DomFragment.appendChild(li) 
      });
    
      $suggestions.appendChild(DomFragment)
    }


*I know that using regular expressions I can complete the challenge with more effective code but I still do not know its operation well, I will return here to improve the code using regular expressions when you learn how they work.*