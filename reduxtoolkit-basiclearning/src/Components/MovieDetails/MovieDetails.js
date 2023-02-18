import React, { useEffect } from 'react';
import './MovieDetails.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShows, getAllMovieOrShow,removeSelectedMovieOrShow } from '../../Features/movies/movieSlice';
import { FaStar,FaThumbsUp,FaFilm ,FaCalendarAlt} from "react-icons/fa";

const MovieDetails = () => {
    const {imdbID}= useParams();
    const dispatch= useDispatch();
     const data= useSelector(getAllMovieOrShow);


    useEffect(()=>{
     dispatch(fetchAsyncMovieOrShows(imdbID));
     return ()=>{
        dispatch(removeSelectedMovieOrShow())
     }
    },[dispatch,imdbID])

    return (
        <div className='movie-section'>
           <div className='section-left'>
            <div className='movie-title'>
                {data.Title}
            </div>
            <div className='movie-rating'>
                <span>IMDB Rating <FaStar/> : {data.imdbRating}</span>
                <span>IMDB Votes <FaThumbsUp/> : {data.imdbVotes}</span>
                <span>Runtime <FaFilm/> : {data.imdbRuntime}</span>
                <span>Year <FaCalendarAlt/> : {data.Year}</span>
            </div>
            <div className='movie-plot'>{data.Plot}</div>
            <div className='movie-info'>
                <div>
                    <span>Director</span>
                    <span>{data.Director}</span>
                </div>
                <div>
                    <span>Stars</span>
                    <span>{data.Actors}</span>
                </div>
                <div>
                    <span>Generes</span>
                    <span>{data.Genere}</span>
                </div>
                <div>
                    <span>Language</span>
                    <span>{data.Language}</span>
                </div>
                <div>
                    <span>Awards</span>
                    <span>{data.Awards}</span>
                </div>
            </div>
            </div> 
            <div className='section-right'>
                <img src={data.Poster} alt={data.Title}  />
            </div>
        </div>
    )
}

export default MovieDetails