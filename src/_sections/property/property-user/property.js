import React from 'react';
import styled from 'styled-components';
import { Row, Col, Hidden } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import Icons from '../../../_icons';

const MainCont = styled.div`
`
const PublicObs = styled.p`
  font-weight: bold;
  margin: 2rem 0;
`

const CharsCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin: 2rem 0;
`
const CharItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: #002438;
`

const CharItem = ({ icon, name, value }) => {
  const Icon = Icons[icon];
  return(
    <CharItemLi>
      <Icon className="clasi-icon" />
      <span style={{ marginLeft: 16 }}>{name}</span>
      <span style={{ marginLeft: 16 }}>{value}</span>
    </CharItemLi>
  )
}


export default ({ description })=> {

  //const charsGeneral = description.characteristics.filter(c => c.type === "GENERAL");
  //const charsOthers = description.characteristics.filter(c => c.type !== "GENERAL");
  //console.log("DESCRIPTION",charsGeneral);

  return(
    <MainCont>
      <Row>
        <Hidden xs>
         <InteractionButtons />
        </Hidden>
        <Col xs={12}>
          <PublicObs>
            {description.publicObservation}              
          </PublicObs>
        </Col>
        <Col xs={12}>
          <h2 style={{ color: "#002438" }}>Características</h2>
          <Row>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(0, 7).map((c) => <CharItem key={c.id} {...c} />)
                  description.characteristics.map((c) => <CharItem key={c.id} {...c} />)
                }
              </CharsCont>
            </Col>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsGeneral.slice(7, charsGeneral.length).map((c) => <CharItem key={c.id} {...c} />)
                }        
              </CharsCont>      
            </Col>            
          </Row>
        </Col>
        <Col xs={12}>
          <h2 style={{ color: "#002438" }}>Otros servicios</h2>
          <Row>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsOthers.slice(0, 7).map((c) => <CharItem  key={c.id} {...c} />)
                }
              </CharsCont>
            </Col>
            <Col xs={12} md={6}>
              <CharsCont>
                {
                  //charsOthers.slice(7, charsOthers.length).map((c) => <CharItem key={c.id} {...c} />)
                }        
              </CharsCont>                    
            </Col>            
          </Row>
        </Col>        
      </Row>
    </MainCont>
  )
}