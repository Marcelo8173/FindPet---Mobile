import React, { useCallback } from 'react';
import { Container, Header, TitleHeader, Content, Footer, 
    FooterButtonContainer, ButtonText, LoginContentButton,  LoginContentButtonText,
    FooterImage} from './styles';
import InputComponent from '../../components/input';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'


const Login: React.FC = () =>{

    const navigation = useNavigation();

    const handleBackToLogin = useCallback(() =>{
        navigation.goBack();
    },[]);


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
                    <InputComponent
                        icon='mail'
                        name="email" 
                        placeholder="E-mail"
                    />
                    

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