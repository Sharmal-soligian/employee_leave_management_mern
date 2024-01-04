// pages/Leave application/LeaveApplication.jsx
import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../Context/UserContext";

/* Material UI imports */
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const LeaveApplication = () => {
  const [leaveData, setLeaveData] = useState({
    days: 0,
    reason: "",
    department: "",
  });
  const [successMsg, setSuccessMessage] = useState("");

  const { user } = useContext(UserContext);

  const handleInputChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/employee/leave/apply-leave",
        { ...leaveData, userId: user.id }
      );
      setSuccessMessage(response?.data?.message);
      setLeaveData({
        days: 0,
        reason: "",
        department: "",
      });

      /* Clear success message */
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <LeaveApplicationWrapper>
        <CardContainer>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b style={{ color: "#bbb" }}>Leave Application</b>
              </Typography>
              <TextField
                id="days"
                label="Enter Number of days"
                fullWidth
                type="number"
                variant="standard"
                value={leaveData.days}
                onChange={handleInputChange}
              />
              <TextField
                id="reason"
                label="Enter Reason"
                fullWidth
                variant="standard"
                value={leaveData.reason}
                onChange={handleInputChange}
              />
              <TextField
                id="department"
                label="Enter Department"
                fullWidth
                variant="standard"
                value={leaveData.department}
                onChange={handleInputChange}
              />
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button size="small" variant="contained" onClick={handleSubmit}>
                Apply leave
              </Button>
            </CardActions>
          </Card>
          <SuccesMessage style={{ color: "#FFD700" }}>
            {successMsg}
          </SuccesMessage>
        </CardContainer>
      </LeaveApplicationWrapper>
    </>
  );
};

const LeaveApplicationWrapper = styled.div`
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

const SuccesMessage = styled.div`
  margin-top: 10px;
`;

export default LeaveApplication;
