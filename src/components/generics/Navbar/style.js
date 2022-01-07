import styled from "styled-components";

const Option = styled.p`
  font-size: 17.98px;
  color: #52B6FF;
  text-align: center;
`

const NavbarStyle = styled.nav`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #FFF;

  width: 100%;

  padding: 20px 40px;

  a {
    text-decoration: none;
  }
`

export {
  NavbarStyle,
  Option
}