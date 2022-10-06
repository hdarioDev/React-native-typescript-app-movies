import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <LinearGradient
                colors={['red', 'yellow', 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}

                start={{ x: 0.1, y: 0.1 }} // Que empieze de Y(superior let)
                end={{ x: 0.5, y: 0.8 }} // 0.5=50%, 1=100%
            />
            {children}
        </View>
    )
}

export default GradientBackground

const styles = StyleSheet.create({})