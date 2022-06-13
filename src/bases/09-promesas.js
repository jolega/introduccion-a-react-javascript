
import { getHeroesById  } from './09-hero'


// Example One
// resolve When it is successful
// reject when failed
const promise = new Promise (( resolve , reject ) => {

    setTimeout( () =>  {
        const hero = getHeroesById( 1 );
        console.log(hero) ;
        resolve( hero ) ;
    }, 2000 )

})

promise
       .then( ( hero )=> {
    console.log('Then of the promise', hero) ;
        })

// Example Two with parameters

const getHeroesByIdAsync = ( id ) => {
    return new Promise (( resolve , reject ) => {

        setTimeout( () =>  {
            const hero = getHeroesById(id);
            console.log(hero) ;
            ( hero )  ? resolve( hero ) : reject ( hero ) ;
       
            
        }, 2000 ) ;
    
    })
    
}

getHeroesByIdAsync( 10 )
                .then( ( hero )=> {
                console.log('Then of the promise', hero) ;
                })
                .catch(( err ) => {
                    console.log('Value not found', err) ;
                })


// Example Tree  with parameters summarized

const getHeroesByIdAsyncTwo = ( id ) => {
    return new Promise (( resolve , reject ) => {

        setTimeout( () =>  {
            const hero = getHeroesById(id);
            ( hero )  ? resolve( hero ) : reject ( `Value not found`, hero ) ;       
        }, 2000 ) ;
    })
    
}

getHeroesByIdAsyncTwo( 3 )
                .then( console.log )
                .catch( console.log )
                