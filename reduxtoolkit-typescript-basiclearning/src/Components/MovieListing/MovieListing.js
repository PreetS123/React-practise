import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../Features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
    const movies=useSelector(getAllMovies);

    console.log('movielisting',movies)

    let renderMovies="";
    renderMovies= movies.Response==="True"?(
        movies.Search?.map((movie,index)=>{
            return <MovieCard key={index}/>
        })
    ):(<div className='movies-error'>
        <h3>{movies.Error}</h3>
    </div>)
    return (
        <div>
             
        </div>
    )
}

export default MovieListing