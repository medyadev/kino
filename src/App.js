import "./App.css"
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Latest from "./pages/Latest";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorsBio from "./pages/ActorBio";
import SearchResults from "./pages/SearchResults";





const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/top-rated" element={<TopRated/>}/>
                <Route path="/now-playing" element={<NowPlaying/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/latest" element={<Latest/>}/>
                <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
                <Route path="/actors/:actorId" element={<ActorsBio/>}/>
                <Route path="/movies/search-results/:movieName" element={<SearchResults/>}/>
            </Routes>

        </div>

    );
};

export default App;