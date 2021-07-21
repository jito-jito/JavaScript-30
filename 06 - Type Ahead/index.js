let $search = document.querySelector('.search')
let $suggestions = document.querySelector('.suggestions')

const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
let data;


function search(event) {
  $li = document.querySelectorAll('.suggestions > li')
  removePrevius($li)

  let filterData = data.filter((item) => {
    return item.city.includes($search.value) || item.state.includes($search.value) || 
    item.city.toLowerCase().includes($search.value) || item.state.toLowerCase().includes($search.value)
  })
  renderResults(filterData)

}

function removePrevius(element) {
  element.forEach((item) => {
    item.remove()
  })
}

function renderResults(array) {
  const DomFragment = document.createDocumentFragment();
  array.forEach(element => {
    let li = document.createElement('li')
    li.innerHTML = `${element.city} ${element.state} <span class="population">${element.population}</span>`
    DomFragment.appendChild(li) 
  });

  $suggestions.appendChild(DomFragment)
}


fetch(URL)
  .then((response) => response.json())
  .then((fetchData) => data = fetchData)


$search.addEventListener('input', search)
