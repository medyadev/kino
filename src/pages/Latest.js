import React, {useContext, useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";
import {LanguageContext} from "../context/languageContext";

const Latest = () => {
    const [latest, setLatest] = useState(null)
    const {language} = useContext(LanguageContext)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=${language}`)
            .then(({data}) => setLatest(data))
    }, [language])
    console.log(latest)
    return (
        <div className="p-5 ">
            <div className="md:container mx-auto">
                <h1 className="text-5xl text-center my-5 font-serif">Latest films</h1>
                <div className="flex flex-row flex-wrap font-serif">
                    {/*{*/}
                    {/*    latest.map(el =>(*/}
                    {/*        <FilmCard el={el} key={el.id}/>*/}
                    {/*    ))*/}
                    {/*}*/}


                    <div className="basis-1/4">
                        <h1>{latest?.title}</h1>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Latest;