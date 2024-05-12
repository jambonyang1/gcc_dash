import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import pf from "./gwang_profile.png";

const Gwang = () => {
  return (
    <StyledWrapper>
      <Image src={pf} preview={false} />
    </StyledWrapper>
  );
};

export default Gwang;

const StyledWrapper = styled.div``;
