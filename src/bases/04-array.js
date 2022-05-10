//arrays in  Javascript

const array = new Array () ; // They can be created like this but it is not the best practice

console.log( array )


const array2 = []
console.log( array2 )


// add value to array
array2.push(1)  // can be done but not recommended
array2.push(2)  // modify main object
array2.push(3)
array2.push(4)
console.log( array2 )


// add value to array better practices
// with spread operator
let array3 = [ ...array2 , 5] // don't pass the reference, create a copy

console.log( array3 )

// with map operator

const array4 = array3.map( function (number){
    return number * 2 ;
}) ;

console.log( array4 ) ;