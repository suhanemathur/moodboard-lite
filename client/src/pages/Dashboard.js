// client/src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MoodboardCreator from '../components/MoodboardCreator';
import MoodboardCard from '../components/MoodboardCard';

function Dashboard() {
  const [moodboards, setMoodboards] = useState([]);

  const token = localStorage.getItem('token');

  const fetchBoards = async () => {
    try {
      const res = await axios.get('/moodboards/myboards', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMoodboards(res.data);
    } catch (err) {
      console.error('Failed to fetch moodboards:', err);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Welcome! Create Your Moodboard</h2>
      <MoodboardCreator onMoodboardCreated={fetchBoards} />

      <h4 className="mt-5 text-center border-bottom pb-2 mb-4">
        🗂️ Your Moodboard History
      </h4>

      {moodboards.length === 0 ? (
        <p>No moodboards created yet.</p>
      ) : (
        moodboards.map((board) => (
          <MoodboardCard key={board._id} board={board} />
        ))
      )}
    </div>
  );
}

export default Dashboard;
