import styled from "styled-components";

const TodayCardStyle = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 20px;

  padding: 15px;

  background-color: #FFFFFF;

  border-radius: 5px;
`

const DescriptionContainerStyle = styled.div`
  width: 148px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  justify-content: flex-start;

  margin: 5px 0;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 69px;
  height: 69px;
  
  background-color: ${({color}) => color};

  border-radius: 5px;

  cursor: pointer;
`

export {
  TodayCardStyle,
  DescriptionContainerStyle,
  LeftContainer,
  RightContainer
}