import styled from 'styled-components/native';

type Weight = 'light' | 'regular' | 'medium' | 'bold';

type FontSize = 'small' | 'medium' | 'large';

const fontSize = {
  tiny: 1,
  small: 1.4,
  medium: 2,
  large: 3,
};

interface TextProps {
  weight?: Weight;
  size?: FontSize;
}

const fontWeight = {
  light: 'Roboto_300Light',
  regular: 'Roboto_400Regular',
  medium: 'Roboto_500Medium',
  bold: 'Roboto_700Bold',
};

const Text = styled.Text<TextProps>`
  font-size: ${({ theme, size = 'medium' }) =>
    theme.screen.rem(fontSize[size], true)}px;
  font-family: ${({ weight = 'medium' }) => fontWeight[weight]};
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

export default Text;
