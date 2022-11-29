import  { Component } from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { MovementDetailService } from "./movement-detail.service";
import { MovementDetailTemplate } from "./movement-detail.template";
import { MovementDetailState } from "../../models/screen-state";
import { MovementItem } from "../../models/products-screen-models";
import Constants from "../../constants/Constants";

//TODO: get this in another folder for stack navigation props only
export type StackNavigationProps<T extends keyof any> = {
  navigation: StackNavigationProp<any, T>;
  route: RouteProp<any, T>
}

export class MovementDetail extends Component<StackNavigationProps<any>> {

  private productDetailService = new MovementDetailService();

  public state : MovementDetailState = {
    movementInformation : {
      id            : null,
      product       : null,
      price         : null,
      image         : null,
      createdAt     : null,
      is_redemption : null
    }
  }

  componentDidMount() {
    this.setUpInformation().then();
  }

  componentWillUnmount() {}

  render() {
    return MovementDetailTemplate(this);
  }

  private setUpInformation = async () => {
    const { movementId } = this.props.route.params;
    await this.setState({ movementId: movementId });

    this.productDetailService.getMovementDetail(movementId).then((movementDetailResponse : MovementItem) => {

      if(movementDetailResponse && movementDetailResponse.product) {
        this.setState({movementInformation : movementDetailResponse});
        return;
      }

      console.error("Error at : getMovementDetail", JSON.stringify(movementDetailResponse));
      alert(Constants.MESSAGES.USER_INFO_ERROR);

    }).catch(error => {
      console.error("Error at : getMovementDetail", error);
      alert(Constants.MESSAGES.USER_INFO_ERROR);
    });

  }

}
