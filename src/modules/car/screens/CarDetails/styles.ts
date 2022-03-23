import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
  padding: ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(3)}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1.5)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

export const WelcomeTextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;

export const WelcomeSmallText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: #bebebe50;
`;

export const BackgroundImage = styled.Image`
  margin-top: ${({ theme }) => theme.screen.rem(2.625)}px;
  margin-left: ${({ theme }) => theme.screen.rem(9.625)}px;
`;

export const Header = styled.View`
  align-items: flex-end;
`;

export const EditButton = styled.TouchableOpacity`
  align-items: center;
`;

export const EditButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.screen.rem(0.8, true)}px;
  font-family: 'Roboto_400Regular';
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const SpecificationContainer = styled.View`
  padding: ${({ theme }) => theme.screen.rem(1)}px 0;
`;

export const SpecificationLabel = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(0.8, true)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.screen.rem(1.4, true)}px;
  font-family: 'Roboto_500Medium';
`;

export const SpecificationText = styled(SpecificationLabel)`
  color: ${({ theme }) => theme.palett.colors.orange};
  font-size: ${({ theme }) => theme.screen.rem(1, true)}px;
`;

export const PriceContainer = styled.View`
  align-items: center;
`;

export const PriceLabelText = styled(SpecificationText)`
  font-family: 'Roboto_700Bold';
  font-size: ${({ theme }) => theme.screen.rem(1.6, true)}px;
  line-height: ${({ theme }) => theme.screen.rem(2.4, true)}px;
  text-transform: capitalize;
`;

export const PriceText = styled(PriceLabelText)`
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;
