import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User{
    id: string;
    name: string;
    email: string;
    avatar_url: string;
}

interface AuthState{
    token: string;
    user: User;
}

interface singInCredentias{
    email: string;
    password: string;
}

interface AuthContextData{
    user: User;
    loading: boolean;
    singIn(credentias: singInCredentias): Promise<void>;
    singOut(): void;
    updateUser(user: User): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const Authprovider: React.FC = ({children}) => {
   // salvando os dados do login em um estado
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

useEffect(() =>{
    async function loadStorageData(): Promise<void>{
        const [token, user] = await AsyncStorage.multiGet(['@FindPet: token','@FindPet: user']);

        if(token[1] && user[1]){
            api.defaults.headers.authorization = `Bearer ${token[1]}`

            setData({token: token[1], user: JSON.parse(user[1])});
        };
       setLoading(false);
    }

    loadStorageData();

},[])

const singIn = useCallback( async ({email, password}) =>{
        const response = await api.post('users/sessions',{
            email,
            password,
        });

        const {token, user} = response.data;

        await AsyncStorage.multiSet([
            ['@FindPet: token',token],
            ['@FindPet: user', JSON.stringify(user)]
        ])

        api.defaults.headers.authorization = `Bearer ${token}`
        setData({token, user});
    }, []);

    const updateUser = useCallback(async (user: User)=>{
        
        await AsyncStorage.setItem('@FindPet:user', JSON.stringify(user))

        setData({
            token: data.token,
            user,
        })
    },[setData, data.token])

const singOut = useCallback(async () => {

    await AsyncStorage.multiRemove([
        '@FindPet: token',
        '@FindPet: user'
    ]);

    setData({} as AuthState);
}, []);

    return(
        <AuthContext.Provider value = {{user: data.user, loading, singIn, singOut, updateUser}}>
            {children}
        </AuthContext.Provider>
    );
};


export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}