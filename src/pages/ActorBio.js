import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";
import FilmCard from "../components/FilmCard";
import {LanguageContext} from "../context/languageContext";


const ActorBio = () => {
    const [person, setPerson] = useState({})
    const [actorFilms, setActorFilms] = useState([])
    const {language} = useContext(LanguageContext)


    const {actorId} = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=${language}`)
            .then(({data}) => setPerson(data))
        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`)
            .then(({data}) => setActorFilms(data.cast))
    }, [language])
    console.log(actorFilms)
    console.log(person)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,

    };
    return (

        <div className='p-6 bg-neutral-800 text-white'>
            <div className="md:container mx-auto ">
                <div className='flex flex-wrap flex-row  '>
                    <div className='basis-1/3 hover:scale-105 hover:transition'>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt=""/>
                    </div>
                    <div className='basis-1/2 text-left text-xl '>
                        <h1 className='text-4xl '>{person.name}</h1>
                        <p>{person.biography}</p>
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        actorFilms.map(el => (
                            <div className='p-6'>
                                <FilmCard el={el}/>

                            </div>

                        ))
                    }
                </Slider>
            </div>
        </div>
    );

};

export default ActorBio;