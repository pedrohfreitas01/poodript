import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  Container,
  Image,
  ContainerOrder,
  ContainerInfoOrder,
  TrashContainer,
  ConstumerOrder,
  CostumerName,
} from "./style";
import orderBag from "../../assets/orderBag.png";
import ContainerItens from '../../components/ContainerItens';
import { H1 } from "../../components/Title/style";
import trash from "../../assets/trash.svg"
import { StyledButton } from '../../components/Button/style';


function Orders() {
  return (
    <Container>
      <Image src={orderBag} />
      <ContainerItens>
        <H1 titleOrder={true}>Orders in Progress</H1>
        <ContainerOrder>
          <ContainerInfoOrder>
            <ConstumerOrder>1 azilados super frango, 1 cocaaaa</ConstumerOrder>
            <CostumerName>Pedro Cafe</CostumerName>
          </ContainerInfoOrder>
          <TrashContainer />
        </ContainerOrder>

        <ContainerOrder>
          <ContainerInfoOrder>
            <ConstumerOrder>1 azilados super frango, 1 cocaaaa</ConstumerOrder>
            <CostumerName>Pedro Cafe</CostumerName>
          </ContainerInfoOrder>
          <TrashContainer />
        </ContainerOrder>

        

        <StyledButton isBack={true}>
          Back 
        </StyledButton>
      </ContainerItens>
    </Container>
  );
}

export default Orders