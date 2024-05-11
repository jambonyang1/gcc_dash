import React from "react";
import styled from "styled-components";
import data from "./user.json";
import { Carousel, Image } from "antd";
import ha from "./habio.png";

const Mypage = () => {
  const contentStyle = {
    margin: 0,
    height: "70vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "10px",
  };
  return (
    <StyledWrapper>
      <Image src={ha} className="img" />
      {/* <p>이름: {data.data.name}</p>
      <p>나이: {data.data.age}</p>
      <p>한줄소개: {data.data.bio}</p>
      <p>학력: {data.data.education}</p>
      <p>경력: {data.data.experience}</p> */}
    </StyledWrapper>
  );
};

export default Mypage;

const StyledWrapper = styled.div`
  padding: 10px;

  .img {
    border-radius: 70px;
  }
`;
