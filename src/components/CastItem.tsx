import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    // actor: Cast
}

const CastItem = ({ actor }: any) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

    return (
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image source={{ uri }} style={{ width: 60, height: 60, borderRadius: 10 }} />

            }
            <View style={styles.info}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

export default CastItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 8,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
        marginRight: 12,
        paddingRight: 22,
        // paddingBottom: 12,
        shadowColor: "#c5bfbf",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    info: {
        marginLeft: 8,

    }
})