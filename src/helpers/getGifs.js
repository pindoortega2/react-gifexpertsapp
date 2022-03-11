

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=rvB1Y8jGz0qwgWCJdWBA72pQ6FiglbQN`
    
    const resp = await fetch( url );  
    const { data }  = await resp.json();

    //console.log( data );        

    const gifs = data.map( imag => {
        return {
            id: imag.id,
            title: imag.title,
            url: imag.images.downsized_medium.url
        }
    })

    return gifs;


}