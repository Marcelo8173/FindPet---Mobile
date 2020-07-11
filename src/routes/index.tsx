import React from 'react';
import { ActivityIndicator, View} from 'react-native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () =>{
    const {user, loading } = useAuth();
    console.log(user)
    
    if(loading){
        return(
            <View>
                <ActivityIndicator />
            </View>
        );
    }
    
    return user ? <AppRoutes/> : <AuthRoutes/>
}

export default Routes;