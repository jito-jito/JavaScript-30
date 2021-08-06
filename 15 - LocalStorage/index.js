const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = [];

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

function checkBox(e) {
    let nData = e.target.control.dataset.index
    items.forEach((e, index) => {
        if(index == nData) {
        e.done ? e.done = false : e.done = true
        }
    })
    localStorage.setItem('items', JSON.stringify(items))

}

function load(e) {
    if(window.localStorage.length == 0){
        itemsList.innerHTML = ''
    } else {
        items = JSON.parse(localStorage.getItem('items'))
        loadInDom(items)

    }
}

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

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('mouseup', checkBox)
window.addEventListener('load', load) 
