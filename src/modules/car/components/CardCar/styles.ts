import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.palett.colors.secondary_opacity_100};
  align-items: center;
  width: 100%;
  padding: 24px;
  margin-top: 120px;
  border-radius: 10px;
`;

export const CarImage = styled.Image`
  position: absolute;
  top: -120px;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const SpecificationContainer = styled.View`
  padding: ${({ theme }) => theme.screen.rem(0.2)}px 0;
`;

export const SpecificationLabel = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(0.8, true)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_60};
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
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
`;
