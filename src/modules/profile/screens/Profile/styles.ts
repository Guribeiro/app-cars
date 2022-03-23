import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
  padding: ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(3)}px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1.5)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

export const TextEmphasized = styled(Text)`
  color: #ff8100;
`;

export const SmallText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: #bebebe50;
`;

export const BackgroundImage = styled.Image`
  margin-top: ${({ theme }) => theme.screen.rem(2.625)}px;
  margin-left: ${({ theme }) => theme.screen.rem(9.625)}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
