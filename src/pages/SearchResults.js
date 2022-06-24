import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiKey} from "../private";
import FilmCard from "../components/FilmCard";
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
const SearchResults = () => {
    
    const {movieName} = useParams()
    const [result, setresult] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName.toLowerCase().trim()}`)
            .then(({data}) => setresult(data.results))
    },[movieName])
    console.log(result)
    return (
        <div className="container p-6 bg-neutral-800 text-white font-serif">
            <div className="flex flex-wrap flex-row">
                {
                    result.map(el => (
                        <FilmCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResults;