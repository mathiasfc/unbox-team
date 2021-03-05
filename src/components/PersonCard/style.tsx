import styled from "styled-components";

export const PersonItem = styled.li`
  padding: 30px;

  border-radius: 30px;
  box-shadow: 0 0 3px 1px #00000050, inset 0 0 3px 1px #ffffff50;

  color: #fff;

  &:nth-child(2n) {
    background-color: #a266f7;
  }

  &:nth-child(2n + 1) {
    background-color: #f78be8;
  }
`;

export const PersonHeader = styled.div`
  display: flex;
  place-items: center;
`;

export const PersonInfo = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const PersonName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const PersonJob = styled.div`
  font-size: 18px;
`;

export const PersonPicture = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const PersonIcon = styled.img`
  width: 50px;
`;

export const PersonDescription = styled.div`
  padding-top: 15px;
  margin-top: 15px;

  border-top: 3px dotted #ffffff75;

  font-size: 16px;
`;
