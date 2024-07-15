import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;


export const Image = styled.img`
  width: 342px;
  height: 354px;
  flex-shrink: 0;
  margin-top: 20px;
  
`;


export const InputLabel = styled.p`
  color: #eee;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
`;