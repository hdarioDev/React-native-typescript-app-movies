import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native'

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({ movie, height = 480, width = 300 }: Props) => {
    // console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    //https://image.tmdb.org/t/p/w500/nODIZa8p2Y31CKlp5JS0LFRmeXF.jpg
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Detail', movie)}
            style={{
                width,
                height,
                // paddingVertical: 16,
                marginHorizontal: 8,
                paddingBottom: 18
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

        </TouchableOpacity>
    )
}

export default MoviePoster

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // overflow: 'hidden',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    image: {
        flex: 1,
        borderRadius: 18,

    }
})