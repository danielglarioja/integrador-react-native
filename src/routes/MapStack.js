import React from 'react';
import Map from '../screens/Map';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
    return (
        <MapStack.Navigator>
            <MapStack.Screen 
            name="Map" 
            component={Map} 
            options={{
                title: 'Map',
                headerTintColor: 'rgb(118, 177, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
              
            }}
            />
        </MapStack.Navigator>
    )
}