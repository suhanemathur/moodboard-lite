import React from 'react';

function MoodboardCard({ board }) {
  return (
    <div className="card p-3 mb-3">
      <h5>{new Date(board.createdAt).toLocaleDateString()}</h5>
      <div className="d-flex flex-wrap gap-3 mt-2">
        {board.items.map((item, idx) => {
          if (item.type === 'color') {
            return (
              <div
                key={idx}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: item.content,
                }}
              />
            );
          }
          if (item.type === 'image') {
            return <img key={idx} src={item.content} alt="img" width="100" />;
          }
          if (item.type === 'text') {
            return <div key={idx}>{item.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default MoodboardCard;
