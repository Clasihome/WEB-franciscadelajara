import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 100px;
  min-height: 80px;
  max-width: 250px;
  max-height: 43px;
  object-fit: contain;
  object-position: center;
`

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
    <Logo src={dark ? state.logoDark : state.logo} alt="Logo" />
  )
}