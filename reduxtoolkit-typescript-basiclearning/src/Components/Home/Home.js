import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../Common/Api/MovieApi';
import {APIKey} from '../../Common/Api/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../Features/movies/movieSlice';


const Home = () => {
    const dispatch= useDispatch();
    const movieText='Avenger';

    const fetchMovies=async()=>{
        const response= await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>{
            console.log('Error',err);
        });
        dispatch(addMovies(response.data));
        console.log('The response from API',response);
     };

    useEffect(()=>{       
     fetchMovies();
    },[])

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>
    )
}

export default Home