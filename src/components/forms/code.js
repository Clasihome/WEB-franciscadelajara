import React, { useContext, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';

import { useUrlForm } from '../../hooks';
import { Autocomplete } from '../inputs';


const Form = styled.form`
  @media(min-width: 768px){
    //padding: 0 5%;
    width: 80%;
  }
`

const FormInnerCont = styled.div` 
    margin-bottom: ${props => props.first ? "2rem" : "0" };
  @media(min-width: 768px){
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #D8D8D8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12), 0px 2px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12), 0px 16px 16px rgba(0, 0, 0, .12);
  }
`

export default ({ withFilters })=> {
  const state = useContext(context);
  const { values, onChange, getUrl } = useUrlForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    totalAreaFrom: '',
    totalAreaTo: '',    
    bedrooms: '',
    bathrooms: '',
    currency: 'CLP',    
  });

  useEffect(()=>{
    gsap.from("#formCode", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" });
  },[])

  return(
    <Form id="formCode" onSubmit={(e)=> e.preventDefault()}>
      <Row>
        <Col xs={12}>
          <FormInnerCont first>
            <Autocomplete
              id="stringSearch"
              onSelect={onChange}
              selected={values.commune}
              placeholder="Ingrese el código de la propiedad"
              icon
            />         
          </FormInnerCont>
        </Col>     
      </Row>
    </Form>
  )
}