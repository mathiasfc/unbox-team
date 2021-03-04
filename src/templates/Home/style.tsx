import styled from "styled-components";

export const PeopleList = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, auto);

  width: 1170px;
  margin: 15px auto;
`;
