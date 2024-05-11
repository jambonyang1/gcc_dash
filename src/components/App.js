import styled from "styled-components";
// import FooterNavigation from "./FooterNavigation";
import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Mentor from "./mentor";
import Mypage from "./mypage";
import Footer from "./FooterCustom";

function App() {
  return (
    <StyledWrapper>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
      {/* <FooterNavigation /> */}
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background: rgb(255, 255, 243);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 243, 1) 0%,
    rgba(255, 243, 233, 1) 100%
  );

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
