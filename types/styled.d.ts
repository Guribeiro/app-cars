import 'styled-components';
// import { theme } from '@utils/theme';
import type { ResponsiveTheme } from '../src/shared/hooks/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ResponsiveTheme {
    palett: {
      title: 'light' | 'dark';
      colors: {
        primary_opacity_100: string;
        primary_opacity_90: string;
        primary_opacity_60: string;
        secondary_opacity_100: string;
        secondary_opacity_90: string;
        secondary_opacity_60: string;
        gray: string;
        orange: string;
        blue: string;
        green: string;
        red: string;
        white: string;
        white_opacity_60: string;
        text_primary_opacity_100: string;
        text_primary_opacity_90: string;
        text_primary_opacity_60: string;
        text_secondary_opacity_100: string;
        text_secondary_opacity_90: string;
        text_secondary_opacity_60: string;
      };
    };
  }
}
