import styled from 'styled-components/native';
import Text from '@shared/components/Text';

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;
