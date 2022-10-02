import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import movieDB from '../api/movieDB'
import { IResponseMoviePLayNow } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window')
const Home = () => {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation<any>()
    // const insets = useSafeAreaInsets();

    const { moviesNow, isLoading } = useMovies()
    console.log(JSON.stringify(moviesNow, null, 2));

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={400} />
        </View>
    }

    return (<View style={{ marginTop: top }}>
        <Carousel
            data={moviesNow}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
        />
    </View>)
}

export default Home

const styles = StyleSheet.create({})