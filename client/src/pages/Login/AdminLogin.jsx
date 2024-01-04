import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAsAdmin } = useContext(UserContext);
  const navigate = useNavigate(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/admin/login", {
        email,
        password,
      });

      if (res?.status === 200) {
        /* Login as ADMIN */
        loginAsAdmin(email, res?.data.userId);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error registering Admin", error);
    }
  };

  return (
    <>
      <AdminLoginWrapper>
        <CardContainer>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b style={{ color: "#bbb" }}>Admin Login</b>
              </Typography>
              <TextField
                id="standard-multiline-flexible"
                label="Enter Email id"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Enter Password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button size="small" variant="contained" onClick={handleLogin}>
                Login
              </Button>
              <span>
                <Link to={"/admin-register"}>Not having account?</Link>
              </span>
            </CardActions>
          </Card>
        </CardContainer>
      </AdminLoginWrapper>
    </>
  );
};

const AdminLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;

  & a {
    text-decoration: none;
  }
`;

const CardContainer = styled.div`
  max-width: 400px;
  width: 100%;
`;

export default AdminLogin;
