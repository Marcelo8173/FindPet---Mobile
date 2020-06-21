import React, { useCallback, useRef } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer,TextContent, TextContentButton,
    ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './styles';
import InputComponent from '../../components/input';
import { ScrollView, TextInput } from 'react-native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

interface singInFormData{
    email: string;
    password: string;
}

const Login: React.FC = () =>{
    const formRef = useRef<FormHandles>(null);
    const passwordRef = useRef<TextInput>(null);

    const navigation = useNavigation();


    const handleForgotPassword = useCallback(() =>{
        navigation.navigate('forgotPassword');
    },[])

    const handleRegister = useCallback(() =>{
        navigation.navigate('doRegister')
    },[]);

    const handleSubmit = useCallback(async(data: singInFormData) => {
        formRef.current?.setErrors({});
            try {


            } catch (error) {
               
            }
        },[]);

    return(
        <>
            <ScrollView 
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{flex: 1}}
            >
                <Container>

                    <Header>
                        <TitleHeader>
                            Login
                        </TitleHeader>
                    </Header>

                    <Content>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <InputComponent
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyboardType="email-address"
                                icon='mail'
                                name='email' 
                                placeholder='E-mail'
                                returnKeyType='next'
                                onSubmitEditing={()=>{
                                    passwordRef.current?.focus();
                                }}

                            />
                            
                            <InputComponent
                                icon='lock'
                                name="password"
                                returnKeyType="send" 
                                placeholder="Senha"
                                secureTextEntry
                            />
                        </Form>

                        <LoginContentButton>
                            <LoginContentButtonText>ENTRAR</LoginContentButtonText>
                        </LoginContentButton>

                        <TextContentButton onPress={handleForgotPassword} >
                            <TextContent>Esqueceu a senha?</TextContent>
                        </TextContentButton>
                    </Content>


                    <Footer>
                        <FooterButtonContainer onPress={handleRegister} >
                            <ButtonText>FAZER CADASTRO</ButtonText>
                        </FooterButtonContainer>
                        <FooterImage/>
                    </Footer>

                </Container>
            </ScrollView>
        </>
    )
}


export default Login;