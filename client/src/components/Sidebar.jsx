import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sidebarDataAdmin, sidebarDataEmployee } from "../data/sidebarData";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  const { user, logout } = useContext(UserContext);
  const isAdmin = user && user.role === "admin";
  const isEmployee = user && user.role === "employee";

  return (
    <SidebarContainer>
      <Drawer variant="permanent" anchor="left">
        <List>
          {(isAdmin || isEmployee) && (
            <ListItem style={{ display: "flex", flexDirection: "column" }}>
              <AccountCircleIcon />
              <ListItemText primary={`Email: ${user.email}`} />
              <ListItemText primary={`ID: ${user.id}`} />
            </ListItem>
          )}
          {isAdmin &&
            sidebarDataAdmin.map((data, index) => (
              <ListItem key={index} button component={Link} to={data.path}>
                <IconContainer>{data.icon}</IconContainer>
                <ListItemText primary={data.label} />
              </ListItem>
            ))}
            {isEmployee &&
            sidebarDataEmployee.map((data, index) => (
              <ListItem key={index} button component={Link} to={data.path}>
                <IconContainer>{data.icon}</IconContainer>
                <ListItemText primary={data.label} />
              </ListItem>
            ))}
            {isAdmin ? 
              (<ListItem button component={Link} to={'/admin-login'} onClick={logout}>
                <LogoutIcon />
                <ListItemText primary='Logout' />
              </ListItem>) : (
                <ListItem button component={Link} to={'/employee-login'} onClick={logout}>
                <LogoutIcon />
                <ListItemText primary='Logout' />
              </ListItem>
              )}
        </List>
      </Drawer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  margin-top: 8vh;
`;

const IconContainer = styled.div``;

export default Sidebar;
