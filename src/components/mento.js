import React from "react";
import styled from "styled-components";

const Mento = () => {
  return (
    <StyledWrapper>
      <h1>멘토 페이지</h1>
    </StyledWrapper>
  );
};

export default Mento;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 calc(50vw - 640px);
  justify-content: center;
  align-items: center;
`;
