import React from "react";
import styled from "styled-components";
import { Image } from "antd";

const Senior = (props) => {
  const { event } = props;
  console.log(event);
  return (
    <StyledWrapper>
      <div className="box">
        <Image src={event.image} />
      </div>
    </StyledWrapper>
  );
};

export default Senior;

const StyledWrapper = styled.div``;
