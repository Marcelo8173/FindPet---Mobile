import React, { useCallback, useRef } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer, ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './styles';
import InputComponent from '../../components/input';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'


const Login: React.FC = () =>{
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const handleBackToLogin = useCallback(() =>{
        navigation.goBack();
    },[]);

    const handleSubmit = useCallback(() =>{

    },[])
    return(
            <ScrollView 
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{flex: 1}}
            >
            <Container>

                <Header>
                    <TitleHeader>
                        Recuperação de  {"\n"} senha
                    </TitleHeader>
                </Header>

                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <InputComponent
                            icon='mail'
                            name="email" 
                            placeholder="E-mail"
                        />
                    </Form>

                    <LoginContentButton>
                        <LoginContentButtonText>ENVIAR</LoginContentButtonText>
                    </LoginContentButton>

                    
                </Content>


                <Footer>
                    <FooterButtonContainer onPress={handleBackToLogin}>
                        <Icon name="arrow-left" size={18} color="#32AFC0"/>
                        <ButtonText>VOLTAR PARA O LOGIN</ButtonText>
                    </FooterButtonContainer>
                    <FooterImage/>
                </Footer>

            </Container>
        </ScrollView>
    )
}


export default Login;