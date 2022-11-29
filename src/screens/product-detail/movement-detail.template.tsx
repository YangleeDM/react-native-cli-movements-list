import { ScreenDefaultContainer } from "../../constants/SharedStyles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { MovementDetail } from "./movement-detail";
import {
  MovementDetailInfo, MovementDetailInfoSubInfo,
  MovementImage,
  MovementImageContainer,
  MovementTitle,
  MovementTitleInfo
} from "./movement-detail.styles";
import { MovementStatus } from "../../components/MovementStatus";


export const MovementDetailTemplate = (parentInstance : MovementDetail) => {

  return (
    <SafeAreaInsetsContext.Consumer>
      {(inset : any) => (
        <ScreenDefaultContainer insetTop={inset.top}>

          <MovementImageContainer>

            <MovementImage
              style={{resizeMode : 'contain'}}
              source={{uri : parentInstance.state.movementInformation.image}}
            />

          </MovementImageContainer>

          <MovementDetailInfo>

            <MovementTitle>{parentInstance.state.movementInformation.product}</MovementTitle>
            <MovementTitleInfo>${parentInstance.state.movementInformation.price}</MovementTitleInfo>

            <MovementDetailInfoSubInfo>

              <MovementTitle>{'Fecha de movimiento'}</MovementTitle>
              <MovementTitleInfo>{parentInstance.state.movementInformation.createdAt}</MovementTitleInfo>

              <MovementStatus hasBeenRedeemed={parentInstance.state.movementInformation.is_redemption}/>

            </MovementDetailInfoSubInfo>

          </MovementDetailInfo>

        </ScreenDefaultContainer>
      )}
    </SafeAreaInsetsContext.Consumer>
  )

}
