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
            // backgroundColor: 'gray',
            height: (!!title) ? 235 : 220,
            marginBottom: 12
            // paddingVertical: 16
        }}>
            <Text style={{
                fontSize: 30, fontWeight: 'bold', marginLeft: 8, marginBottom: 8
            }} >{title}</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MoviePoster
                        movie={item}
                        width={140}
                        height={200}
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