import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
`;

// Header
export const Header = styled.View`
    width: 342px;
    margin-top: 100px;
`;

export const ImageHeaderBackground = styled.Image`
    width: 342px;
    height: 250px;
`;

// content
export const Content = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30px;
`;
export const ContentTitle = styled.Text`
    font-size: 27px;
    text-align: center;
    font-family: 'RobotoSlab-Medium';
    color: #757575;
`;

export const Line = styled.View`
    background: #FFBD1D;
    margin-top: 11px;
    margin-bottom: 11px;
    width: 64px;
    height: 2px;
`;

export const ContentTitleDescription = styled.Text`
    font-family: Arial;
    font-size: 14px;
    text-align: center;
    color: #B5B5B3;
    margin-left: 55px;
    margin-right: 55px;
`;

//footer
export const Footer = styled.View`
    background: #90CFDB;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    width: 100%;
    height: 150px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

export const ButtonFooterjump = styled.TouchableOpacity`
    width: 145px;
    height: 48px;
    background: #B9E0EB;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 9px;

`;

export const ButtonFooterjumpText = styled.Text`
    color: #FFFFFF;
    font-family: Arial;
    font-size: 12px;
`;


export const ButtonFooterNext = styled.TouchableOpacity`
     width: 145px;
    height: 48px;
    background: #32AFC0;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-left: 9px;
`;

export const ButtonFooterNextText = styled.Text`
    color: #FFFFFF;
    font-family: Arial;
    font-size: 12px;
`;