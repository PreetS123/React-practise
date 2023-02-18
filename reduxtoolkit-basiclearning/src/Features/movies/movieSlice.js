import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Api/MovieApi";
import { APIKey } from "../../Common/Api/MovieApiKey";

let movieText='Harry'
export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const response= await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
     return response.data
})

let seriesText='Friends'
export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async()=>{
    const response= await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
     return response.data
})


export const fetchAsyncMovieOrShows=createAsyncThunk('movies/fetchAsyncMovieOrShows',async(id)=>{
    const response= await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
     return response.data
})


const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>(
            console.log('pending')
        ),
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log('Fetched Successfully!')
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('Fetched Successfully!')
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShows.fulfilled]:(state,{payload})=>{
            console.log('Fetched Successfully!')
            return {...state,selectedMovieOrShow:payload}
        },
    }
})

export const {removeSelectedMovieOrShow}= movieSlice.actions;

export const getAllMovies=(state)=>state.movies.movies;

export const getAllShows=(state)=>state.movies.shows;

export const getAllMovieOrShow=(state)=>state.movies.selectedMovieOrShow;


export default movieSlice.reducer