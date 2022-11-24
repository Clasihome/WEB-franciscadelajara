import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';

import { Section } from '../../styled-components';

const Title = styled.h2`
  color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 4rem;
`
const Title2 = styled.h2`
  color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  height: 100%;
  padding-bottom: 3rem;
  @media(min-width: 768px){
    padding: 0;
  }
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale-down;
  object-position:  50% 50%;;
  margin-bottom: 2rem;
`
const NoAvatar = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  user-select: none;
  span{
    font-size: .6rem;
  }
  //color: #fff;
`
const Info = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`
const Info2 = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.primaryColor};
  font-weight: normal;
`
const Resume = styled.p`
  margin: 2rem 0;
  text-align: justify;
  flex: 1;
`
const User = ({ avatar, cv, email, fullName, phone }) => (
  <Card>
    {
      avatar
      ?<Avatar src={avatar} alt={fullName} />
      :<NoAvatar>{fullName}<span>Sin avatar</span></NoAvatar>
    }
    <Info>{fullName}</Info>
    <Resume>
      {cv}
    </Resume>
    <Info2>{email}</Info2>
    <Info>{phone}</Info>
  </Card>
)

export default ()=> {
  const state = useContext(context);
  return(
    <Section>
      <Container>
         <Col xs={12}>
            <Title>
              Quienes somos
            </Title>
          </Col>
          <Col xs={12}>
            <Title2>
              Un gran equipo de emprendedoras que buscamos entregar a nuestros clientes todo lo necesario para puedan tomar la mejor desición
            </Title2>
          </Col>
        <Row around="xs">
          <Col xs={2}  />
          {
            
            state.about.team.items.map(item => (
              <Col key={uuid()} xs={12} md={4} lg={3}>
                <User {...item} />
              </Col>
              
            ))
          }       
        </Row>
      </Container>
    </Section>
  )
}