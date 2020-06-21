import React from 'react';
import { InputText,InputContainer, Icon } from './styles'
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    name: string;
    icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) =>{
    return(
        <InputContainer>
            <Icon name={icon} color='#757575' size={16} />
            <InputText
                style={{fontFamily: "Arial"}}
                placeholderTextColor="#757575"
                {...rest}
            />
        </InputContainer>
    );
}

export default Input;