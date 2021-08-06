# 15 LocalStorage

In this challenge it was saved data of a list using local storage.

//foto


Steps for complete the challenge:

#### 1.- Get DOM element and set variables:
    
    // for get the form
    const addItems = document.querySelector('.add-items');
    // for get 'ul' element (where set the items of the local storage)
    const itemsList = document.querySelector('.plates');
    // for get, save and update data in the local storage
    let items = [];


#### 2.- Add event listeners

    // for listen when we send form
    addItems.addEventListener('submit', addItem)
    // for listen when we check a checkbox
    itemsList.addEventListener('mouseup', checkBox)
    // for listen when the page is loaded
    window.addEventListener('load', load) 


#### 3.- event listener functions

I used 'addItem' function for update the load storage when we do send form of the DOM with the '-Add item' button.

    function addItem(event) {
        event.preventDefault()
        let item = {
          text: this.querySelector('[name=item]').value,
          done: false
        }
        items.push(item)
        loadInDom(items)
        localStorage.setItem('items', JSON.stringify(items))
    }


I used 'checkBox' function for update the load storage when we do click in the checkbox element and refresh page.

    function checkBox(e) {
        let nData = e.target.control.dataset.index
        items.forEach((e, index) => {
          if(index == nData) {
            e.done ? e.done = false : e.done = true
          }
        })
        localStorage.setItem('items', JSON.stringify(items))
    
    }

Used the 'load' function for load elements of the local storage when the HTML loaded.
    
    function load(e) {
        if(window.localStorage.length == 0){
          itemsList.innerHTML = ''
        } else {
          items = JSON.parse(localStorage.getItem('items'))
          loadInDom(items)
    
        }
    }

#### 4.- Load in DOM function:

This function recibes the 'itmes' array for load new elements 'li' in the DOM.

    function loadInDom(arr) {
        let html = ''
        arr.forEach((element, i) => {
          
          html += 
            `<li>
              <input type="checkbox" data-index=${i} id="item${i}" ${element.done ? 'checked' : ''} />
              <label for="item${i}">${element.text}</label>
            </li>`
        });
        itemsList.innerHTML = html
    }