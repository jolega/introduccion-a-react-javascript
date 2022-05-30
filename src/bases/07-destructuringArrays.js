// destructuring Arrays


const person = ['Goku', 'Vegeta' , 'Trunks' ]


// example One 
console.log(  person [0] )
console.log(  person [1] )
console.log(  person [2] )

// example Two

const [ personOne ]  = person
console.log(  personOne )

// example Tree 
// commas previous positions
const [ ,  personTwo ]  = person
console.log(  personTwo )

const [ , , personTree ]  = person
console.log(  personTree )

// example Four 
// commas previous positions

const returnArray = () => {
    return ['Abc', 123 ]
}
const [ letters , number ]  = returnArray ()
console.log(  letters , number  )

// example Five with function 
// commas previous positions

const returnArrayTwo = ( value ) => {
    return [ value , () => (console.log('Hello Work')) ]
}

// return function 
const [name , greeting ] = returnArrayTwo ('Duck Donal')

console.log (name, greeting)
greeting();
