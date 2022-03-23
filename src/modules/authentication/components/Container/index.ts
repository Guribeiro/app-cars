import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
  padding: ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(3)}px;
  justify-content: space-between;
`;

export default Container;
