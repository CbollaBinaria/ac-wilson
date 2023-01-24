import styled from "styled-components";
import { colors } from "../../utils/colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 53px;
  background-color: ${colors.lblue};
  margin: 0px;
  z-index: 9999;
`

export const FooterImg = styled.img`
  display: flex;
  justify-content: center;
  width: 51px;
  height: 51px;
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

export const FooterItem = styled.li`
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