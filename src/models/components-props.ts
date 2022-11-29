import { MovementItem, UserInfo } from "./products-screen-models";


export interface UserInformationCardProps {
  userInformation : UserInfo
}

export interface CardMovementProps {
  cardInformation : MovementItem,
  onItemPressed   : (movementId : number) => void,
}

export interface MovementStatusProps {
  hasBeenRedeemed : boolean
}

export interface GeneralButtonProps {
  title : string
  onButtonClicked : () => void,
}
