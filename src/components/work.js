import React from "react";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;
const Work = (props) => {
  const { event } = props;
  return (
    <StyledWrapper>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title={event.title}
          description={
            <div className="box">
              <p className="item">장소: {event.place}</p>
              <p className="item">날짜: {event.date}</p>
            </div>
          }
        />
      </Card>
    </StyledWrapper>
  );
};

export default Work;

const StyledWrapper = styled.div`
  padding: 20px;

  .card {
    padding: 10px;
  }
  .button-orange {
    color: #ff7a00;
    cursor: pointer;
  }

  .button {
    color: black;
    cursor: pointer;
  }

  .box {
    padding: 0px;
    .item {
      padding: 0px;
    }
  }
`;
