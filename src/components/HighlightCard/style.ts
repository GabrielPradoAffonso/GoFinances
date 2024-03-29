import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 10px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.sucess: 
    type === 'down' ? theme.colors.warning:
    type === 'total' ? theme.colors.text_dark: 
    theme.colors.title};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.sucess};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.warning};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.text_dark};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.title : theme.colors.text_dark};
`; 

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.title : theme.colors.text};
`;