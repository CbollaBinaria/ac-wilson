import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 85px;
  background-color: grey;
  margin: 0px;
  z-index: 9999;
`

export const NavTitle = styled.h3`
  display: flex;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  &:hover{
    text-decoration: none;
  }
`

export const NavBarList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

export const NavBarItem = styled.li`
  display: flex;
  text-decoration: none;
  margin: 2px 5px;
  color: black;
  &:hover{
    text-decoration: none;
  }
`