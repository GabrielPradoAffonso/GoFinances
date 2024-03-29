import styled, {css} from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    border-width: ${({ isActive, type}) => isActive ? 0 : 1.5}px ;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 16px;
    justify-content: center;

    ${({ isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.sucess_light};
    `}

    ${({ isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.warning_light};
    `}
`;

export const Title = styled.Text<ContainerProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ isActive, type, theme }) => isActive ? theme.fonts.bold : theme.fonts.regular};

  /* Adicione a lógica de mudança de font family aqui */
  ${({ isActive, type, theme }) => isActive && type === 'up' && css`
    font-family: ${theme.fonts.bold};
  `}

  ${({ isActive, type, theme }) => isActive && type === 'down' && css`
    font-family: ${theme.fonts.bold};
  `}

  color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.title : theme.colors.title};
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.sucess : theme.colors.warning}`;


