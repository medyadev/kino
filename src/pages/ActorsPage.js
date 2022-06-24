import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import { useParams} from "react-router-dom";
import Slider from "react-slick";
import ActorsBio from "./ActorBio";
import ActorCard from "../components/ActorCard";

const ActorsPage = () => {
    const [actors, setActors] =useState(null)
    const {id: movieId} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    .then(({data}) => setActors(data.cast))
    }, [])
    console.log(actors)

    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 7,
        speed: 800,


    };

    return (
        <div className='md:container mx-auto '>

            <Slider {...settings}>

                {
                    actors?.map(el => (
                        <ActorCard el={el}/>
                        // <div>
                        //     <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                        //      <h1 className='text-left text-white'>{el.name}</h1>
                        //
                        // </div>

                    ))
                }
            </Slider>

        </div>
    );
};

export default ActorsPage;