import React from "react";
import styled from "styled-components";
import Post from "../../components/mainContent/Post";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";

const ProfilePageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
`;

const ProfileCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <ProfileLeft />
      <ProfileCenter>
        <ProfileCard />
        <Post />
      </ProfileCenter>
      <RightSide />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
