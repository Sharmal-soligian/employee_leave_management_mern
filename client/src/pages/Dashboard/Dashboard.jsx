import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const [leaveSummary, setLeaveSummary] = useState([]);

  const fetchLeaveSummary = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/admin/leave/leave-summary');
      setLeaveSummary(response.data);
    } catch (error) {
      console.error('Error fetching leave summary:', error);
    }
  }, []);

  useEffect(() => {
    fetchLeaveSummary();
  }, [fetchLeaveSummary]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Leave Summary
        </Typography>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {leaveSummary.map((summary) => (
            <li key={summary.department} style={{ marginBottom: '10px', color: '#555' }}>
              {summary.department}: {summary.totalLeaves} leaves
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
};

export default Dashboard;
