import React, { useState, UseRef } from "react";

import styled from "styled-components";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import ProfileImage from "../../img/profileImg.jpg";
import { useRef } from "react";

const PostShareContainer = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
`;

const PostInput = styled.input`
  background-color: var(--inputColor);
  border-radius: 10px;
  padding: 10px;
  font-size: 17px;
  outline: none;
`;

const PostOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Option = styled.div`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const ShareBtn = styled.button`
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px;
`;

const PreviewImage = styled.div`
  position: relative;
`;

const SelectedImage = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <PostShareContainer>
      <ProfileImg src={ProfileImage} alt='' />
      <InputContainer>
        <PostInput type='text' placeholder="What's happening" />
        <PostOptions>
          <Option
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </Option>
          <Option style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </Option>
          <Option style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </Option>
          <Option style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </Option>
          <ShareBtn className='button'>Share</ShareBtn>
          <div style={{ display: "none" }}>
            <input
              type='file'
              name='myImage'
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </PostOptions>
        {image && (
          <PreviewImage>
            <UilTimes onClick={() => setImage(null)} className='preview-svg' />
            <SelectedImage src={image.image} alt='' />
          </PreviewImage>
        )}
      </InputContainer>
    </PostShareContainer>
  );
};

export default PostShare;
