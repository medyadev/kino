import React, {useContext, useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";
import {LanguageContext} from "../context/languageContext";

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([])
    const {language} = useContext(LanguageContext)
    const [currentPage, setCurrentPage] = useState(1)
    const pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    function displayFilms(el) {
        setCurrentPage(el)
    }

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=${language}&page=${currentPage}`)
            .then(({data}) => setUpcoming(data.results))
    }, [currentPage, language])
    return (
        <div className=" bg-neutral-800 p-5">
            <div className="md:container mx-auto">
                <h1 className="text-5xl text-center  my-5 text-white font-medium">Upcoming films</h1>
                <div className="flex flex-row flex-wrap font-serif text-white">
                    {
                        upcoming.map(el => (
                            <FilmCard el={el} key={el.id}/>
                        ))
                    }
                    <div className="pt-6 m-auto ">
                        {
                            pages.map(el => (
                                <button key={el} type="button"
                                        onClick={() => displayFilms(el)}
                                        className={`hover:scale-110 mx-2 text-white ${el === currentPage ? " bg-blue-700 bg-gradient-to-g from-blue-400 via-blue-500 to-blue-600" :
                                            "bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600"
                                        }   " focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>

                                    {el}  </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;