import React from "react";
import { PostData } from "../../data/PostData";
import styled from "styled-components";
import SinglePost from "../post/SinglePost";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostArea = () => {
  return (
    <PostContainer>
      {PostData.map((post, id) => {
        return <SinglePost data={post} id={id} />;
      })}
    </PostContainer>
  );
};

export default PostArea;
