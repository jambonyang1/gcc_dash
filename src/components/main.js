import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import { Card } from "antd";
import work_coding from "./work_coding.jpeg";
import work_dog from "./work_dog.png";
import work_kid from "./work_kid.jpg";
import work_music from "./work_music.jpeg";
import work_english from "./work_english.jpeg";
import work_dosirak from "./work_dosirak.jpeg";
const { Meta } = Card;
const Main = () => {
  return (
    <StyledWrapper>
      <Card
        cover={<Image alt="example" src={work_coding} preview={false} />}
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title="코딩 멘토링 참가자 모집"
          description={
            <div className="box">
              <p className="item">장소: 경기도 성남시 분당구 정자동</p>
              <p className="item">날짜: 5월 28일 14:00</p>
            </div>
          }
        />
      </Card>
      <Card
        cover={<Image alt="example" src={work_dog} preview={false} />}
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title="유기견 산책 봉사"
          description={
            <div className="box">
              <p className="item">서울시 성동구 광나루동</p>
              <p className="item">날짜: 5월 23일 12:00</p>
            </div>
          }
        />
      </Card>
      <Card
        cover={<Image alt="example" src={work_english} preview={false} />}
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title="영어 회화 수업 선생님 모집"
          description={
            <div className="box">
              <p className="item">경기도 고양시 일산동</p>
              <p className="item">날짜: 5월 30일 18:00</p>
            </div>
          }
        />
      </Card>
      <Card
        cover={<Image alt="example" src={work_kid} preview={false} />}
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title="하늘보육원 음악강의"
          description={
            <div className="box">
              <p className="item">서울시 송파구 방이동</p>
              <p className="item">날짜: 5월 23일 16:00</p>
            </div>
          }
        />
      </Card>
      <Card
        cover={<Image alt="example" src={work_dosirak} preview={false} />}
        actions={[
          <div className="button-orange">신청하기</div>,
          <div className="button">자세히</div>,
        ]}
      >
        <Meta
          title="도시락 나눔 봉사활동 참여자 모집"
          description={
            <div className="box">
              <p className="item">서울시 강남구 역삼동</p>
              <p className="item">날짜: 5월 29일 11:00</p>
            </div>
          }
        />
      </Card>
    </StyledWrapper>
  );
};
export default Main;

const StyledWrapper = styled.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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
