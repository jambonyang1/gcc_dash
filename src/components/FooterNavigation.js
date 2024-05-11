import * as React from "react";
import styled from "styled-components";

export default function FooterNavigation() {
  return (
    <StyledWrapper>
      <ul className="nav justify-content-center fixed-bottom bg-white">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="/main">
            main
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mento">
            mento
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="works">
            works
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mypage">
            mypage
          </a>
        </li>
      </ul>
      {/* <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
          className="nav"
        >
          <BottomNavigationAction
            label="함께하기"
            value="home"
            icon={<HomeIcon />}
            onClick={console.log("qq")}
          />
          <BottomNavigationAction
            label="멘토들"
            value="groups"
            icon={<GroupsIcon />}
            onClick={console.log("qq")}
          />
          <BottomNavigationAction
            label="나의 활동"
            value="inventory"
            icon={<InventoryIcon />}
            onClick={console.log("qq")}
          />

          <BottomNavigationAction
            label="마이페이지"
            value="person"
            icon={<PersonIcon />}
            onClick={console.log("qq")}
          />
        </BottomNavigation>
      </Paper> */}
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
  border-top: 1px solid #e0e0e0;

  .icon {
    width: 50px;
    height: 50px;
  }
`;
