import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DetailScreen = () => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ marginTop: top }}>
            <Text>DetailScreen</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})