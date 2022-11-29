import { ScreenDefaultContainer } from "../../constants/SharedStyles";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { MovementsScreen } from "./movementsScreen";
import { ActionsContainer, MainTitleText, ProductListContainer, UserInfoCardContainer } from "./products.styles";
import { UserInformationCard } from "../../components/UserInformationCard";
import { FlatList, RefreshControl } from "react-native";
import { CardMovement } from "../../components/CardMovement";
import { GeneralButton } from "../../components/GeneralButton";


export const ProductsScreenTemplate = (parentInstance : MovementsScreen) => {

  const renderMovements = ({item, index} : any) => {
    return (
      <CardMovement
        onItemPressed={(parentInstance.navigateToMovementDetail)}
        key={index}
        cardInformation={item}/>
    )
  }

  return (
    <SafeAreaInsetsContext.Consumer>
      {(inset : any) => (
        <ScreenDefaultContainer insetTop={inset.top}>

          <UserInfoCardContainer>

            <UserInformationCard userInformation={parentInstance.state.userInfo}/>

            <MainTitleText>{'Tus movimientos...'}</MainTitleText>

          </UserInfoCardContainer>

          <ProductListContainer>

            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={parentInstance.state.isRefreshing}
                  onRefresh={parentInstance.onRefresh}
                />
              }
              key={'user-movements-list'}
              renderItem={renderMovements}
              data={parentInstance.state.filteredMovementList}/>

          </ProductListContainer>

          <ActionsContainer>

            <GeneralButton
              title={'Mostrar no canjeados'}
              onButtonClicked={parentInstance.showRedeemedMovements}/>

            <GeneralButton
              title={'Mostrar todos'}
              onButtonClicked={parentInstance.refillOriginalMovements}/>

          </ActionsContainer>



        </ScreenDefaultContainer>
      )}
    </SafeAreaInsetsContext.Consumer>
  )

}
