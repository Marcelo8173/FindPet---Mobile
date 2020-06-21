import React, { useCallback, useRef } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer, ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './style';
import InputComponent from '../../components/input';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

const Login: React.FC = () =>{
    const formRef = useRef<FormHandles>(null);
    
    const navigation = useNavigation();

    const handleRegister = useCallback(() =>{
        navigation.navigate('doRegister')
    },[]);

    const handleSubmit = useCallback(() => {

    },[])

    return(
            <ScrollView 
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{flex: 1}}
            >
            <Container>
            

                <Header>
                    <TitleHeader>
                        Cadastre-se
                    </TitleHeader>
                </Header>

                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit} >
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

                        <InputComponent
                            icon='lock'
                            name="password_confirmation" 
                            placeholder="Confirmar senha"
                            secureTextEntry
                        />


                        <LoginContentButton>
                            <LoginContentButtonText>CADASTRAR</LoginContentButtonText>
                        </LoginContentButton>
                    </Form>
                </Content>


                <Footer>
                    <FooterButtonContainer onPress={handleRegister} >
                        <Icon name="facebook"  size={18} color="#32AFC0"/>
                        <ButtonText>LOGIN COM FACEBOOK</ButtonText>
                    </FooterButtonContainer>
                    <FooterImage/>
                </Footer>

            </Container>
        </ScrollView>
    )
}


export default Login;