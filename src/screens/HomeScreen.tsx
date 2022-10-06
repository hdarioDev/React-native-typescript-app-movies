import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors';

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

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={40} />
        </View>
    }

    const getPosterindex = async (index: number) => {

        console.log({ index })


        if (nowPlaying) {
            const uri = `https://image.tmdb.org/t/p/w500/${nowPlaying[index].poster_path}`
            const { primary, secundary } = await getImageColors(uri)
            // console.log({ result });
            console.log({ primary });
            console.log({ secundary });

            // console.log(uri);
            // console.log(nowPlaying[index].title)

        }



    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20, marginBottom: 10 }}>
                    {/* <View style={{ height: 500 }} > */}
                    <Carousel
                        data={nowPlaying!}
                        renderItem={({ item }) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.6}
                        onSnapToItem={index => { getPosterindex(index) }} // event element in front selected
                    />
                    {/* </View> */}
                    <HorizontalSlider movies={popular} title="Popular" />
                    <HorizontalSlider movies={topRated} title="Top Rated" />
                    <HorizontalSlider movies={upcoming} title="Upcoming " />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default Home

const styles = StyleSheet.create({})