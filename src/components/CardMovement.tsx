import { CardMovementProps } from "../models/components-props";
import { FadeIn } from "./FadeIn/FadeIn";
import styled from "styled-components";
import { Pressable, TouchableOpacity } from "react-native";
import { MovementStatus } from "./MovementStatus";

const CardWrapper = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  flex-direction: row;
  padding: 0 22px;
  background:  ${(props:any) => props.theme.backgroundCardsColor};
  margin-top: 5px;
`;

const MovementInfoContainer = styled.View`
  width: 65%;
  height: 100%;
  justify-content: center;
  padding: 0 22px;
`;

const MovementImageContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MovementDetailButtonContainer = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MovementImage = styled.Image`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50px;
`;

const MovementTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props:any) => props.theme.text};
`;

const MovementPrice = styled.Text`
  margin-top: 5px;
  color: ${(props:any) => props.theme.grayTextColor};
`;

const ChevronIcon = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${(props:any) => props.theme.text};
`;


export const CardMovement = (
  {
    cardInformation,
    onItemPressed = (movementId : number) => {},
  } : CardMovementProps) => {

  return (

    <TouchableOpacity onPress={() => onItemPressed(cardInformation.id)}>
      <FadeIn>
        <CardWrapper>

          <MovementImageContainer>

            <MovementImage
              style={{resizeMode : 'cover'}}
              source={{uri : cardInformation.image}}/>

          </MovementImageContainer>

          <MovementInfoContainer>

            <MovementTitle
              numberOfLines={1}
              ellipsizeMode={'tail'}>{cardInformation.product}</MovementTitle>

            <MovementPrice>${cardInformation.price}</MovementPrice>

            <MovementStatus hasBeenRedeemed={cardInformation.is_redemption}/>

          </MovementInfoContainer>

          <MovementDetailButtonContainer>

            <ChevronIcon>{'➔'}</ChevronIcon>

          </MovementDetailButtonContainer>

        </CardWrapper>
      </FadeIn>
    </TouchableOpacity>

  )

}
