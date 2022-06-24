import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {apiKey, POPULAR_API} from "../private";
import FilmCard from "../components/FilmCard";
// import Loader from "../components/Loader/Loader";
import SecondLoader from "../components/Loader/SecondLoader";
import {LanguageContext} from "../context/languageContext";


const Popular = () => {


    const [popularMovie, setPopularMovie] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const {language} = useContext(LanguageContext)

    const pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    function displayFilms(el) {
        setCurrentPage(el)
    }


    useEffect(() => {

        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${currentPage}`)
            .then(({data}) => {
                console.log(data)
                setPopularMovie(data.results)
            })
        window.scroll(0, 0)
    }, [currentPage, language])

    console.log(popularMovie)
    return (
        <div className="bg-white border-gray-200 px-5 py-5  dark:bg-neutral-800 ">
            <div className="md:container mx-auto  ">
                {/*bg-white border-gray-200 px-5 py-5  dark:bg-black*/}
                <h1 className="text-5xl text-center text-white my-5 font-medium">Popular Movies</h1>


                {
                    popularMovie.length === 0 ? <SecondLoader/> :
                        <div className="flex flex-row flex-wrap text-white font-serif  ">
                            {
                                popularMovie.map(el => (
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
                }
            </div>
        </div>
    );
};

export default Popular;