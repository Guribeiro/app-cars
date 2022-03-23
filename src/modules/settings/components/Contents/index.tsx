import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Spacer from '@shared/components/Spacer';

const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(3)}px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ theme }) =>
    theme.palett.colors.secondary_opacity_100};
`;

interface ContentsProps {
  label: string;
  children: ReactNode;
}

const Contents = ({ label, children }: ContentsProps): JSX.Element => {
  return (
    <Container>
      <Label>{label}</Label>
      <Spacer size={8} />
      {children}
    </Container>
  );
};

export default Contents;
