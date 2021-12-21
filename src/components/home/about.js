import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Button } from '../../styled-components';

const SectionCustom = styled(Section)`
  //background-color: ${props=> props.theme.primaryColor};
  margin-top: 10rem;
`
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 540px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;    
  padding-top: 1rem;  
  //color: #fff;
  @media (min-width: 768px){
    max-width: 720px;
    padding: 2rem 15px;
  }    
  @media (min-width: 992px){
    max-width: 480px;
    padding: 2rem 15px;
  }
`
const Title = styled.h2`

`
const SubTitle = styled.p`

`
const ImageCont = styled.div`
  height: 100%;
`
const ImageInnerCont = styled.div`
  height: 100%;
  background-color: ${props=> props.theme.primaryColor};
  position: relative;
`
const Image = styled.img`
  height: 500px;
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: -5px;
  left: 0;
`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Row noGutters>
        <Col xs={12} md={12} lg={6}>
          <InfoCont>
            <Title>
              {state.home.about.banner.title}
            </Title>
            <SubTitle>
              {state.home.about.banner.subTitle}
            </SubTitle>
            <AniLink paintDrip hex={state.primaryColor} to="/about" duration={.5}>
              <Button primary block>
                {state.home.about.banner.buttonText}
              </Button>
            </AniLink>
          </InfoCont>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <ImageCont>
            <ImageInnerCont>
              <Image src={state.home.about.banner.image} />
            </ImageInnerCont>
          </ImageCont>          
        </Col>
      </Row>
    </SectionCustom>
  )
}