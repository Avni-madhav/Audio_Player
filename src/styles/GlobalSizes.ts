import {Dimensions} from 'react-native';

export const Full_Height = Dimensions.get('window').height;
export const Full_Width = Dimensions.get('window').width;

export const spacing = {
  micro: 2,
  nano: 4,
  mini: 6,
  small: 8,
  semiSmall: 10,
  base: 12,
  md: 16,
  exMd: 18,
  semiLg: 20,
  lg: 24,
  xl: 32,
  xxl: 45,
  xxxl: 72,
};

export const getFontSize = size => {
  return size; // This uses a reference scale
  // return size;
};

export const font = {
  family: {
    Meri_regular: 'MerriweatherSans-Regular',
    Meri_bold: 'MerriweatherSans-Bold',
    Meri_extra_bold: 'MerriweatherSans-ExtraBold',
    Meri_light: 'MerriweatherSans-Light',
    Meri_italic: 'MerriweatherSans-Italic',
    Meri_italic_bold: 'MerriweatherSans-BoldItalic',
    Poor_regular: 'PoorStory-Regular',
  },
  size: {
    micro: getFontSize(10),
    nano: getFontSize(11),
    mini: getFontSize(12),
    small: getFontSize(13),
    base: getFontSize(14),
    semi: getFontSize(15),
    md: getFontSize(16),
    lg: getFontSize(18),
    semiLg: getFontSize(20),
    xl: getFontSize(22),
    xxl: getFontSize(24),
    xxxl: getFontSize(26),
    xxxxl: getFontSize(35),
    semiHuge: getFontSize(40),
    huge: getFontSize(50),
  },
};
