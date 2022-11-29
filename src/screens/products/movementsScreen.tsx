import  { Component } from 'react';
import { ProductsScreenTemplate } from "./products.template";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ProductsService } from "./products.service";
import { ProductsScreenState } from "../../models/screen-state";
import { MovementItem, UserInfoRootObject } from "../../models/products-screen-models";
import Constants from "../../constants/Constants";

//TODO: get this in another folder for stack navigation props only
export type StackNavigationProps<T extends keyof any> = {
  navigation: StackNavigationProp<any, T>;
  route: RouteProp<any, T>
}

export class MovementsScreen extends Component<StackNavigationProps<any>> {

  private productService = new ProductsService();

  public state : ProductsScreenState = {
    movementsList : [],
    filteredMovementList : [],
    userInfo : {
      avatar      : '',
      email       : '',
      id          : 0,
      first_name  : '',
      last_name   : ''
    },
    isRefreshing : false
  }

  componentDidMount() {
    this.getProductList();
    this.getUserInformation();
  }

  componentWillUnmount() {}

  render() {
    return ProductsScreenTemplate(this);
  }

  private getProductList = (isRefreshing = false) => {

    this.productService.getProductList().then((productListResponse : MovementItem[]) => {

      if(productListResponse && productListResponse.length > 0) {
        this.setState({movementsList : productListResponse});
        this.setState({filteredMovementList : productListResponse});
        if (isRefreshing) this.setState({isRefreshing : false});
        return;
      }

      console.error("Error at : getProductList", JSON.stringify(productListResponse));
      alert(Constants.MESSAGES.PRODUCTS_LIST_ERROR);

    }).catch(error => {
      console.error("Error at : getProductList", error);
      alert(Constants.MESSAGES.PRODUCTS_LIST_ERROR);
    });

  }

  private getUserInformation = () => {
    this.productService.getUserInformation().then((rootUserInfo : UserInfoRootObject) => {

      if(rootUserInfo && rootUserInfo.data) {
        this.setState({userInfo : rootUserInfo.data});
        return;
      }

      console.error("Error at : getUserInformation", JSON.stringify(rootUserInfo));
      alert(Constants.MESSAGES.USER_INFO_ERROR);

    }).catch(error => {
      console.error("Error at : getUserInformation", error);
      alert(Constants.MESSAGES.USER_INFO_ERROR);
    });
  }

  public navigateToMovementDetail = (movementId : number) => {
    this.props.navigation.navigate('MovementDetail', {movementId});
  }

  public refillOriginalMovements = () => {
    this.setState({filteredMovementList : this.state.movementsList})
  }

  public showRedeemedMovements = () => {
    this.setState({
      filteredMovementList :
        [...this.state.filteredMovementList.filter(movementItem => !movementItem.is_redemption)]
    });
  }

  public onRefresh = async () => {
    await this.setState({ isRefreshing: true });
    this.getProductList(true);
  }

}

