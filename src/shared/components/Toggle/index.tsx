import { Switch, SwitchProps } from 'react-native';
import { useTheme } from '@shared/hooks/theme';

const Toggle = ({
  value,
  onValueChange,
  ...rest
}: SwitchProps): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Switch
      trackColor={{
        false: customTheme.palett.colors.text_primary_opacity_100,
        true: customTheme.palett.colors.text_primary_opacity_100,
      }}
      thumbColor={customTheme.palett.colors.orange}
      ios_backgroundColor={customTheme.palett.colors.text_primary_opacity_100}
      {...rest}
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default Toggle;
