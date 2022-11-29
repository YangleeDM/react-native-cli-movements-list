import { UserInformationCardProps } from "../models/components-props";
import styled from "styled-components";

const CardWrapper = styled.View`
  width: 100%;
  height: 65%;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background:  ${(props:any) => props.theme.backgroundCardsColor};
  border-radius: 15px;
`;

const AvatarContainer = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50px;
`;

const InfoSection = styled.View`
  width: 80%;
  height: 100%;
  align-items: flex-start;
  padding: 0 22px;
  justify-content: center;
  flex-direction: column;
`;

const UserNameText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: ${(props:any) => props.theme.text};
`;

const UserEmail = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${(props:any) => props.theme.grayTextColor};
`;


export const UserInformationCard = (
  {
    userInformation : {
      id, email, avatar, last_name, first_name
    }
  } : UserInformationCardProps) => {

  return (
    <CardWrapper>

      <AvatarContainer>

        {avatar ?
          <AvatarImage
            style={{ resizeMode: "cover" }}
            source={{ uri: avatar }}/>
          :
          <AvatarImage
            style={{ resizeMode: "cover" }}
            source={{ uri: "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" }}/>
        }

      </AvatarContainer>

      <InfoSection>

        <UserNameText>{first_name} {last_name}</UserNameText>

        <UserEmail>{email}</UserEmail>

      </InfoSection>

    </CardWrapper>
  )

}

