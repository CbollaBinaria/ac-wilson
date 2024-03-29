import styled from "styled-components";
import { colors } from "../../utils/colors";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 53px;
  background-color: ${colors.lblue};
  margin: 0px;
  z-index: 9999;
`

export const NavImg = styled.img`
  display: flex;
  justify-content: center;
  width: 51px;
  height: 51px;
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
  font-family: GillSans;
  font-size: 1.5em;
  color: ${colors.black};
  &:hover{
    text-decoration: none;
  }
`