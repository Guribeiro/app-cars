import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '@shared/hooks/theme';

const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Loading = ({ size = 'small' }: ActivityIndicatorProps): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Container>
      <ActivityIndicator
        size={size}
        color={customTheme.palett.colors.text_primary_opacity_100}
      />
    </Container>
  );
};

export default Loading;
