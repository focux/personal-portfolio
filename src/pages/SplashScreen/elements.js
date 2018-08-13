import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const slideUpAnimationDuration = '.7s';
const slideUpAnimationDelay = '1.5s';

export const Container = styled.header`
  width: 100%;
  height: 40vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: shrink ${slideUpAnimationDuration} ease-out ${slideUpAnimationDelay} backwards;

  .st0 {
    fill:none;
    stroke:#FFFFFF;
    stroke-miterlimit:10;
    stroke-dasharray: 1107px;
    animation: aPath 1.5s ease-out;
  }

  svg {
    width: 100px;
    height: 100px;
  }
`;

export const StyledGrid = styled(Grid)`
  position: relative;
  animation: slideUp ${slideUpAnimationDuration} ease-out ${slideUpAnimationDelay} backwards;
`;

export const Subtitle = styled.h3`
  color: rgba(255, 255, 255, .85);
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 100;
  animation: fadeIn 1.5s ease-out .5s backwards;
`;

export const MainContent = styled.div`

`;