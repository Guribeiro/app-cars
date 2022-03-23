import styled from 'styled-components/native';

const TextError = styled.Text`
  position: absolute;
  text-transform: uppercase;
  top: ${({ theme }) => theme.screen.rem(0.625)}px;
  font-size: ${({ theme }) => theme.screen.rem(0.5, true)}px;
  color: ${({ theme }) => theme.palett.colors.red};
  right: 0px;
  letter-spacing: 1px;
  font-family: 'Roboto_400Regular';
`;

export default TextError;
