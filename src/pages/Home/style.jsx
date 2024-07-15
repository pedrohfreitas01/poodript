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


export const Label = styled.p`
  color: #eee;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin: 76px 0px 4px 10px;
`;

export const Input = styled.input`
  display: flex;
  padding: 19px 139px 18px 15px;
  align-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  border: 0;
  outline: none;
`;