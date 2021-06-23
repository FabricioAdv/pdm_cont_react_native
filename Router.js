import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Login';
import Main from './pages/Main';
import AddEditContato from './pages/AddEditContato';

const Stack = createStackNavigator();

const Router = () =>
{
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="Main" component={ Main } />
                <Stack.Screen name="Add / Edit contatos" component={ AddEditContato } />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;