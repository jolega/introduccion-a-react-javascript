

// it is not the correct way to do functions because
// the value can change example say greet = 30
function greet ( name ){
    return `hello, ${ name }` ;
};

// correct way
const greetTwo = function ( name ){
    return `hello, ${ name }` ;
};

//arrow functions
const greetThree = ( name ) => {
    return `hello, ${ name }` ;
};

//arrow functions single line
const greetFour = ( name ) => `hello, ${ name }` ;

//arrow functions and objects
const greetFive = () => {
    return {
         uid : '1234556',
         userName : 'Jolega'
    }
};

//arrow functions single line and  objects
const greetSix = () => 
    ( {
         uid : '1234556',
         userName : 'Jolega'
    });

//arrow functions single line and  objects with params
const greetSeven = ( name ) => 
  ({
       uid : '123456' ,
       userName : name ,
  })


console.log( greet('Johan') )
console.log( greetTwo('Johan Garcia') )
console.log( greetThree('Johan Garcia') )
console.log( greetFour('Johan Garcia') )
console.log( greetFive() )
console.log( greetSix() )
console.log( greetSeven('Johan Garcia') )