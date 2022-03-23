export const light = {
  title: 'light',
  colors: {
    primary_opacity_100: '#E9EDEE',
    primary_opacity_90: '#E9EDEE90',
    primary_opacity_60: '#E9EDEE60',
    secondary_opacity_100: '#DEE4E7',
    secondary_opacity_90: '#DEE4E790',
    secondary_opacity_60: '#DEE4E760',
    gray: '#D2D7DF',
    orange: '#ff8100',
    blue: '#4381C1',
    green: '#63CCCA',
    red: '#FF595E',
    white: '#ffffff',
    black: '#0C0C0C',
    white_opacity_60: '#ffffff60',
    text_primary_opacity_100: '#151417',
    text_primary_opacity_90: '#15141790',
    text_primary_opacity_60: '#15141760',
    text_secondary_opacity_100: '#1B1B1D',
    text_secondary_opacity_90: '#1B1B1D90',
    text_secondary_opacity_60: '#1B1B1D60',
  },
} as const;

export type LightThemeType = typeof light;
