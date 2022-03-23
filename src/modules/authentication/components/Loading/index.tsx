import React from 'react';
import styled from 'styled-components/native';
import lottieCarAnimation from '@modules/authentication/assets/car-lottie.json';

import AnimatedLottieView from 'lottie-react-native';

const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palett.colors.primary_opacity_100};
`;

const Loading = (): JSX.Element => (
  <Container>
    <AnimatedLottieView
      autoPlay
      loop
      resizeMode="contain"
      source={lottieCarAnimation}
    />
  </Container>
);

export default Loading;
