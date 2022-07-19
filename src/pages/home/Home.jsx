import React from "react";
import styled from "styled-components";
import Profile from "../../components/profileSide/Profile";

import Post from "../../components/mainContent/Post";
import RightSide from "../../components/RightSide/RightSide";

const HomeContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <Post />
      <RightSide />
    </HomeContainer>
  );
};

export default Home;
