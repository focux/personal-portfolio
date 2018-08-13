import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
  width: 100%;
`;

export const AnimatedGrid = styled(Grid)`
  animation: fadeIn 1.5s ease-out 2.2s backwards;
`;

export const Subtitle = styled.h3`
  color: rgba(255, 255, 255, .85);
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 100;
  animation: fadeIn 1.5s ease-out .5s backwards;
`;