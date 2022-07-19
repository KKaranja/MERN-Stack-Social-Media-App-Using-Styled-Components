import React from "react";

import styled from "styled-components";
import PostShare from "../postShare/PostShare";
import PostArea from "../Posts/PostArea";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  overflow: auto;
`;

const Post = () => {
  return (
    <PostContainer>
      <PostShare />
      <PostArea />
    </PostContainer>
  );
};

export default Post;
