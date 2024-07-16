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

export const Section = styled.section`
  display: flex;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  width: 342px;
  height: 101px;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  background: none;
`

export const TrashContainer = styled.div`
  width: 19.2px;
  height: 22.4px;
  background: url(${trash}) no-repeat center;
  background-size: contain;

`;