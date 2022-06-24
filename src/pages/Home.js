import React, {useContext, useEffect, useState} from 'react';
import logo from "../assets/birinchislider.jpg"
import logo2 from "../assets/aqvaman.jpg"
import logo3 from "../assets/godzillanorm.jpg"
import logo4 from "../assets/toretto.jpg"
import logo5 from "../assets/Instagramicon.svg"
import ReactDOM from "react-dom";
import Slider from "react-slick";


const Home = () => {

    const settings = {
        dots: true,
        autoplay: true,
        speed: 1200,

    }

    return (
        <div className="p-5 bg-neutral-800 ">
            <div className="md:container mx-auto">
                <h1 className=" text-left text-white  p-10 font-medium text-3xl ">Рекомендуем вам посмотреть</h1>
                <div className="p-10  ">
                    <Slider {...(settings)} >
                        <div className="hover:scale-105 p-5">
                            <img className=" border-4 rounded-lg rounded-2xl" src={logo} alt=""/>
                        </div>
                        <div className="hover:scale-105 p-5">
                            <img className="border-4 rounded-lg rounded-2xl" src={logo2} alt=""/>
                        </div>
                        <div className="hover:scale-105 p-5">
                            <img className="border-4 rounded-lg rounded-2xl" src={logo3} alt=""/>
                        </div>
                        <div className="hover:scale-105 p-5">
                            <img className="border-4 rounded-lg rounded-2xl" src={logo4} alt=""/>
                        </div>
                    </Slider>
                </div>


                <div className="container mx-auto my-5  bg-white rounded-lg   md:p-6 dark:bg-black">
                    <div className="flex justify-around  items-center">
                        <a href="https://www.motion-web.io/">
                            <h1 className="text-white text-2xl p-10 ">© 2022 «Rahmanov-dev»</h1>
                        </a>
                        <a href="https://www.instagram.com/rahmnv1b/?hl=ru">
                            <img src={logo5} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;



