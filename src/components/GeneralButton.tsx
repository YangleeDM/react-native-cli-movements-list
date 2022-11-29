import { GeneralButtonProps } from "../models/components-props";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const ButtonWrapper = styled.View`
  width: 280px;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background : ${(props:any) => props.theme.primary};
`;

const ButtonTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color : ${(props:any) => props.theme.text};
`;

export const GeneralButton = (
  {
    title,
    onButtonClicked
  } : GeneralButtonProps ) => {

  return (
    <TouchableOpacity onPress={onButtonClicked}>
      <ButtonWrapper>
        <ButtonTitle>{title? title : 'Aceptar'}</ButtonTitle>
      </ButtonWrapper>
    </TouchableOpacity>
  )

  }
