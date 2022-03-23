import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Loading = ({
  size = 'small',
  color = '#FFFFFF',
}: ActivityIndicatorProps): JSX.Element => (
  <Container>
    <ActivityIndicator size={size} color={color} />
  </Container>
);

export default Loading;
