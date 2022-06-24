import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {LanguageContext} from "../context/languageContext";

const Header = () => {

    const navigate = useNavigate()
    

    const {language, setLanguage} = useContext(LanguageContext)
    console.log(language)



    const handleOption = (e) => {
        setLanguage(e.target.value)
    }

    const [searchTitle, setSearchTitle] = useState("")
    const handleChange = (e) => {
        setSearchTitle(e.target.value)
    }

    const [isClicked, setIsClicked] = useState(false)
    const changeLanguage = () => {
        setIsClicked(!isClicked)
    }
    const handleSearch = () => {

        if (searchTitle.trim()) {
            navigate(`/movies/search-results/${searchTitle}`)
        }


    }

    const onEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (

        <nav className="bg-white border-gray-200 px-5 py-5  dark:bg-black">
            <div className="md:container flex flex-wrap justify-between items-center mx-auto">
                <NavLink to="" className="flex items-center">
                    <img src="https://movie-roan.vercel.app/static/media/mation.b5e13984cae7b0e1158a.png"
                         className="mr-3 h-6 sm:h-9"
                         alt="Flowbite Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cinema</span>
                </NavLink>
                <div className="md:order-2">
                    <div className="relative mr-3 md:mr-0 flex items-center justify-center">
                        <input

                            onChange={(e) => handleChange(e)}
                            onKeyDown={(e) => onEnter(e)}

                            type="text" id="email-adress-icon"
                            className="block p-2 pl-10 mx-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for a movie..."/>
                        <button

                            onClick={handleSearch}

                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                            <span
                                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                     id="mobile-menu-3">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium ">
                        <li>
                            <NavLink to="/"
                                     className="cursor-pointer border-b border-transparent hover:border-blue-400  block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/popular"
                                     className="cursor-pointer border-b border-transparent hover:border-blue-400 block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white"
                                     aria-current="page">Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/top-rated"
                                     className="cursor-pointer border-b border-transparent hover:border-blue-400 block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white">
                                Top rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="/now-playing"
                                     className="cursor-pointer border-b border-transparent hover:border-blue-400 block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white">
                                Now playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upcoming"
                                     className=" cursor-pointer border-b border-transparent hover:border-blue-400 block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white">
                                Upcoming</NavLink>
                        </li>
                        <li>
                            <NavLink to="/latest"
                                     className="cursor-pointer border-b border-transparent hover:border-blue-400 block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700  md:bg-transparent  md:p-0 dark:text-white">
                                Latest</NavLink>
                        </li>
                        {/*<select name="" id="" onChange={handleOption} className="ml-6 rounded bg-gray-700 text-white font-medium " >*/}
                        {/*    <option value="ru-RUS" selected>Русский</option>*/}
                        {/*    <option value="en-US">English</option>*/}
                        {/*    <option value="uk-UK">Український</option>*/}
                        {/*</select>*/}

                        <div>
                            <button className=" ml-6 w-full  rounded-2xl bg-gray-700 text-white font-medium hover:scale-105 "
                                    style={{padding:0, height:30}} onClick={changeLanguage}>
                                Language
                            </button>
                        </div>

                        {
                            isClicked ?
                                <div className="ml-6" style={{}}>
                                    <button
                                        onClick={() => setLanguage("ru-RU")}
                                        className="text-white">Русский
                                    </button>
                                    <button
                                        onClick={() => setLanguage("en-Us")}
                                        className="text-white mx-2">English
                                    </button>
                                </div> : ""
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;