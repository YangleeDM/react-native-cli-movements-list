
export interface MovementItem {
  createdAt      : string,
  product        : string,
  price          : string,
  image          : string
  is_redemption  : boolean
  id             : number
}

export interface UserInfo {
  id          : number;
  email       : string;
  first_name  : string;
  last_name   : string;
  avatar      : string;
}

export interface Support {
  url  : string;
  text : string;
}

export interface UserInfoRootObject {
  data    : UserInfo;
  support : Support;
}
