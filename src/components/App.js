import styled from "styled-components";
import FooterNavigation from "./FooterNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import Works from "./works";
import Mento from "./mento";
import Mypage from "./mypage";

function App() {
  return (
    <StyledWrapper>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/works" element={<Works />} />
        <Route path="/mento" element={<Mento />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <FooterNavigation />
      {/* <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
