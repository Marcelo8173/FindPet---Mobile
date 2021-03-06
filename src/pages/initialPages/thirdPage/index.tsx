import React, { useCallback }  from 'react';
import Componente1 from '../../../assets/boyandcat.png';
import { Container, Header, ImageHeaderBackground, Footer,
    ButtonFooterjump, ButtonFooterjumpText, Content, ContentTitle,
    Line, ButtonFooterNext, ButtonFooterNextText,
    ContentTitleDescription } from './styles';
import { useNavigation } from '@react-navigation/native';


const WhyAdopt2: React.FC = () =>{
    const navigation = useNavigation();

    const handleToBack = useCallback(() =>{
        navigation.goBack();
    },[])

    const handleToNavitionNextPage = useCallback(() =>{
        navigation.navigate('login');
    },[])

    return(
        <Container>
            <Header>
                <ImageHeaderBackground source={Componente1} />
            </Header>

            <Content>
                <ContentTitle>Por Que {"\n"}Adotar Pet</ContentTitle>
                <Line/>
                <ContentTitleDescription>Adotar um bichinho te ensinará sobre responsabilidade, paciência, respeito, gratidão e principalmente sobre muito amor!</ContentTitleDescription>
            </Content>

            <Footer>
               <ButtonFooterjump onPress={handleToBack}>
                    <ButtonFooterjumpText>VOLTAR</ButtonFooterjumpText>
                </ButtonFooterjump> 
                <ButtonFooterNext onPress={handleToNavitionNextPage}>
                    <ButtonFooterNextText>PRÓXIMO</ButtonFooterNextText>
                </ButtonFooterNext> 
            </Footer>
        </Container>
    );
}


export default WhyAdopt2;