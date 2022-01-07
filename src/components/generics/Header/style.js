import styled from "styled-components";

const HeaderStyle = styled.header`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  padding: 10px 15px;

  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Icon = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 98.5px;
`

export {
  HeaderStyle,
  Icon
}