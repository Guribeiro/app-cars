import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.screen.rem(3)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
`;

export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
`;
