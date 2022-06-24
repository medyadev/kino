import React from 'react';
import {Link} from "react-router-dom";



const ActorCard = ({el}) => {
    return (
        <>
            <Link to={`/actors/${el.id}`}>
                {
                    el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/> :
                        <img className="max-h-44" src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" alt=""/>
                }

            </Link>

            <h1 className="text-white text-left">{el.name}</h1>
        </>


    );
};

export default ActorCard;