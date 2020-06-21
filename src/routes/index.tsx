import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import ForgotPassword from '../pages/forgotPassword';
import Register from '../pages/register';
import WhyAdopt from '../pages/initialPages/whyAdopt';
import secondPage from '../pages/initialPages/secondPage';
import thirdpage from '../pages/initialPages/thirdPage';


const Stack = createStackNavigator();

const Routes: React.FC = () =>{

    return(
        <Stack.Navigator initialRouteName="whyAdopt"  screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name= 'whyAdopt' component={WhyAdopt} />
            <Stack.Screen name= 'secondpage' component={secondPage} />
            <Stack.Screen name= 'thirdpage' component={thirdpage} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="doRegister" component={Register} />
        </Stack.Navigator>
    );
}

export default Routes;