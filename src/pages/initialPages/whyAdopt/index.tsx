import React, { useCallback }  from 'react';
import Componente1 from '../../../assets/girldog.png';
import { Container, Header, ImageHeaderBackground, Footer,
    ButtonFooterjump, ButtonFooterjumpText, Content, ContentTitle,
    Line, ButtonFooterNext, ButtonFooterNextText,
    ContentTitleDescription } from './styles';
import { useNavigation } from '@react-navigation/native';


const WhyAdopt: React.FC = () =>{
    const navigation = useNavigation();

    const handleJumpLogin = useCallback(() =>{
        navigation.navigate('login');
    },[])

    const handleToNavitionNextPage = useCallback(() =>{
        navigation.navigate('secondpage')
    },[])
    return(
        <Container>
            <Header>
                <ImageHeaderBackground source={Componente1} />
            </Header>

            <Content>
                <ContentTitle>Por Que {"\n"}Adotar Pet</ContentTitle>
                <Line/>
                <ContentTitleDescription>Você passará a ter um companheiro fiel para todos os momentos.</ContentTitleDescription>
            </Content>

            <Footer>
               <ButtonFooterjump onPress={handleJumpLogin}>
                    <ButtonFooterjumpText>PULAR</ButtonFooterjumpText>
                </ButtonFooterjump> 
                <ButtonFooterNext onPress={handleToNavitionNextPage}>
                    <ButtonFooterNextText>PRÓXIMO</ButtonFooterNextText>
                </ButtonFooterNext> 
            </Footer>
        </Container>
    );
}


export default WhyAdopt;