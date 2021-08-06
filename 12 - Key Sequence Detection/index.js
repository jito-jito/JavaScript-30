let arr = []
let password = 'wesbos'
let word = '';

document.addEventListener('keyup', (event) => {
    arr.push(event.key)
    arr.length > 6 ? arr.shift() : ''
    arr.forEach((element) => word += element.toString())
        if(word == password) {
            console.log('DING DING!');
            cornify_add();
        }
    word = ''
    console.log(arr)
})