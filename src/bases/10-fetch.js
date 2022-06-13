
const apikey = 'L9R3qzXtQJ6cV40iH6t6Q2eotz6DhnbK';

const request = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)


request
       .then ( resp => resp.json() )
       .then ( ({ data }) => {
       const { url } = data.images.original
       console.log(url)
       const img = document.createElement('img')
       img.src = url ;
       document.body.append ( img ) ;
       })
     .catch( console.warn );