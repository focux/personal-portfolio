import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Subtitle, StyledGrid } from './elements.js';
import Header from '../../components/Header/index.js';

const SplashScreen = () => (
  <Fragment>
    <Helmet>
      <title>Leonardo Dominguez | Developer, UI/UX, React, Node, Python</title>
    </Helmet>
    <Container>
      <StyledGrid container alignItems="center" direction="column">
        <Header />
      </StyledGrid>
    </Container>
  </Fragment>
);

export default SplashScreen;