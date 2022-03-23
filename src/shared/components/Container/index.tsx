import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import styled from 'styled-components/native';

const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(3)}px;
  justify-content: space-evenly;
  height: 730px;
`;

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    enabled
  >
    <Content>{children}</Content>
  </KeyboardAvoidingView>
);

export default Container;
