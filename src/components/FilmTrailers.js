import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import SecondLoader from "./Loader/SecondLoader";
import YouTube from 'react-youtube';


const FilmTrailers = ({id}) => {

    const [trailers, setTrailers] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setTrailers(data?.results))
    }, [])
    console.log("trailers:", trailers)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>

            {
                trailers.length === 0 ? <SecondLoader/> :

                    trailers.map(el => (


                        // халтуритеткен метод
                        // <div>
                        //     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                        //             title="YouTube video player" frameBorder="0"
                        //             allow="accelerometer; autoplay; clipboard-write;  picture-in-picture"
                        //             allowFullScreen></iframe>
                        // </div>

                        //зынк метод
                        <YouTube videoId={`${el.key}`} opts={opts}/>

                    ))
            }
        </div>
    );
};

export default FilmTrailers;