import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View``;

export const TextInputRow = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 1px solid
    ${({ theme }) => theme.palett.colors.text_primary_opacity_60};
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
  height: ${({ theme }) => theme.screen.rem(3.6)}px;
`;

export const InputText = styled(TextInput)`
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
  height: ${({ theme }) => theme.screen.rem(3.375)}px;
  padding: 0px ${({ theme }) => theme.screen.rem(1)}px;
  flex: 1;
`;

export const InputLabel = styled.Text`
  text-transform: uppercase;
  font-family: 'Roboto_700Bold';
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  font-size: ${({ theme }) => theme.screen.rem(0.5, true)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.5)}px;
`;
