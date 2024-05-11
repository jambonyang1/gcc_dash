import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterNavigation() {
  return (
    <StyledWrapper>
      <ul className="nav justify-content-center fixed-bottom bg-white">
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/main">
            main
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="mento">
            mento
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="works">
            works
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="mypage">
            mypage
          </Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 calc(50vw - 640px);
  gap: 10px;
  transition: top 0.4s ease-in-out;
  position: sticky;
  background-color: white;
  z-index: 1000;
  border-top: 1px solid black;

  .icon {
    width: 50px;
    height: 50px;
  }

  .nav {
    border-top: 1px solid grey;

    .nav-item {
      font-style: black;
    }
  }
`;
