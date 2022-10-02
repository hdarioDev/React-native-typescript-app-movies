import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1a3d84bff9dffbe5dcc3f8520c349dcc',
        language: 'es-ES'
    }
})

export default movieDB

// now_playing?api_key=&language=en-US&page=1