import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Common/Api/MovieApi";
import { APIKey } from "../../Common/Api/MovieApiKey";

let movieText='Harry'
export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const response= await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
     return response.data
})


const initialState={
    movies:{},

}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
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
    }
})

export const {addMovies}= movieSlice.actions;

export const getAllMovies=(state)=>state.movies.movies;

export default movieSlice.reducer