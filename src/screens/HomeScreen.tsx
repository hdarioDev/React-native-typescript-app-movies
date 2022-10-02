import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window')
const Home = () => {
    const { top } = useSafeAreaInsets()
    // const navigation = useNavigation<any>()
    const { moviesNow, isLoading } = useMovies()
    // console.log(JSON.stringify(moviesNow, null, 2));

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={400} />
        </View>
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top }}>
                <Carousel
                    data={moviesNow}
                    renderItem={({ item }) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />

                <HorizontalSlider moviesNow={moviesNow} title="Title 1 " />

                <HorizontalSlider moviesNow={moviesNow} title="Title 2 " />

                <HorizontalSlider moviesNow={moviesNow} title="Title 3 " />

            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})