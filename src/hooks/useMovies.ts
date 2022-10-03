import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { IResponseMovies, Movie } from "../interfaces/movieInterface"
interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>()


    const getData = async () => {

        const nowPlayingPromise = movieDB.get<IResponseMovies>('/now_playing')
        const popularPromise = movieDB.get<IResponseMovies>('/popular')
        const topRatedPromise = movieDB.get<IResponseMovies>('/top_rated')
        const upcomingPromise = movieDB.get<IResponseMovies>('/upcoming')

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])
        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
