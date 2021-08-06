# 12 Key Secuence Detection

This challenge was recives password ('wesbos') for show in the screen when the password is correct.


//foto


Steps for complete the challenge:

#### 1.- Set variables

    // for recibes each key press(maximun according to the lenght of the 'password' variable)
    let arr = []
    // for set password
    let password = 'wesbos'
    // word what be created for each key press for verify if 'word equals password'
    let word = '';

#### 2.- Listener 'keyup' and function

I use 'keyup' listener for recibes each key pressed and verify if all keys equals a 'password' variable.

    document.addEventListener('keyup', (event) => {
        arr.push(event.key)
        arr.length > 6 ? arr.shift() : ''
        arr.forEach((element) => word += element.toString())
        if(word == password) {
            console.log('DING DING!');
            // for see unicorns in the screen
            cornify_add();
        }
        word = ''
        console.log(arr)
    })