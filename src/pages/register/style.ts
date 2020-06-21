import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    margin-top: 120px;
    align-items: center;
    
`;

export const TitleHeader = styled.Text`
    font-size: 27px;
    color: #757575;
`;

export const Content = styled.View`
    margin-top: 35px;
    margin-right: 45px;
    margin-left: 45px;
`;

export const LoginContentButton = styled(RectButton)`
    margin-top: 15px;
    margin-bottom: 10px;
    width: 100%;
    font-size: 10px;
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: #32AFC0;

`

export const LoginContentButtonText = styled.Text`
    color: #FFFF;
`

export const Footer = styled.View`
    margin-top: 35px;
    margin-left: 0px;
    margin-right: 30px;
    border-radius: 16px;
    background: #FFBD1D;
    height: 100%;    
`;

export const FooterButtonContainer = styled(RectButton)`
    flex-direction: row;
    margin-left: 60px;
    margin-right: 30px;
    font-size: 10px;
    height: 60px;
    background: #ffff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    border-radius: 10px;
    margin-top: 35px;
`;

export const ButtonText = styled.Text`
    margin-left: 15px;
    color: #32AFC0;
    font-family: Arial;
    font-size: 12px;
`;

export const FooterImage = styled.View`
    background: #90CFDB;
    margin-left: 45px;
    margin-top: 30px;
    width: 100%;
    border-radius: 10px;
    height: 70px;

`;