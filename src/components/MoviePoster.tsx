import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie
}

const MoviePoster = ({ movie }: Props) => {
    console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    //https://image.tmdb.org/t/p/w500/nODIZa8p2Y31CKlp5JS0LFRmeXF.jpg

    return (
        <View
            style={{
                width: 300,
                height: 480,
                paddingVertical: 20,
            }}
        >
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>

        </View>
    )
}

export default MoviePoster

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 1.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    image: {
        flex: 1,
        borderRadius: 18,

    }
})