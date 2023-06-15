import styled from '@emotion/styled';

export const StatSection = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const StatTitle = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  color: grey;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 15px 15px;
`;

export const StatLabel = styled.span`
  font-size: 14px;
`;

export const StatPercentage = styled.span`
  font-size: 16px;
  font-weight: 800;
`;


