import React, { useCallback, useRef } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer,TextContent, TextContentButton,
    ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './styles';
import InputComponent from '../../components/input';
import { ScrollView, TextInput, Alert,SafeAreaView } from 'react-native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationsErros';

interface singInFormData{
    email: string;
    password: string;
}

const Login: React.FC = () =>{
    const formRef = useRef<FormHandles>(null);
    const passwordRef = useRef<TextInput>(null);
    const navigation = useNavigation();
    const { singIn } = useAuth();


    const handleForgotPassword = useCallback(() =>{
        navigation.navigate('forgotPassword');
    },[])

    const handleRegister = useCallback(() =>{
        navigation.navigate('doRegister')
    },[]);

    const handleSubmit = useCallback(async(data: singInFormData) => {
        formRef.current?.setErrors({});
            try {

                const schema = Yup.object().shape({
                    email: Yup.string().required('E-mail é obrigatorio').email(),
                    password: Yup.string().min(3).required('Senha é obrigatoria'),
                })


                await schema.validate(data,{
                    abortEarly: false,
                })


                await singIn({
                    email: data.email,
                    password: data.password,
                })

            } catch (error) {
                if(error instanceof Yup.ValidationError){
                    const erros = getValidationErros(error)
                    formRef.current?.setErrors(erros);
                }

                Alert.alert('Erro na autenticação');
            }
        },[singIn]);

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
                                ref={passwordRef}
                                icon='lock'
                                name="password"
                                returnKeyType="send" 
                                placeholder="Senha"
                                secureTextEntry
                                onSubmitEditing={formRef.current?.submitForm}
                            />
                        </Form>

                        <LoginContentButton onPress={() =>{
                            formRef.current?.submitForm();
                        }}>
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