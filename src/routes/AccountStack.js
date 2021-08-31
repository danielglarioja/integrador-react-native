import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewAccount from '../screens/NewAccount';
import Login from '../screens/Login';

const AccountStacks = createStackNavigator();

export default AccountStack = (props) => {
    return (
        <AccountStacks.Navigator headerMode="none">
            <AccountStacks.Screen name="LogIn" component={Login} />
            <AccountStacks.Screen name="NewAccount" component={NewAccount} />
        </AccountStacks.Navigator>
    )
}