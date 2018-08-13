import { lighten } from 'polished';

export default {
  primaryColor: '',
  secondaryColor: '',
  tertiaryColor: '',
  white: 'rgba(255, 255, 255, .85)',
  black: '#000000',
  get lightWhite() {
    return lighten(0.5, this.white);
  },
  get lightBlack() {
    return lighten(0.5, this.black);;
  },
  font: {
    size: {
      tiny: '.5px',
      small: '1.5rem',
      medium: '2.5rem',
      big: '4.5rem',
      huge: '6rem'
    },
    weight: {
      light: '100',
      regular: '300',
      bold: '500'
    }
  },
  gap: {
    referenceVal: 0.5,
    tiny: '0.5rem',
    small: '1.5rem',
    medium: '2rem',
    big: '3rem',
    huge: '5rem'
  }
};
