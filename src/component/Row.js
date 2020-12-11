import React, { useEffect, useState } from 'react';
import "../css/Row.css";
import axios from "../js/axios.js";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [Movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results)
            return request;
        }
        fetchdata()
    }, [fetchUrl])

    const opts = {
        hight: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {Movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name}

                    />
                ))}
            </div>
            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row
