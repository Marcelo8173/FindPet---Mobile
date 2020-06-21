import React, { useState, useEffect, useImperativeHandle, useCallback, forwardRef,useRef } from 'react';
import { InputText,InputContainer, Icon } from './styles'
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

interface InputProps extends TextInputProps{
    name: string;
    icon: string;
}

interface inputValueRef {
    value: string;
}

interface InputRef{
    focus(): void;
}
const Input: React.RefForwardingComponent<InputRef,InputProps> = ({name, icon, ...rest},ref) =>{
    const inputElementRef = useRef<any>(null);

    const {defaultValue= '',fieldName, error, registerField } = useField(name);

    const [isFocus, setIsFocus] = useState(false);
    const [isField, setisField] = useState(false);
    const inputValueRef = useRef<inputValueRef>({ value: defaultValue});

    const handleInputFocus = useCallback(() =>{
        setIsFocus(true);
    },[]);

    const handleInputBlur = useCallback(() =>{
        setIsFocus(false);
        setisField(!!inputValueRef.current.value);
    },[]);

    useImperativeHandle(ref, ()=>({
        focus(){
            inputElementRef.current.focus();
        },
    }));

    useEffect(() =>{
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value){
               inputValueRef.current.value = value;
               inputElementRef.current.setNativeProps({text: value});
            },
            clearValue(){
                inputValueRef.current.value = '';

            }
        })
   },[fieldName, registerField]);

    return(
        <InputContainer isFocus={isFocus} isErrored={!!error}>
            <Icon name={icon} color={isFocus || isField ? '#90CFDB' : '#757575'} size={16} />
            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputElementRef}
                style={{fontFamily: "Arial"}}
                placeholderTextColor="#757575"
                {...rest}
                onChangeText={(value) =>{
                    inputValueRef.current.value = value;    
                }}    

            />
        </InputContainer>
    );
}

export default forwardRef(Input);