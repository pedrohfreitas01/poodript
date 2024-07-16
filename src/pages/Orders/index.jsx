import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Image,Section, Div, Svg } from './style';
import orderBag from "../../assets/orderBag.png";
import ContainerItens from '../../components/ContainerItens';
import { H1 } from "../../components/Title/style";
import trash from "../../assets/trash.svg"



function Orders() {
  return (
    <Container>
      <Image src={orderBag} />
      <ContainerItens>
        <H1>Orders in Progress</H1>
        <Section>
          <Div>
              ola gente
          </Div>
          <Svg><img src={trash} alt="delete"/></Svg>
        </Section>
      </ContainerItens>
    </Container>
  )
}

export default Orders