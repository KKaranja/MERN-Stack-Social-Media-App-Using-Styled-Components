import React from "react";
import styled from "styled-components";
import { UilSearch } from "@iconscout/react-unicons";
import Logo from "../../img/logo.png";

const LogoSearchContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SearchInputContainer = styled.div`
  display: flex;
  background-color: var(--inputColor);
  border-radius: 10px;
  padding: 5px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(106.23deg, #f99827, #f95f35 100%);
  boreder-radius: 5px;
  padding: 4px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const LogoSearch = () => {
  return (
    <LogoSearchContainer>
      <img src={Logo} alt='' />
      <SearchInputContainer>
        <SearchInput type='text' placeholder='#Explore'></SearchInput>
        <SearchIcon>
          <UilSearch />
        </SearchIcon>
      </SearchInputContainer>
    </LogoSearchContainer>
  );
};

export default LogoSearch;
