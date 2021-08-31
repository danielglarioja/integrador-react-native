import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountStack from './AccountStack';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export default AppStack = (props) => {
    const user = useSelector(state => state.user.user);
    return (
        <Stack.Navigator headerMode="none">
            {
                user ? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="AccountStack" component={AccountStack} />
                )
            }
        </Stack.Navigator>
    )
}