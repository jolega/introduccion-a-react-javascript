
const apikey = 'L9R3qzXtQJ6cV40iH6t6Q2eotz6DhnbK';

const request = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)


request.then ( resp => {
    console.log(resp) ;
    resp.json().then( data => {
        console.log( data ) ;
    })
})
.catch( console.warn );