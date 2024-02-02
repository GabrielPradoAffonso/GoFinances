import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
}
