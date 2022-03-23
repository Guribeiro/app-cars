import { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Contents from '@modules/settings/components/Contents';
import Container from '@shared/components/Container';
import Spacer from '@shared/components/Spacer';
import Toggle from '@shared/components/Toggle';
import { useTheme } from '@shared/hooks/theme';

import { PreferenceOptionContainer, Row, SmallText } from './styles';

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
