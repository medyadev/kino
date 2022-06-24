import React from 'react';
import {Link} from "react-router-dom";


const FilmCard = ({el}) => {
    return (

        <div className=" basis-1/4 flex justify-center items-center flex-col hover:scale-105 " key={el.id}>
            <Link to={`/movie/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" className="m-3 rounded-3xl"/>

            </Link>
            <h4 className="text-xl text-center">{el.title}</h4>
        </div>
    );
};


export default FilmCard;