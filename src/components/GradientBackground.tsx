import { StyleSheet, Animated, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import useFadeAnimated from '../hooks/useFadeAnimated'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {
    const { colors, prevColors, setMainPrevColors } = useContext(GradientContext)
    const { opacity, fadeIn, fadeOut } = useFadeAnimated()
    useEffect(() => {
        fadeIn(() => {
            setMainPrevColors(colors)
            fadeOut()
        })
    }, [colors])

    return (
        <View style={{
            flex: 1,
        }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}

                start={{ x: 0.1, y: 0.1 }} // Que empieze de Y(superior let)
                end={{ x: 0.5, y: 0.8 }} // 0.5=50%, 1=100%
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}

                    start={{ x: 0.1, y: 0.1 }} // Que empieze de Y(superior let)
                    end={{ x: 0.5, y: 0.8 }} // 0.5=50%, 1=100%
                />


            </Animated.View>
            {children}
        </View>
    )
}

export default GradientBackground

const styles = StyleSheet.create({})