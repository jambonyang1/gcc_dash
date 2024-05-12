import React from "react";
import styled from "styled-components";
import Senior from "./senior";
import data from "./senior.json";
import sen1 from "./profile_1.png";
import sen2 from "./profile_2.png";
import sen3 from "./profile_3.png";
import sen4 from "./profile_4.png";
import sen5 from "./profile_5.png";
import sen6 from "./profile_6.png";
import { Image } from "antd";
const Mentor = () => {
  return (
    <StyledWrapper>
      <div className="box">
        <Image src={sen1} />
        <Image src={sen2} />
        <Image src={sen3} />
        <Image src={sen4} />
        <Image src={sen5} />
        <Image src={sen6} />
      </div>
    </StyledWrapper>
  );
};

export default Mentor;

const StyledWrapper = styled.div``;
