import styled from "styled-components";

const CardHabitStyle = styled.div`
  background-color: #FFFFFF;

  padding: 20px;

  margin: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 5px;
`

const HeaderCardHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 10px;
`

export {
  CardHabitStyle,
  HeaderCardHabit
}