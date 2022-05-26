

// destructuring

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {

    name     : 'Tony',
    years    : 32 ,
    password : '12345' ,

}

// example one
console.log( person.name ) ;
console.log (person.years ) ;
console.log (person.password ) ;

// example two

const { name } = person
console.log( name ) ;

// example Tree   rename

const { name : nameTwo } = person
console.log( nameTwo ) ;