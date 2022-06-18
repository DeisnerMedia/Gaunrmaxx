import {React, useState} from "react";

const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH2 = "https://image.tmdb.org/t/p/w500/"

    const [showMore, setShowMore] = useState(false);

    return (
        <div onClick={() => selectMovie(movie)} className={"movie"}>
            <div className="movieTitles">
                {movie.poster_path &&
                <img src={IMAGE_PATH2 + movie.poster_path} alt={movie.title}/>
                }
            </div>
        </div>
    );
};


export default Movie;