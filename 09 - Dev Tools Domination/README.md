# 09 Dev Tools Domination

In this challenge i learned about diferents forms of use the 'console' method.


![console](https://user-images.githubusercontent.com/75919670/126929540-c04f6d32-2769-4b76-8220-c84f137d8241.png)



'console.log()' is a method for show values in console, diferent forms of use:

**Regular form: **
        
		console.log('something')
    
**Interpolated form: **
        
		console.log('something', 'happens')
    
**Styled form** (using '%c' we can include css in console):

        console.log('%c something', 'font-size: 20px; color: white; background: black')


**warning** (special for warning messages):

    console.warn('OH NOOOO')


**error** (special for error messages):
    console.error('Shit!')

**info** (no many changes in browser, in node.js is the difference):

    console.info('Crocodiles eat 3-4 people per year');

**testing** (evaluate and see in console error message if have false expression):

    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    if expression is true no appear message in console

**clear** (for clears the console if the environment allows it.)

    console.clear();

**dir**, for view a list of properties of objects (for example viewing DOM Elements):

    console.dir(p);

**group**: for view a grups of console.logs (for example to group diferent steps of your program):

    dogs.forEach(dog => {
          console.groupCollapsed(`${dog.name}`);
          console.log(`This is ${dog.name}`);
          console.log(`${dog.name} is ${dog.age} years old`);
          console.log(`${dog.name} is ${dog.age * 7} dog years old`);
          console.groupEnd(`${dog.name}`);
    });

**counting** (for make a counter):

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

**timing** (for make a timer of your program, for example to a fetch request):


    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);
