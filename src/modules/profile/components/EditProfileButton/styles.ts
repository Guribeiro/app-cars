import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)``;

export const InputText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  line-height: ${({ theme }) => theme.screen.rem(3.375)}px;
  padding: 0px ${({ theme }) => theme.screen.rem(1)}px;
`;

export const InputLabel = styled.Text`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  font-size: ${({ theme }) => theme.screen.rem(0.5)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const TextInputRow = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palett.colors.secondary_opacity_100};
  border-radius: 10px;
  background: ${({ theme }) => theme.palett.colors.secondary_opacity_100};
  height: ${({ theme }) => theme.screen.rem(3.375)}px;
`;
