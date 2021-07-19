# 04 - Array Cardio Day 1

The challenge was to resolve mini tasks described in the html file.

![cardioArray1](https://user-images.githubusercontent.com/75919670/126086141-b52f84e5-db18-4d2e-a592-77f90affc808.png)


Steps for complete the challenge:

#### 1.- Filter the list of inventors for those who were born in the 1500's.

List of inventors:

    const inventors = [
          { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
          { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
          { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
          { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
          { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
          { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
          { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
          { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
          { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
          { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
          { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
          { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

For make this i used the **filter** method:

    console.table(inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1600))


#### 2.- (Using the previus array) Give us an array of the inventors first and last names.

For make this i used the **map** method:

    console.log(inventors.map((inventor) => `${inventor.first} ${inventor.last}`))


#### 3.- (Using the previus array) Sort the inventors by birthdate, oldest to youngest.

For make this i used the **sort** method:

    console.table(inventors.sort(( previusInventor, currentInventor ) => {
      if (previusInventor.year > currentInventor.year) {
        return 1
      } 
      else if (previusInventor.year < currentInventor.year) {
        return -1
      }
      return 0

    }))


#### 4.- (Using the previus array) How many years did all the inventors live all together?

For make this i used the **reduce** method:

    console.log(inventors.reduce((previusValue, currentValue) => {
      return previusValue + (currentValue.passed - currentValue.year)}, 0
    ))

#### 5.- (Using the previus array) Sort the inventors by years lived

    console.log('5. Sort the inventors by years lived')
    console.table(inventors.sort((previusInventor, currentInventor) => {
      previusValue = previusInventor.passed - previusInventor.year
      currentValue = currentInventor.passed - currentInventor.year
      if(previusValue > currentValue) {
        return 1
      } else if (previusValue < currentValue) {
        return -1
      }
      return 0
    }))

#### 6.-Create a list of Boulevards in Paris that contain 'de' anywhere in the name https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    const category = document.querySelector('.mw-category')
    const links = Array.from(category.querySelectorAll('a'))
    const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'))

Copy/paste the code in the link for see the results:


![cardioArray1-2](https://user-images.githubusercontent.com/75919670/126086184-497a90d0-4573-4a18-9cfc-9cf620a1fc01.png)


#### 7.- Sort Exercise, Sort the people alphabetically by last name

List of the people:

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

Again, i used the **sort** method for complete the challenge:

    console.log(people.sort(( nameAnterior, nameActual ) => {
      let a = parseName(nameAnterior)
      let b = parseName(nameActual)
      if(a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    }))

    function parseName(name) {
      let j;
      for(let i =0; i < name.length; i++) {
        if(name.charCodeAt(i) === 32) {
          j = name.slice(i+1, name.length)
        }
      }
      return j
    }



#### 8.- Reduce Exercise, Sum up the instances of each of these

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    let arr = []
    data.forEach((item) => {
      const index = arr.findIndex((element) => 
      element.length > 0 ? 
      element[0] == item :
      element == item
      )

      index == -1 ? 
      arr.push([item]) : 
      arr[index].push(item)
      
    })
    console.log(arr)
