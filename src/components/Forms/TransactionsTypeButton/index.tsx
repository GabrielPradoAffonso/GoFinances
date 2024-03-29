import React from "react";
import { TouchableOpacityProps } from "react-native";

//import { Button } from
import { 
    Container,
    Icon, 
    Title,
} from "./styles";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({type, isActive, title, ...rest} : Props){
    return(
        <Container 
        isActive={isActive}
        type={type}
        {...rest} 
        >

            <Icon name={icons[type]} type={type}/>
            <Title isActive={isActive} type={type}>{title}</Title>
        </Container>
    )
}