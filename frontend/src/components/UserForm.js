import React, { useState } from 'react';

const UserForm = ({ users = [], onUserAdd, onClaim, onUserSelect, selectedUser }) => {
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUserName) {
      onUserAdd(newUserName);
      setNewUserName('');
    }
  };

  return (
    <div className="form-card">
      <div className="form-section">
        <h3>Claim Points</h3>
        <select onChange={(e) => onUserSelect(e.target.value)} value={selectedUser || ''}>
          <option value="">-- Select a User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <button onClick={onClaim} disabled={!selectedUser}>
          Claim Points
        </button>
      </div>
      <form className="form-section" onSubmit={handleAddUser}>
        <h3>Add New User</h3>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter new user's name"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
