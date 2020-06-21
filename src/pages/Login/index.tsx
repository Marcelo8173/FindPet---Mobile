import React, { useCallback } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer,TextContent, TextContentButton,
    ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './styles';
import InputComponent from '../../components/input';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () =>{

    const navigation = useNavigation();

    const handleForgotPassword = useCallback(() =>{
        navigation.navigate('forgotPassword');
    },[])

    const handleRegister = useCallback(() =>{
        navigation.navigate('doRegister')
    },[])

    return(
        <Container>

            <Header>
                <TitleHeader>
                    Login
                </TitleHeader>
            </Header>

            <Content>
                <InputComponent
                    icon='mail'
                    name="email" 
                    placeholder="E-mail"
                />
                
                <InputComponent
                    icon='lock'
                    name="password" 
                    placeholder="Senha"
                    secureTextEntry
                />

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
    )
}


export default Login;