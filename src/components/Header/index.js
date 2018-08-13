import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Subtitle, AnimatedGrid } from './elements';
import Navbar from './Navbar';

const menu = [{
  href: '#',
  name: 'projects'
},
{
  href: '#',
  name: 'about-me'
},
{
  href: '#',
  name: 'contact-me'
},
{
  href: '#',
  name: 'blog'
}];

const Header = () => (
  <Container container alignItems="center" direction="column" spacing={8}>
    <Grid item xs={12}>
      <Grid container alignItems="center" direction="column">
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          x="0px"
          y="0px"
          viewBox="0 0 376.7 231.2"
        >
          <path className="st0" d="M0.4,230.9C22.8,202.5,112.6,85.4,88,27.1C85.4,20.8,78,3.2,64.2,0.8C47.5-2.1,28.3,18.4,21.1,36.9
          c-19.9,50.5,35.4,125,69.4,121.5c22.2-2.3,28.3-38,50.6-36.6c19.9,1.2,25.7,30.2,46.3,29.8c15-0.2,17-15.6,34.5-19.1
          c20.8-4.2,30.9,15,59,24.8c26.9,9.4,67.1,8.9,84.3-11.3c24.5-28.8,3.3-94.5-18.2-97.4c-16.7-2.2-43.3,32.3-87.6,171.2"/>
        </svg>
        <Subtitle>leonardo dominguez</Subtitle>
      </Grid>
    </Grid>
    <AnimatedGrid item xs={12}>
      <Navbar menu={menu}/>
    </AnimatedGrid>
  </Container>
);

export default Header;
