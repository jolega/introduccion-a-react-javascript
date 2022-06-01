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

 const getHeroesByOwnerOne = ( nameOwner ) => heroes.filter(hero => hero.owner === nameOwner)

export {
     getHeroesById,
     getHeroesByOwnerOne,
 } ;