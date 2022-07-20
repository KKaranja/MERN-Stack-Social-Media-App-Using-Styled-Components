import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
  width: 90%;
`;

const InfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div``;

const Status = styled.span``;

const Logout = styled.button`
  width: 7rem;
  height: 2rem;
  margin-top: 6rem;
  align-self: flex-end;
`;

const InfoCard = () => {
  return (
    <InfoCardContainer>
      <InfoHead>
        <h4>Your Info</h4>
        <EditIcon
          style={{ cursor: "pointer", width: "2rem", height: "1.2rem" }}
        />
      </InfoHead>
      <Info>
        <Status>
          <b>Status </b>
        </Status>
        <Status>In a relationship</Status>
      </Info>
      <Info>
        <Status>
          <b>Lives in </b>
        </Status>
        <Status>Nairobi, Kenya</Status>
      </Info>
      <Info>
        <Status>
          <b>Works at </b>
        </Status>
        <Status>Dentsu International</Status>
      </Info>

      <Logout className='button'>Logout</Logout>
    </InfoCardContainer>
  );
};

export default InfoCard;
