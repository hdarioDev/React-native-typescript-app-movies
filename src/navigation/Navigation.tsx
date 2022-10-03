import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    Home: undefined,
    Detail: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerShadowVisible: false,
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
                // contentStyle: {
                //     backgroundColor: 'white'
                // },
                // headerStyle: {
                //     backgroundColor: 'white',
                // },

            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}