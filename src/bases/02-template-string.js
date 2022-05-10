console.log(' !!! hello work') 

const name = ' Johan Leonardo ' ;

let lastName = ' Garcia Alonso ' ;

let fullName =  name + ' ' + lastName ;
console.log( fullName ) ;

fullName = `${ name } ${ lastName }` ;
console.log( fullName ) ;

/**
 * The function getGreeting() takes a name as an argument and returns a string that says hello to that
 * name
 * @param name - The name of the person you want to greet.
 * @returns Hello to all i am John
 */
 function getGreeting( name ) {
     return `Hello to all i am ${name}`
     }

 console.log(`This is a text : ${getGreeting( name )}` ) 
