import styled from 'styled-components/native';
import Text from '@shared/components/Text';

const SmallText = styled(Text)`
  font-family: 'Roboto_400Regular';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_60};
`;

export default SmallText;
