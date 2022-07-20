import React from "react";
import styled from "styled-components";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CommentIcon from "@mui/icons-material/Comment";

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
        <HomeSharpIcon style={{ color: "var(--orange)" }}className="right-nav-icons" />
        <SettingsIcon className="right-nav-icons"/>
        <CircleNotificationsIcon className="right-nav-icons"/>
        <CommentIcon className="right-nav-icons"/>
      </NavIcons>
      <TrendCard />
      <ShareBtn className='button'>Share</ShareBtn>
    </RightSideContainer>
  );
};

export default RightSide;
