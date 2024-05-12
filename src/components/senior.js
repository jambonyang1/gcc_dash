import React from "react";
import styled from "styled-components";
import { Image } from "antd";

const Senior = (props) => {
  const { event } = props;
  const logo = event.image;
  return (
    <StyledWrapper>
      <div className="box">
        <Image src={logo} preview={false} />
      </div>
    </StyledWrapper>
  );
};

export default Senior;

const StyledWrapper = styled.div``;
