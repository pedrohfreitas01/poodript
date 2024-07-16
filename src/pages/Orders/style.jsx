import styled from "styled-components";
import trash from "../../assets/trash.svg";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
  width: 246px;
  height: 354px;
  flex-shrink: 0;
`;


export const ContainerOrder = styled.section`
  display: flex;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  width: 342px;
  height: 101px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 18px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TrashContainer = styled.div`
  width: 19.2px;
  height: 22.4px;
  background: url(${trash}) ;
  background-size: contain;
  position: absolute;
  right: 10px; 
  cursor: pointer;
`;

export const ContainerInfoOrder = styled.section`
  background: transparent;
  margin-left: 14px;
`;

export const ConstumerOrder = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  word-wrap: break-word;
`;

export const CostumerName = styled.h6`
  color: #fff;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 29px;
`;

