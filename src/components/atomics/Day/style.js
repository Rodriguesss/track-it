import styled from "styled-components";

export const DayStyle = styled.button`
  cursor: pointer;
  
  border-radius: 5px;
  border: 1px solid #D4D4D4;

  padding: 3px 7px;

  color: ${({ themeColor }) => themeColor.color };
  font-size: 19.98px;

  text-align: center;

  background-color: ${({ themeColor }) => themeColor.backgroundColor }
`