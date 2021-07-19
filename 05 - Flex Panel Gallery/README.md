# 05 Flex Panel Gallery

The challenge was create a Flex panel gallery:

![flexchallenge](https://user-images.githubusercontent.com/75919670/126188949-0b8759a8-9f21-4457-9f10-03cf391e4478.png)

Steps for complete the challenge:

#### 1.- Get DOM elements:

I get the DOM elements using **querySelector** for save in the '$panels' variable.

    $panels = document.querySelectorAll('.panel')


#### 2.- Add event listener 'click', toggleOpen function

Using **event listener** execute the 'toggleOpen' function to add styles to the selected panel(for expand the panel selected).


    document.addEventListener('click', toggleOpen)

    function toggleOpen(event) {
        document.addEventListener('transitionend', toggleActive)
        event.target.parentElement.classList.toggle('open')
    }

##### In CSS:

Add 'flex: 4(flex-grow)' for expand the 'panel' clicked:

    .panel.open {
        font-size: 40px;
        flex: 4;
    }

'transition' property and 'flex-grow in 1' by default make the magic functioned when click in a 'panel' element:

    .panel {
        transition:
            font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            background 0.2s;
        font-size: 20px;
        background-size: cover;
        background-position: center;
    
        flex: 1;
    
    }



#### 3.- Add event listener 'transitionend', toggleActive function

in to the 'toggleOpen' function, i added event listener to 'transition end' and execute 'toggleActive' function when the panel selected expands and adds styles in the paragraph in the panel elements.

    function toggleActive(event){
        if(event.propertyName == "font-size") {
        event.target.classList.toggle('activeP')
        }
    }

##### In CSS:

   ' transform: translate' is property used to hide or appear the paragraph in to the 'panel' when click it.

    for paragraps in to '.panel' elements
    .activeP > p:first-child {
        transform: translateY(0%);  
    
    }
    
    .activeP > p:last-child {
        transform: translateY(0%);
    }
