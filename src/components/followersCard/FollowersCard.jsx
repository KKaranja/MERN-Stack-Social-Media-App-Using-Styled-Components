import React from "react";
import Styled from "styled-components";

import { Followers } from "../../data/FollowersData";

const FollowersCardContainer = Styled.div`
width: 100%;
border-radius: 0.7rem;
gap: 1rem;
display: flex;
flex-direction: column;
font-size: 13px;
`;

const Follower = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

const FollowerNames = Styled.div`
display: flex;
gap: 10px;

`;

const FollowerImg = Styled.img`
width: 3.2rem;
height: 3.2rem;
border-radius: 50%;

`;

const FollowerNameContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`;

const FollowerName = Styled.span`
font-weight: bold;

`;

const FollowerUserName = Styled.span``;

const FollowBtn = Styled.button`
height: 2rem;
padding-left: 20px;
padding-right: 20px;

`;

const FollowersCard = () => {
  return (
    <FollowersCardContainer>
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <Follower>
            <FollowerNames>
              <FollowerImg src={follower.img} />
              <FollowerNameContainer>
                <FollowerName>{follower.name}</FollowerName>
                <FollowerUserName>@{follower.username}</FollowerUserName>
              </FollowerNameContainer>
            </FollowerNames>
            <FollowBtn className='button'>Follow</FollowBtn>
          </Follower>
        );
      })}
    </FollowersCardContainer>
  );
};

export default FollowersCard;
