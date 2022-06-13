

const getImage = async () => { 
    
    try{
        const apikey = 'L9R3qzXtQJ6cV40iH6t6Q2eotz6DhnbK';
        const request = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
        const  { data }    = await request.json() ;
        const { url } = data.images.original
    
        const img = document.createElement('img')
        img.src = url
        document.body.append ( img ) ;
    }
    catch (err){
        console.log(err)
    }

}

getImage();

