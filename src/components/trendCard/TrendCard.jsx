import React from "react";

import styled from "styled-components";

import { TrendData } from "../../data/TrendCardData";

const TrendCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
  padding: 1rem;
`;

const Trend = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrendName = styled.span`
  font-weight: bold;
`;

const TrendShares = styled.span`
  font-size: 13px;
`;

const TrendCard = () => {
  return (
    <TrendCardContainer>
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <Trend>
            <TrendName>#{trend.name}</TrendName>
            <TrendShares>{trend.shares}k shares</TrendShares>
          </Trend>
        );
      })}
    </TrendCardContainer>
  );
};

export default TrendCard;
