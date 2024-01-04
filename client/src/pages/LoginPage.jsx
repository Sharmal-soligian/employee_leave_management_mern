import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      {/* Top bar */}
      <TopBarWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={{ display: "flex", justifyContent: "center" }}>
              <Button color="inherit">
                <Link to={"/admin-login"}>Admin Login</Link>
              </Button>
              <Button color="inherit">
                <Link to={"/employee-login"}>Employee Login</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </TopBarWrapper>  
      <Outlet />
    </>
  );
};

const TopBarWrapper = styled.div`
  width: 100%;

  & a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default LoginPage;
