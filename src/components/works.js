import React from "react";
import styled from "styled-components";

const Works = () => {
  return (
    <StyledWrapper>
      <h1>작업 페이지</h1>
    </StyledWrapper>
  );
};

export default Works;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 calc(50vw - 640px);
  justify-content: center;
  align-items: center;
`;
