# 03 - CSS Variables

The challenge was to change varibales CSS with JavaScript for changing properties in the picture:

![cssvariables](https://user-images.githubusercontent.com/75919670/126002249-5908f28c-af27-4165-a7a0-fd60b128ff15.png)

Steps for complete the challenge:

#### 1.- Crate css variables

In the CSS, I created the variables in the **root** element to apply them throughout the HTML document.

    :root {
        --spacing: 10px;
        --base-color:#ffc600;
        --blur: 10px;
    }



#### 2.- Get DOM elements

In JavaScript, i use **query selector** for get the DOM elements and css variables in a variable JavaScript.


    $root = document.querySelector(':root');
    $controls = document.querySelector('.controls')


#### 3.- Event listener, setControl function

For finished i create an **eventlistener** for execute the 'setControl' function and set the new values in the css variables using the value received  since the event.

    function setControl(event) {
        if(event.target.id == "blur") {
        $root.style.setProperty('--blur', `${event.target.value}px`);
        } else if (event.target.id == "spacing") {
        $root.style.setProperty('--spacing', `${event.target.value}px`);
        } else {
        $root.style.setProperty('--base-color', `${event.target.value}`);
        }
    }

**element.style.setProperty** is the magic method for set the input values recived in the event a the css varibles.
