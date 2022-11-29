import styled from 'styled-components/native';
import {Dimensions} from "react-native";

const screenSize = (Dimensions.get("screen"));

export const ScreenDefaultContainer = styled.View`
  width: ${screenSize.width}px;
  height: ${screenSize.height}px;
  padding: 22px 22px;
  align-items: flex-start;
  display: flex;
  margin-top: ${(props : any) => props.insetTop}px;
  background:  ${(props:any) => props.theme.background};
  
`;
