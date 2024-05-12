import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import pf from "./soog_profile.png";
const Soog = () => {
  return (
    <StyledWrapper>
      <Image src={pf} preview={false} />
    </StyledWrapper>
  );
};

export default Soog;

const StyledWrapper = styled.div``;
