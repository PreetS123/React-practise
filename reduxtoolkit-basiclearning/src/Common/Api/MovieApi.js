import axios from 'axios';

// export const api=`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}`



export default axios.create({
    baseURL:`http://www.omdbapi.com`
})