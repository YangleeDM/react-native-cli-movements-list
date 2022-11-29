import { MovementStatusProps } from "../models/components-props";
import styled from "styled-components";

const MovementStatusWrapper = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const MovementCircleStatus = styled.View`
  width: 12px;
  height: 12px;
  background : ${(props:any) => props.hasBeenRedeemed? 'green' : 'red'};
  border-radius: 50px;
  border: 1px solid white;
  margin-right: 5px;
`;

const MovementStatusText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color : ${(props:any) => props.hasBeenRedeemed? 'green' : 'red'};
`;

export const MovementStatus = (
  {
    hasBeenRedeemed
  } : MovementStatusProps) => {

  return (
    <MovementStatusWrapper>

      <MovementCircleStatus
        hasBeenRedeemed={hasBeenRedeemed}/>

      <MovementStatusText
        hasBeenRedeemed={hasBeenRedeemed}>{hasBeenRedeemed? 'Producto canjeado' : 'Sin canjear'}</MovementStatusText>

    </MovementStatusWrapper>
  )

  }
