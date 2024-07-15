import React from 'react'

import homeLogo from '../../assets/homeLogo.png'


import { Container,Image,Input,Label } from './style'
import { H1 } from "../../components/Title/style";
import ContainerItens from '../../components/ContainerItens';
import CustomButton  from '../../components/Button';



function Home() {
  return (
    <Container>
      <Image alt="logo-imagem" src={homeLogo} />
      <ContainerItens>
        <H1>Make Your Order</H1>
        <Label>What you would like</Label>
        <Input placeholder="Coca-cola, x-salad"></Input>
        <Label>Customer Name</Label>
        <Input placeholder="Coca-cola, x-salad"></Input>
        <CustomButton>Send Order</CustomButton>
      </ContainerItens>
    </Container>
  );
}

export default Home