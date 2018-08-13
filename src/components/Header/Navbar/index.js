import React, { Fragment } from 'react';
import { Container, Link } from './elements';

const Navbar = ({ menu }) => (
  <Container>
    {menu.map((link, key) => (
      <Link key={key} href={link.href}>{link.name}</Link>
    ))}
  </Container>
);

export default Navbar;