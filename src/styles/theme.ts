const darkTheme = {
  colors: {
    bgColor: '#0E0C0C',
    textColor: '#FFFFFF',
    FABColor: '#00000080',
    gray01: '#161616',
    gray02: '#333333',
    gray03: '#686868',

    black: '#000000',
    white: '#FFFFFF',

    red01: '#FF2C2C',
    red02: '#FF9292',
    orange01: '#FF8E2C',
    orange02: '#FFB379',
    yellow01: '#F9EE19',
    yellow02: '#FFF875',
    yellow03: '#FEE500',
    green01: '#29FF22',
    green02: '#96FF92',
    mint01: '#00FF8C',
    mint02: '#8EFFCE',
    cyon01: '#24FFE9',
    cyon02: '#C9FFFA',
    sky01: '#27BBFF',
    sky02: '#7ED6FF',
    aqua01: '#3859FF',
    aqua02: '#788EFF',
    violet01: '#2605FD',
    violet02: '#8F7EFF',
    purple01: '#5929F7',
    purple02: '#B098FF',
    pink01: '#FB24FF',
    pink02: '#FEBBFF',
    magenta01: '#FF2D7A',
    magenta02: '#FFA0C3',
  },

  fonts: {
    title_semibold: {
      fontFamily: 'Pretendard',
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    head_semibold: {
      fontFamily: 'Pretendard',
      fontSize: '33px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    head_medium: {
      fontFamily: 'Pretendard',
      fontSize: '33px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    body16_semibold: {
      fontFamily: 'Pretendard',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '22px',
    },
    body16_medium: {
      fontFamily: 'Pretendard',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
    },
    body14_medium: {
      fontFamily: 'Pretendard',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    button_semibold: {
      fontFamily: 'Pretendard',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    link_semibold: {
      fontFamily: 'Pretendard',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 'normal',
      textDecorationLine: 'underline',
    },
  },
};

const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    bgColor: '#FFFFFF',
    textColor: '#0E0C0C',
    FABColor: '#E9E9E980',
    gray01: '#F7F7F7',
    gray02: '#E8E8E8',
    gray03: '#7D7D7D',
  },
};

export type ColorType = typeof darkTheme.colors;
export type FontType = typeof darkTheme.fonts;

export { lightTheme, darkTheme };
