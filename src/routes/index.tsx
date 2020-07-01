import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import ForgotPassword from '../pages/forgotPassword';
import Register from '../pages/register';
import WhyAdopt from '../pages/initialPages/whyAdopt';
import secondPage from '../pages/initialPages/secondPage';
import thirdpage from '../pages/initialPages/thirdPage';
 
  const forFade = ({ current }:any) => ({
    cardStyle: {
      opacity: current.progress
    }
  });


  interface ConfigProps{
      config:object;
  }
    const config = {
        animation: 'spring',
        config: {
            stiffness: 5000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
  
const Stack = createStackNavigator();

const Routes: React.FC = () =>{
        

    return(
        <Stack.Navigator initialRouteName="whyAdopt"  screenOptions={{
            headerShown: false,
            animationEnabled: true,
            gestureDirection: "horizontal",

        }}>
            <Stack.Screen name= 'whyAdopt' component={WhyAdopt} />
            <Stack.Screen options={{cardStyleInterpolator: forFade, transitionSpec:{
                open: config,
                close: config,
            }}} name= 'secondpage' component={secondPage} />
            <Stack.Screen options={{cardStyleInterpolator: forFade, transitionSpec:{
                open: config,
                close: config,
            }}} name= 'thirdpage' component={thirdpage} />
            
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="doRegister" component={Register} />
        </Stack.Navigator>
    );
}

export default Routes;