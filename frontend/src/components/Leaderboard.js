import React from 'react';
import Pagination from './Pagination';

const Leaderboard = ({ data, onPageChange }) => {
  const users = data?.users ?? [];
  const currentPage = data?.currentPage ?? 1;
  const totalPages = data?.totalPages ?? 1;

  // This function now returns a trophy icon with different colors for the top 3 ranks
  const getRankIndicator = (rank) => {
    if (rank === 1) return <i className="fa-solid fa-trophy" style={{ color: '#ffd700' }}></i>; // Gold
    if (rank === 2) return <i className="fa-solid fa-trophy" style={{ color: '#c0c0c0' }}></i>; // Silver
    if (rank === 3) return <i className="fa-solid fa-trophy" style={{ color: '#cd7f32' }}></i>; // Bronze
    return rank;
  };

  return (
    <div className="leaderboard-card">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="rank">{getRankIndicator(index + 1 + (currentPage - 1) * 10)}</td>
              <td className="name">{user.name}</td>
              <td className="points">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default Leaderboard;
