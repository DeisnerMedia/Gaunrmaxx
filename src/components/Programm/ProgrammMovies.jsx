import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import './Movies.css';


function ProgrammMovies() {

    const MOVIE_URL = 'https://api.themoviedb.org/3/movie/now_playing?';
    const API_KEY = '1057d78bb625ada77ae733d0ebf8540d';
    const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1200/'

    const [playing, setPlaying] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: 'Filme laden..'});

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault();
        }

        const {data} = await axios.get(`${MOVIE_URL}api_key=${API_KEY}&language=de&page=1`, {
            params: {
                api_key: API_KEY
            }
        });
    
        console.log(data.results[0])
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }

    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE_URL}${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Offizieller Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }


    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    const renderMovies = () => (
        movies.map(movie => (
            <Movie
                selectMovie={selectMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )
  return (
    <>
        <div className='movie-position'>       
            <h1 className='contentTitle'>Top Empfehlungen</h1>
            
            <div className='movies'>
                <div className='handle left-handle'></div>
                    {movies.length ?
                    <div>
                        <div className={"center-max-size container"}>
                            {renderMovies()}
                        </div>
                    </div>
                    : 'Tut uns leid, es wurden keine Filme gefunden'}
                <div className='handle right-handle'></div>
            </div>
        </div>
    </>
  )
}

export default ProgrammMovies