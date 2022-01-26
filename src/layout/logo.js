import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 150px;
  min-height: 100px;
  max-width: 250px;
  max-height: 43px;
  object-fit: contain;
  object-position: center;
`

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
    <Logo src={dark ? require("../images/logo-dark.png") : state.logo} alt="Logo" />
  )
}