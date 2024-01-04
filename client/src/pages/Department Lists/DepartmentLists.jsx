import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DepartmentLists = () => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = useCallback( async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/admin/leave/leave-summary');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching department list:', error);
    }
  }, []);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Department List
      </Typography>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {departments.map((department, index) => (
          <li key={index} style={{ marginBottom: '10px', color: '#555' }}>
            <h4>Department: {department.department}</h4>
            <h4>Total Leaves: {department.totalLeaves}</h4>
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default DepartmentLists;
