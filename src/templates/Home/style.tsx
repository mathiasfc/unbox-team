import styled from "styled-components";

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const PeopleList = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, auto);
  width: auto;
  max-width: 1170px;
  margin: 15px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
