

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

//example Four  No matter the order
const { years , password } = person
console.log(` ${years} ${password}`) ;

// example Five

const  returnPerson = ( user ) => {
    console.log( user )
}

returnPerson ( person ); 

// example Six

const  returnPersonTwo = ( user ) => {
   
    const { name, years , password } = person
    console.log(`${name}  ${years} ${password}`) ;
}

returnPersonTwo ( person ); 

// example Seven ** most used **

const  returnPersonTree = ( {name, years , password}  ) => {
   
    console.log(`${name}  ${years} ${password}`) ;
}

returnPersonTree ( person ); 

// example Eight ** most used **
// default values - if no value arrives is use default
const  returnPersonFour = ( {name, years , password, range = 'Capitan'}  ) => {
   
    console.log(`${name}  ${years} ${password} ${range}`) ;
}

returnPersonFour ( person ); 

// example nine ** most used **
// Return objects
const  returnPersonFive = ( {name, years , password, range = 'Capitan'}  ) => {
   
    return {
        fullName : name ,
        year     : years,

    }
}

const PersonObjects = returnPersonFive ( person ); 
console.log( PersonObjects )
const {fullName ,  year  } =  PersonObjects
console.log(` ${fullName}  ${year} `) 

// example ten ** most used **
// Return objects within objects
 
const  returnPersonSix = ( {name, years , password, range = 'Capitan'}  ) => {
   
    return {
        fullName : name ,
        year     : years ,
        coordinates : {
                lat : 14.13 ,
                lon : 12.8  ,
        } , 

    }
}

const PersonObjectsTwo = returnPersonSix ( person ); 
console.log( PersonObjectsTwo )
const { coordinates  } =  PersonObjectsTwo

//print objects
console.log(coordinates) 

//extract  objects within objects
const { coordinates : { lat , lon }  } =  PersonObjectsTwo
console.log(` ${fullName}  ${year} `) 