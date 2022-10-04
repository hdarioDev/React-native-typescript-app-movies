import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoviePoster from './MoviePoster'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    title?: string,
    movies: Movie[]
}

const HorizontalSlider = ({ movies, title }: any) => {
    return (
        <View style={{
            height: (!!title) ? 216 : 220,
            marginBottom: 0,
            // backgroundColor: 'red'
            // paddingBottom: 8
        }}>
            <Text style={{
                fontSize: 30, fontWeight: 'bold', marginLeft: 8, marginBottom: 6
            }} >{title}</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MoviePoster
                        movie={item}
                        width={140}
                        height={170}
                    />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
const styles = StyleSheet.create({})