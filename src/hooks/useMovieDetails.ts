import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, ICredits } from "../interfaces/creditsInterface"
import { IResponseDetail } from "../interfaces/movieInterface"

interface MovieDetails {
    isLoading: boolean,
    movieDetail?: IResponseDetail,
    cast: Cast[]
}

const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieDetail: undefined,
        cast: []
    })
    const getMovieDetails = async () => {
        const movieDetailPromise = movieDB.get<IResponseDetail>(`/${movieId}`)
        const castPromise = movieDB.get<ICredits>(`/${movieId}/credits`)
        const [movieDetailResponse, castPromiseResponse] = await Promise.all([movieDetailPromise, castPromise])
        setState({
            isLoading: false,
            movieDetail: movieDetailResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }
    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }
}

export default useMovieDetails