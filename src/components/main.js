import React from "react";
import styled from "styled-components";
import data from "./work.json";
import Work from "./work";

const Main = () => {
  return (
    <StyledWrapper>
      {data.data.map((event, index) => (
        <Work key={index} event={event} />
      ))}
    </StyledWrapper>
  );
};
export default Main;

const StyledWrapper = styled.div``;
