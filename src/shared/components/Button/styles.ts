import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.screen.rem(3.125)}px;

  padding: ${({ theme }) => theme.screen.rem(1)}px;
  background-color: ${({ theme }) => theme.palett.colors.orange};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1, true)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;
