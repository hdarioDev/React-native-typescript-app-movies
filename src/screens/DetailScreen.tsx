import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

const DetailScreen = ({ route }: Props) => {
    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`


    const { top } = useSafeAreaInsets()
    return (
        <View style={{ marginTop: top, ...styles.imageContainer }}>
            <Text>DetailScreen</Text>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7
    },
    image: {
        flex: 1,
    }
})