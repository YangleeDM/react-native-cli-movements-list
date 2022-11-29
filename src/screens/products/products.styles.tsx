import styled from "styled-components";

/**
* I know im not using the 100% of the height of the screen,
* that's because im taking in consideration the height of the padding...
* */
export const UserInfoCardContainer = styled.View`
  width: 100%;
  height: 15%;
  justify-content: space-around;
`;

export const MainTitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${(props:any) => props.theme.text};
`;

export const ProductListContainer = styled.View`
  width: 100%;
  height: 60%;
`;

export const ActionsContainer = styled.View`
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`;
