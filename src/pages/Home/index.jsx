import React from 'react'

import homeLogo from '../../assets/homeLogo.png'


import { Container,Image,InputLabel } from './style'
import { H1 } from "../../components/Title/style";
import ContainerItens from '../../components/ContainerItens';





function Home() {
  return (
    <Container>
      <Image alt="logo-imagem" src={homeLogo} />
      <ContainerItens>
        <H1>Make Your Order</H1>
        <InputLabel>What you would like</InputLabel>
      </ContainerItens>
    </Container>
  );
}

export default Home