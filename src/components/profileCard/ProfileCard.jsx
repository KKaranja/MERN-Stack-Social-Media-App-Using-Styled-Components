import React from "react";
import styled from "styled-components";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCardContainer = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow-x: clip;
  background: var(--cardColor);
`;

const ProfileCardImagesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CoverImage = styled.img`
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 6rem;
  border-radius: 50%;
  position: absolute;
  bottom: -3rem;
  box-shadow: var(--profileShadow);
`;

const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 10px;
`;

const ProfileName = styled.span`
  font-weight: bold;
`;

const ProfileStatus = styled.span``;

const FollowStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const HorizontalLine = styled.hr`
  width: 85%;
  border: 1px solid var(--hrColor);
`;

const FollowContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

const FollowNumber = styled.span`
  font-weight: bold;
`;

const FollowText = styled.span`
  color: var(--gray);
  font-size: 13px;
`;

const FollowVerticalLine = styled.div`
  height: 150%;
  border-left: 2px solid var(--hrColor);
`;

const MyProfile = styled.span`
  font-weight: bold;
  color: orange;
  align-self: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileCardImagesContainer>
        <CoverImage src={Cover} alt='' />
        <ProfileImage src={Profile} alt='' />
      </ProfileCardImagesContainer>
      <ProfileNameContainer>
        <ProfileName>Isaac Kimura</ProfileName>
        <ProfileStatus>Software Developer</ProfileStatus>
      </ProfileNameContainer>
      <FollowStatusContainer>
        <HorizontalLine />
        <FollowContainer>
          <Follow>
            <FollowNumber>6,890</FollowNumber>
            <FollowText>Followings</FollowText>
          </Follow>
          <FollowVerticalLine></FollowVerticalLine>
          <Follow>
            <FollowNumber>1</FollowNumber>
            <FollowText>Followers</FollowText>
          </Follow>
        </FollowContainer>
        <HorizontalLine />
      </FollowStatusContainer>
      <MyProfile>My Profile</MyProfile>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
