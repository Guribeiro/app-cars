import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1.5)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
`;

export const DeleteButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.screen.rem(0.8, true)}px;
  font-family: 'Roboto_400Regular';
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
`;
