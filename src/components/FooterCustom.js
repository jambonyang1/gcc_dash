import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { UserOutlined, TeamOutlined, HomeOutlined } from "@ant-design/icons";

const Footer = () => {
  const [selectedLink, setSelectedLink] = useState("main");

  return (
    <StyledWrapper>
      <div className="bar-y-1 fixed-bottom">
        <div>
          <Link
            className={
              selectedLink === "main" ? "nav-link fw-bold" : "nav-link"
            }
            to="/main"
            onClick={() => setSelectedLink("main")}
          >
            <HomeOutlined />
            <div>홈</div>
          </Link>
        </div>
        <div>
          <Link
            className={
              selectedLink === "mentor" ? "nav-link fw-bold" : "nav-link"
            }
            to="mentor"
            onClick={() => setSelectedLink("mentor")}
          >
            <TeamOutlined />
            <div>멘토 찾기</div>
          </Link>
        </div>
        <div>
          <Link
            className={
              selectedLink === "mypage" ? "nav-link fw-bold" : "nav-link"
            }
            to="mypage"
            onClick={() => setSelectedLink("mypage")}
          >
            <UserOutlined />
            <div>나</div>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > .bar-y-1 {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    min-height: 60px;

    justify-content: space-evenly;
  }
`;
