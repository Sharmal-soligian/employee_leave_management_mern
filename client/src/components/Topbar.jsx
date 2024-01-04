import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from "styled-components";

const Topbar = () => {
  return (
    <>
        <TopBar>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Leave Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </TopBar>   
    </>
  );
}

const TopBar = styled.div`
  width: 100%;
`;

export default Topbar