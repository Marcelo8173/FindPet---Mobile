import React, { useCallback } from 'react';

import { View, TouchableOpacity, Text} from 'react-native';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () =>{
    const { user, singOut} = useAuth();

    const sair = useCallback(() => {
        singOut();
    },[]);


    return(
        <View>
            {console.log(user)}
            <Text>Olá mundo</Text>
            <TouchableOpacity onPress={sair}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard;