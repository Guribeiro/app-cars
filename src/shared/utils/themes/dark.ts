export const dark = {
  title: 'dark',
  colors: {
    primary_opacity_100: '#141517',
    primary_opacity_90: '#14151790',
    primary_opacity_60: '#14151760',
    secondary_opacity_100: '#1B1B1D',
    secondary_opacity_90: '#1B1B1D90',
    secondary_opacity_60: '#1B1B1D60',
    gray: '#D2D7DF',
    orange: '#ff8100',
    blue: '#4381C1',
    green: '#63CCCA',
    red: '#FF595E',
    white: '#ffffff',
    black: '#0C0C0C',
    white_opacity_60: '#ffffff60',
    text_primary_opacity_100: '#E9EDEE',
    text_primary_opacity_90: '#E9EDEE90',
    text_primary_opacity_60: '#E9EDEE60',
    text_secondary_opacity_100: '#DEE4E7',
    text_secondary_opacity_90: '#DEE4E790',
    text_secondary_opacity_60: '#DEE4E760',
  },
} as const;

export type DarkThemeType = typeof dark;
