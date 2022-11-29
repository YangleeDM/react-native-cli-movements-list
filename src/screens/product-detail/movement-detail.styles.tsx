import styled from "styled-components";

export const MovementImageContainer = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const MovementImage = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 13px;
`;

export const MovementDetailInfo = styled.View`
  width: 100%;
  height: 70%;
  margin-top: 20px;
  background:  ${(props:any) => props.theme.backgroundCardsColor};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 22px 22px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MovementTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props:any) => props.theme.text};
`;

export const MovementTitleInfo = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props:any) => props.theme.text};
`;

export const MovementDetailInfoSubInfo = styled.View`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`;
