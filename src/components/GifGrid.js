//import React, { useState, useEffect } from 'react';
import React from 'react'
import { useFetchGifs } from '../hoohks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifs( category );
    console.log(images);
    
    //console.log(category)
    //const [count, setCount] = useState(0);
    //const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );        
    // }, [ category ])

    // const getGifs = async() => {

    //     const url = 'https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=rvB1Y8jGz0qwgWCJdWBA72pQ6FiglbQN'
        
    //     const resp = await fetch( url );  
    //     const { data }  = await resp.json();

    //     //console.log( data );        

    //     const gifs = data.map( imag => {
    //         return {
    //             id: imag.id,
    //             title: imag.title,
    //             url: imag.images.downsized_medium.url
    //         }
    //     })

    //     console.log("resp", gifs);
    //     setImages(gifs)


    // }

    //getGifs();

    //console.log("Imagenes", images)

    return (

        <>
            <h3> { category } { loading && <p>Loading.....</p>} </h3>                  
            <div className="card-grid">
                {
                    // images.map( img => (
                    //     <li key={ img.id}>{ img.title }</li>
                    // ))
                    images.map( img => (
                        <GifGridItems 
                            key= { img.id }
                            { ...img } 
                        />
                    ))
                        
                }        
            </div> 
        </>

    )

}
