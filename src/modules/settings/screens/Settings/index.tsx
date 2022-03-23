import styled from 'styled-components/native';
import Container from '@shared/components/Container';
import Contents from '@modules/settings/components/Contents';
import Spacer from '@shared/components/Spacer';
import { Feather } from '@expo/vector-icons';
import Toggle from '@shared/components/Toggle';

import { useTheme } from '@shared/hooks/theme';
import { useCallback, useState } from 'react';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PreferenceOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.screen.rem(1)}px 0;
`;

export const SmallText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${({ theme }) => theme.screen.rem(1)}px;
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_90};
`;

const Settings = (): JSX.Element => {
  const { customTheme, changeTheme } = useTheme();
  const [themeSwitch, setThemeSwitch] = useState(true);

  const handleThemeSwitch = useCallback(() => {
    changeTheme({
      theme_name: customTheme.palett.title === 'dark' ? 'light' : 'dark',
    });
    setThemeSwitch(prev => !prev);
  }, [changeTheme, customTheme.palett.title]);

  return (
    <Container>
      <Contents label="Preferências">
        <Spacer size={16} />
        <PreferenceOptionContainer>
          <Row>
            <Feather
              name={customTheme.palett.title === 'dark' ? 'moon' : 'sun'}
              color={customTheme.palett.colors.text_primary_opacity_100}
              size={16}
            />
            <Spacer size={16} horizontal />
            <SmallText>Tema</SmallText>
          </Row>
          <Toggle value={themeSwitch} onValueChange={handleThemeSwitch} />
        </PreferenceOptionContainer>
      </Contents>
    </Container>
  );
};

export default Settings;
