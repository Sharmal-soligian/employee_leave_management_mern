import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';

export const sidebarDataAdmin = [
    { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/department-list', label: 'Department List', icon: <ListIcon /> }
];

export const sidebarDataEmployee = [
    { path: '/leave-application', label: 'Leave Application', icon : <AddIcon /> }, 
    { path: '/leave-history', label: 'Leave History', icon : <HistoryIcon /> }, 
];

