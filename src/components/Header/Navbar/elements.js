import React from 'react';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: ${props => props.theme.white};
  padding: .3px;
  transition: all .2s ease-out;
  border: .1px solid transparent;

  

  &:not(:last-child)::after {
    content: ' /';
  }

  &:hover {
    border-bottom: .1px solid;
  }
`;
