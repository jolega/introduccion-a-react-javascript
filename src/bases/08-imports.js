import { heroes } from "../data/heroes"


/**
 * * //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * The function getHeroeById takes an id as a parameter and returns the heroe that matches the id.
 * @param id - The id of the hero you want to find.
 * @returns the element that matches the id.
 */

//example one find
const getHeroesById = ( id ) => {
    return heroes.find(hero => hero.id === id)
}

console.log ( getHeroesById(3) )

// example two find

const getHeroesByIdTwo = ( id ) => heroes.find(hero => hero.id === id)

console.log ( getHeroesByIdTwo(3) )

// example one  filter
/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * The function getHeroesByOwnerOne takes in a nameOwner parameter and returns the first hero object
 * that has a matching owner property
 * @param nameOwner - This is the name of the owner that we want to find.
 * 
 */
const getHeroesByOwnerOne = ( nameOwner ) => heroes.filter(hero => hero.owner === nameOwner)

console.log ( getHeroesByOwnerOne('DC') )