import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoviePoster from './MoviePoster'

const HorizontalSlider = ({ moviesNow, title }: any) => {
    return (
        <View style={{
            backgroundColor: 'gray',
            height: 250
        }}>
            <Text style={{
                fontSize: 30, fontWeight: 'bold'
            }} >{title}</Text>
            <FlatList
                data={moviesNow}
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