import styled from "styled-components";
import { colors } from "../../utils/colors";

export const WarningContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${colors.white};
`

export const WarningImg = styled.img`
  display: flex;
  width: 500px;
  height: 400px;
`