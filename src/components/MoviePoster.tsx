import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({ movie, height = 480, width = 300 }: Props) => {
    // console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    //https://image.tmdb.org/t/p/w500/nODIZa8p2Y31CKlp5JS0LFRmeXF.jpg

    return (
        <View
            style={{
                width,
                height,
                // paddingVertical: 16,
                marginHorizontal: 10
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
        paddingBottom: 20,
        elevation: 11,
    },
    image: {
        flex: 1,
        borderRadius: 18,

    }
})