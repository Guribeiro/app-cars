import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { AlertTypesVariations } from '@shared/hooks/alert';
import Row from '@shared/components/Row';
import Spacer from '@shared/components/Spacer';

import { Container, Content, Message } from './styles';

interface AlertProps {
  message: string;
  type?: AlertTypesVariations;
  onClose: () => void;
}

const TContainer = styled(TouchableOpacity)``;

type FeatherIcons = keyof typeof Feather.glyphMap;

interface TouchableProps extends TouchableOpacityProps {
  icon: FeatherIcons;
}

const Touchable = ({ icon, ...rest }: TouchableProps): JSX.Element => {
  return (
    <TContainer {...rest}>
      <Feather name={icon} color="#FFFFFF" size={22} />
    </TContainer>
  );
};

const Alert = ({ message, type, onClose }: AlertProps): JSX.Element => {
  useEffect(() => {
    const timer = setInterval(() => onClose(), 3000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <Container>
      <Content type={type}>
        <Row>
          <Feather name="alert-octagon" color="#FFFFFF" size={22} />
          <Spacer size={16} horizontal />
          <Message>{message}</Message>
        </Row>
        <Touchable icon="x" onPress={onClose} />
      </Content>
    </Container>
  );
};

export default Alert;
