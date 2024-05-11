import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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
            main
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="mentor">
            mentor
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="mypage">
            mypage
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

    justify-content: space-around;
  }
`;