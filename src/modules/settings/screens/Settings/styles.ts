import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PreferenceOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.screen.rem(1)}px 0;
`;

export const SmallText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
`;
