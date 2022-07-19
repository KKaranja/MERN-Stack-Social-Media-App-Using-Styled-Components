import React from "react";
import styled from "styled-components";
import LogoSearch from "../../components/logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";

const ProfileSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow: auto;
`;

const Profile = () => {
  return (
    <ProfileSide>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </ProfileSide>
  );
};

export default Profile;
