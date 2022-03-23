import styled from 'styled-components/native';
import Text from '@shared/components/Text';

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;

export const SmallText = styled(Text)`
  font-family: 'Roboto_400Regular';
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_60};
`;

export const BackgroundImage = styled.Image`
  margin-top: ${({ theme }) => theme.screen.rem(2.625)}px;
  margin-left: ${({ theme }) => theme.screen.rem(9.625)}px;
`;
