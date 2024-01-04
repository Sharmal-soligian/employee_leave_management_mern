import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/admin/register", {
        email,
        password,
      });

      if (res?.status === 201) navigate("/admin-login");
    } catch (error) {
      console.error("Error registering Admin", error?.response.data);
      setErrMsg(error?.response?.data?.message);
    }
  };

  return (
    <>
      <AdminRegisterWrapper>
        <CardContainer>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b style={{ color: "#bbb" }}>Admin Register</b>
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
              <Button size="small" variant="contained" onClick={handleRegister}>
                Register
              </Button>
              <span>
                <Link to={"/admin-login"}>Already an user?</Link>
              </span>
            </CardActions>
          </Card>
          <ErrorMessage style={{ color: "red" }}>{errMsg}</ErrorMessage>
        </CardContainer>
      </AdminRegisterWrapper>
    </>
  );
};

const AdminRegisterWrapper = styled.div`
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

const ErrorMessage = styled.div`
  margin-top: 10px;
`;

export default AdminRegister;
