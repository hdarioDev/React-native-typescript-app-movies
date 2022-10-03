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
    const {
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading
    } = useMovies()
    // console.log(JSON.stringify(moviesNow, null, 2));


    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={400} />
        </View>
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top, marginBottom: 20 }}>
                {/* <View style={{ height: 500 }} > */}
                <Carousel
                    data={nowPlaying!}
                    renderItem={({ item }) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.6}
                />
                {/* </View> */}
                <HorizontalSlider movies={popular} title="Popular" />

                <HorizontalSlider movies={topRated} title="Top Rated" />

                <HorizontalSlider movies={upcoming} title="Upcoming " />

            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})