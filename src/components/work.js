import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const Work = (props) => {
  const { event } = props;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found:a welcome guest in many households across the world.
`;
  return (
    <StyledWrapper>
      {/* <div className="box">
        <h3>{event.title}</h3>
        <p>장소: {event.place}</p>
        <p>날짜: {event.date}</p>
        <p>소요 시간: {event.duration}</p>
        <p>키워드: {event.keyword.join(", ")}</p>
        <p>상세 정보: {event.info}</p>
        <p>요청 여부: {event.request ? "요청 중" : "요청 중 아님"}</p>
      </div> */}
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
