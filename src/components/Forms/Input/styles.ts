import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`;
