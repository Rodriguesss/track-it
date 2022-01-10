import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${({width}) => width}%;

  padding: 10px;

  background-color: ${({color}) => color};

  color: #FFF;
  font-size: 20,98px;
  text-align: center;

  border-radius: 4.64px;

  cursor: pointer;
`