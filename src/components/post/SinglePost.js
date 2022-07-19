import React from "react";

import styled from "styled-components";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const SinglePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--cardColor);
  border-radius: 1rem;
  gap: 1rem;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PostReaction = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;

`;

const Likes = styled.span``;

const Details = styled.div``;

const Name = styled.span``;

const Desc = styled.span``;

const SinglePost = ({ data }) => {
  return (
    <SinglePostContainer>
      <PostImage src={data.img} alt='' />
      <PostReaction>
        <img src={data.liked ? Heart : NotLike} alt='' />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </PostReaction>
      <Likes>{data.likes} Likes</Likes>
      <Details>
        <Name>
          <b>{data.name}</b>
        </Name>
        <Desc> {data.desc} </Desc>
      </Details>
    </SinglePostContainer>
  );
};

export default SinglePost;
