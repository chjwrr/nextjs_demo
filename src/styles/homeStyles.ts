import styled from "styled-components";
export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CustomFont = styled.p`
  font-size: 60px;
  font-weight: bold;
  font-family: flow;
  color: purple;
`
export const CustomBold = styled(CustomFont)`
  font-family: PingFangBold;
`