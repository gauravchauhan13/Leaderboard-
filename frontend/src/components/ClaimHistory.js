import React from 'react';
import Pagination from './Pagination';

const ClaimHistory = ({ data, onPageChange }) => {
  const history = data?.history ?? [];
  const currentPage = data?.currentPage ?? 1;
  const totalPages = data?.totalPages ?? 1;

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString();
  };

  return (
    <div className="leaderboard-card">
      <h2>Claim History</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Points Claimed</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record) => (
            <tr key={record._id}>
              <td className="name">{record.userId ? record.userId.name : 'Unknown User'}</td>
              <td className="points">{record.pointsClaimed}</td>
              <td>{formatDate(record.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default ClaimHistory;
