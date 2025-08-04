import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoodboardCard from '../components/MoodboardCard';


function MoodboardPage() {
  const [boards, setBoards] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBoards = async () => {
      const res = await axios.get('http://localhost:5000/api/moodboards/myboards', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBoards(res.data);
    };
    fetchBoards();
  }, []);

  return (
    <div className="container mt-4">
      <h3>🖼️ My Moodboards</h3>
      <div className="row">
        {boards.map(board => (
          <MoodboardCard key={board._id} board={board} />
        ))}
      </div>
    </div>
  );
}

export default MoodboardPage;
