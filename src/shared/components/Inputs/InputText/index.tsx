import React from 'react';
import { TextInputProps } from 'react-native';
import { FieldError } from 'react-hook-form';
import TextError from '@shared/components/TextError';
import { useTheme } from '@shared/hooks/theme';
import { Container, InputText, InputLabel, TextInputRow } from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  error?: FieldError | undefined;
}

const Input = ({
  label,
  error,
  required,
  ...rest
}: InputProps): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Container>
      {error && <TextError>{error.message}</TextError>}
      <InputLabel>
        {label} {required && '*'}
      </InputLabel>
      <TextInputRow>
        <InputText
          keyboardAppearance="dark"
          autoCorrect={false}
          autoCapitalize="words"
          placeholderTextColor={
            customTheme.palett.colors.text_primary_opacity_60
          }
          {...rest}
        />
      </TextInputRow>
    </Container>
  );
};

export default Input;
