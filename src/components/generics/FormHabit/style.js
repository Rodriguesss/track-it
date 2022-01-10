import styled from "styled-components";

export const FormHabitStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #FFF;

  margin: 20px 0 30px 0;

  padding: 20px;

  border-radius: 5px;

  opacity: ${({ opacity }) => opacity};
`