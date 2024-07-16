import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) =>
    props.isBack ? "rgba(255, 255, 255, 0.14)" : "#D93856"};

  display: flex;
  width: 342px;
  height: 68px;
  padding: 0px 113px;
  justify-content: center;
  align-items: center;
  margin-top: 76px;
  border: 0;
  border-radius: 5px;
  color: #fff;

  text-align: center;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px; /* 14.706% */
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;