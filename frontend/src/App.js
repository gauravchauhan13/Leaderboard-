import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';
import UserForm from './components/UserForm';
import ClaimHistory from './components/ClaimHistory';
import Notification from './components/Notification';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const fetchUsers = (page = 1) => axios.get(`${API_URL}/users?page=${page}&limit=10`);
const fetchHistory = (page = 1) => axios.get(`${API_URL}/history?page=${page}&limit=10`);
const addUser = (name) => axios.post(`${API_URL}/users`, { name });
const claimPoints = (userId) => axios.post(`${API_URL}/claim`, { userId });

function App() {
  const [usersData, setUsersData] = useState({ users: [], totalPages: 1, currentPage: 1 });
  const [historyData, setHistoryData] = useState({ history: [], totalPages: 1, currentPage: 1 });
  const [selectedUser, setSelectedUser] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  // Updated to handle notification type
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type });
    }, 3000);
  };

  const getUsersData = useCallback(async (page = 1) => {
    try {
      const response = await fetchUsers(page);
      if (response.data && Array.isArray(response.data.users)) {
        setUsersData(response.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, []);

  const getHistoryData = useCallback(async (page = 1) => {
    try {
      const response = await fetchHistory(page);
      if (response.data && Array.isArray(response.data.history)) {
        setHistoryData(response.data);
      }
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  }, []);

  useEffect(() => {
    getUsersData(1);
    getHistoryData(1);
  }, [getUsersData, getHistoryData]);

  const handleUserAdd = async (name) => {
    try {
      const response = await addUser(name);
      showNotification(response.data.message, 'success'); // Specify type
      getUsersData(1);
    } catch (error) {
      showNotification(error.response?.data?.message || 'Error adding user.', 'error'); // Specify type
    }
  };

  const handleClaim = async () => {
    if (!selectedUser) {
      showNotification('Please select a user first!', 'error'); // Specify type
      return;
    }
    try {
      const response = await claimPoints(selectedUser);
      showNotification(response.data.message, 'success'); // Specify type
      getUsersData(usersData.currentPage);
      getHistoryData(1);
    } catch (error) {
      showNotification(error.response?.data?.message || 'Error claiming points.', 'error'); // Specify type
    }
  };

  return (
    <div className="App">
      <Notification
        message={notification.message}
        show={notification.show}
        type={notification.type}
      />
      <h1>User Leaderboard</h1>
      <div className="container">
        <div className="form-container">
          <UserForm
            users={usersData.users}
            selectedUser={selectedUser}
            onUserSelect={setSelectedUser}
            onUserAdd={handleUserAdd}
            onClaim={handleClaim}
          />
        </div>
        <div className="leaderboard-container">
          <Leaderboard data={usersData} onPageChange={getUsersData} />
          <ClaimHistory data={historyData} onPageChange={getHistoryData} />
        </div>
      </div>
    </div>
  );
}

export default App;
