import React from "react";
import styled from "styled-components";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";
import LogoSearch from "../logoSearch/LogoSearch";

const ProfileLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow: auto;
`;

const ProfileLeft = () => {
  return (
    <ProfileLeftContainer>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </ProfileLeftContainer>
  );
};

export default ProfileLeft;
