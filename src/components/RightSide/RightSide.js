import React from "react";
import styled from "styled-components";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";

import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

const NavImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const ShareBtn = styled.button`
  height: 3rem;
  width: 80%;
  align-self: center;
`;

const RightSide = () => {
  return (
    <RightSideContainer>
      <NavIcons>
        <NavImage src={Home} alt='' />
        <UilSetting style={{ cursor: "pointer" }} />
        <NavImage src={Noti} alt='' />
        <NavImage src={Comment} alt='' />
      </NavIcons>
      <TrendCard />
      <ShareBtn className='button'>Share</ShareBtn>
    </RightSideContainer>
  );
};

export default RightSide;
