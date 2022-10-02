import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { IResponseMoviePLayNow, Movie } from "../interfaces/movieInterface"

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesNow, setMoviesNow] = useState<Movie[]>([])

    const getData = async () => {
        const resp = await movieDB.get<IResponseMoviePLayNow>('/now_playing')
        const movies = resp.data.results
        setMoviesNow(movies)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        moviesNow,
        isLoading
    }
}
