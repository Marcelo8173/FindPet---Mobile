import React from 'react';
import {Authprovider} from './Auth';


const AuthProvider: React.FC = ({children}) => {
    return(
        <Authprovider>
            {children}
        </Authprovider>
    )

}


export default AuthProvider;