import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import UserContext from "../../Context/UserContext";

const LeaveHistory = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const { user } = useContext(UserContext);

  const fetchLeaveHistory = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/employee/leave/leave-history/${user.id}`
      );
      setLeaveHistory(response.data);
    } catch (error) {
      console.error("Error fetching leave history:", error);
    }
  }, [user.id]);

  useEffect(() => {
    fetchLeaveHistory();
  }, [fetchLeaveHistory]);

  return (
    <div>
      <h2>Leave History</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Leave ID</TableCell>
              <TableCell>Days</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveHistory.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.id}</TableCell>
                <TableCell>{leave.days}</TableCell>
                <TableCell>{leave.reason}</TableCell>
                <TableCell>{leave.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaveHistory;
