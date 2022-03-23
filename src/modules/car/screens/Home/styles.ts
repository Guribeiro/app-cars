import styled from 'styled-components/native';
import Text from '@shared/components/Text';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
  padding: ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px 0;
  justify-content: space-between;
`;

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
  text-transform: capitalize;
`;

export const BackgroundImage = styled.Image`
  margin-top: ${({ theme }) => theme.screen.rem(2.625)}px;
  margin-left: ${({ theme }) => theme.screen.rem(9.625)}px;
`;

export const NumberedCarsContainer = styled.View`
  align-items: center;
  align-self: flex-end;
`;
