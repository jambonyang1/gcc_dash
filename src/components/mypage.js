import React from "react";
import styled from "styled-components";
import data from "./user.json";

const Mypage = () => {
  return (
    <StyledWrapper>
      <p>이름: {data.data.name}</p>
      <p>나이: {data.data.age}</p>
      <p>한줄소개: {data.data.bio}</p>
      <p>학력: {data.data.education}</p>
      <p>경력: {data.data.experience}</p>
    </StyledWrapper>
  );
};

export default Mypage;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 calc(50vw - 640px);
  justify-content: center;
  align-items: center;
`;
