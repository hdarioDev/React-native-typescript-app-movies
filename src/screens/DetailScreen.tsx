import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
// import { Movie } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigation/Navigation';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';;

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

const DetailScreen = ({ route, navigation }: Props) => {
    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    console.log("id detail ", movie.id);

    const {
        isLoading,
        movieDetail,
        cast
    } = useMovieDetails(movie.id)
    // console.log("cast --> ", cast);

    const { top } = useSafeAreaInsets()
    return (
        <ScrollView>
            <View style={{ ...styles.imageContainer }}>
                {/* <Text>DetailScreen</Text> */}
                <View style={styles.borderImage}>
                    <Image
                        source={{ uri }}
                        style={styles.image}
                    />
                </View>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {movie.original_title}
                </Text>
                <Text style={styles.subTitle}>
                    {movie.title}
                </Text>
            </View>


            {
                isLoading ?
                    <ActivityIndicator size={30} color="gray" style={{ marginTop: 10 }} />
                    :
                    <MovieDetails movieDetail={movieDetail!} cast={cast} />
            }
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={styles.backButton}>
                <Icon
                    name="arrow-back-outline"
                    color="white"
                    size={40}

                />
            </TouchableOpacity>


        </ScrollView>

    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.8,


        // paddingBottom: 16,
        backgroundColor: 'cyan',
        borderBottomEndRadius: 28,
        borderBottomStartRadius: 28,
        //SOMBRA
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    },
    borderImage: {
        flex: 1,
        overflow: 'hidden',

        borderBottomEndRadius: 28,
        borderBottomStartRadius: 28,
    },
    image: {
        flex: 1,
        // borderBottomEndRadius: 18,
    },
    titleContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20, fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16, fontWeight: 'bold',
        opacity: 0.8,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 2,
    }
})