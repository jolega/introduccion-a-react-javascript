

const  person = {
        name       : 'Johan Leonardo' ,
        lastName   :  'Garcia Alonso',
        years      :  32 , 
        address    :  {
            city    : 'Calarca',
            postal  : '63001',
        }
} ;

console.log( person ) ;
console.table( person ) ;
console.log( 
    {
        person :  person

     } ) ;
     

console.log(  {person } ) ;


const person2 = person ; // is copied by reference, to the memory space
person2.name  = 'Johan' ;

console.log(person2) ;
console.log(person) ;

const person3 = {...person} ; // this will create a new object
console.log(person3) ;
person3.name  = 'Johan Leonardo' ;

console.log(person2) ;
console.log(person) ;
console.log(person3) ; 