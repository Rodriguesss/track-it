import styled from "styled-components"

const Message = styled.p`
  width: 100%;

  font-size: 17.98px;
  line-height: 22.47px;

  color: #666666;

  margin: 20px 0;
`

const HeaderFormHabit = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

const ContainerCard = styled.div`
  ${({opacity}) => opacity === "0" && "margin-top: -220px;"}
`

export {
  Message,
  HeaderFormHabit,
  ContainerCard
}