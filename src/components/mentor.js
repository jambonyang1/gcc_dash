import React from "react";
import styled from "styled-components";
import Senior from "./senior";
import data from "./senior.json";

const Mentor = () => {
  let tmp = [];
  async function getData() {
    const response = await fetch("http://13.209.15.194:8000/users");
    const data = await response.json();
    console.log(data.data);
    tmp = data.data;
  }

  getData();
  return (
    <StyledWrapper>
      {tmp.map((event, index) => (
        <Senior key={index} event={event} />
      ))}
    </StyledWrapper>
  );
};

export default Mentor;

const StyledWrapper = styled.div``;
