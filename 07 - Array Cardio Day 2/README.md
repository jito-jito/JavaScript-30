# 07 Array Cardio Day 2

This challenge was to use the methods indicated in the file to work with objects and meet a condition.



There is don't much steps for explain, i only use the method and some of logic:

For this data:

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];

    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];


#### 1.- Some method:

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    console.log(people.some((element) => (2021 - element.year) > 19))    

#### 2.- Every method:

    // Array.prototype.every() // is everyone 19 or older?
    console.log(people.every((element) => (2021 - element.year) > 19))

#### 3.- Find method:

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    console.log(comments.find((element) => element.id === 823423))


#### 4.- FindIndex method and delete operator:

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    
    let index = comments.findIndex((element) => element.id === 823423)
    delete comments[index]

    console.log( comments )