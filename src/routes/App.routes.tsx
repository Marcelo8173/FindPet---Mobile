import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/dashboard';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () =>{

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Dashboard' component={Dashboard}/>
        </Stack.Navigator>
    );
}

export default AppRoutes;