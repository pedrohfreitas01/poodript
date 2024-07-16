import styled from "styled-components";

export const H1 = styled.h1`
  margin-bottom: ${(props) => props.titleOrder ? "40px" : ""};

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;