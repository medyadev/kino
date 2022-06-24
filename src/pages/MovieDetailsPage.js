import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import {useParams} from "react-router-dom";
import ActorsPage from "./ActorsPage";
import FilmTrailers from "../components/FilmTrailers";
import SecondLoader from "../components/Loader/SecondLoader";
import {LanguageContext} from "../context/languageContext";


const MovieDetailsPage = () => {

    const {language} = useContext(LanguageContext)
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`)
            .then(({data}) => setMovie(data))
    },[language])
    console.log(movie)
    const {
        poster_path,
        backdrop_path,
        title,
        status,
        overview,
        runtime
    } = movie
    const durationTime = Math.floor(runtime / 60) + " часа" + " " + runtime % 60 + " мин"
    return (
      movie.length === 0 ? <SecondLoader/> :
          <div className="container p-6"
               style={{
                   background: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`,
                   height: "100vh",
                   // backgroundImage:"linear-gradient(to right, rgba(115.5, 178.5, 241.5, 1) 150px, rgba(115.5, 178.5, 241.5, 0.84) 100%)"
               }}
          >
              <div className="flex flex-wrap flex-row px-6">
                  <div className="basis-1/4">
                      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt=""/>
                  </div>
                  <div className="basis-1/2 text-left text-white">
                      <h1 className="text-4xl">{title}</h1>
                      <h3 className="text-2xl text-left my-3">{overview}</h3>
                      <h1 className="text-2xl">Time: {durationTime}</h1>
                  </div>
                  <ActorsPage/>
                  <FilmTrailers id={id}/>
              </div>
          </div>
    );
};

export default MovieDetailsPage;