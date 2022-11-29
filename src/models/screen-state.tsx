import { MovementItem, UserInfo } from "./products-screen-models";

export interface ProductsScreenState {
  movementsList         : MovementItem[],
  filteredMovementList  : MovementItem[]
  userInfo              : UserInfo
  isRefreshing          : boolean
}

export interface MovementDetailState {
  movementInformation : MovementItem
}
