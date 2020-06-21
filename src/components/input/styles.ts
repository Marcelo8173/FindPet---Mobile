import styled from 'styled-components/native';
import FeatheIcon from 'react-native-vector-icons/Feather';


export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    border: 2px solid #B9E0EB;
    border-radius: 48px;
    margin-bottom: 24px;
    align-content: center;
    align-items: center;
`;

export const Icon = styled(FeatheIcon)`
    margin-left: 18px;
`;
export const InputText = styled.TextInput`
    flex: 1;
   margin-left: 7px;
   
   font-size: 14px;
`;