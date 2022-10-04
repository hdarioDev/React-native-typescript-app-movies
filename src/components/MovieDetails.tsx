import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IResponseDetail } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem'

interface Props {
    movieDetail: IResponseDetail,
    cast: Cast[]
}

const MovieDetails = ({ movieDetail, cast }: Props) => {
    return (
        <>

            <View style={{ marginHorizontal: 20 }}>
                {/* Detalle */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="gray" size={15} />
                    <Text style={{ marginLeft: 4 }}>{movieDetail.vote_average}</Text>
                    <Text style={{ marginLeft: 10 }} >- {movieDetail.genres.map(item => item.name).join(', ')}</Text>
                </View>
                {/* Historia */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieDetail.overview}
                </Text>
                {/* Presupuesto */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieDetail.budget, { code: 'USD' })}
                </Text>
                {/* Actores */}
                <View style={{ marginTop: 4, marginBottom: 60 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                        Actores
                    </Text>
                    <FlatList
                        style={{ paddingBottom: 20 }}
                        data={cast}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>

            </View>
        </>

    )
}

export default MovieDetails

const styles = StyleSheet.create({
    containerDetail: {
        // backgroundColor: 'gray',

    }
})