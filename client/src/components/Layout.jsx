import styled from "styled-components";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Topbar />
      <Wrapper>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Wrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const SidebarContainer = styled.div`
  width: 20%;
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 80%;
  box-sizing: border-box;
`;

export default Layout;
