import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import ForgotPassword from '../pages/forgotPassword';
import Register from '../pages/register';

const Stack = createStackNavigator();

const Routes: React.FC = () =>{

    return(
        <Stack.Navigator initialRouteName="login"  screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="doRegister" component={Register} />
        </Stack.Navigator>
    );
}

export default Routes;