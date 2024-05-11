import React from "react";
import styled from "styled-components";

const Work = (props) => {
  const { event } = props;
  return (
    <StyledWrapper>
      <h3>{event.title}</h3>
      <p>장소: {event.place}</p>
      <p>날짜: {event.date}</p>
      <p>소요 시간: {event.duration}</p>
      <p>키워드: {event.keyword.join(", ")}</p>
      <p>상세 정보: {event.info}</p>
      <p>요청 여부: {event.request ? "요청 중" : "요청 중 아님"}</p>
    </StyledWrapper>
  );
};

export default Work;

const StyledWrapper = styled.div``;
