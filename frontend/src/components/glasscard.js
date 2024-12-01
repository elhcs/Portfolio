import React from 'react';
import './glasscard.css'; // Import the CSS file for styling

const GlassCard = ({ comment }) => {
  return (
    <div className="glass-card">
      <p>{comment}</p>
    </div>
  );
};

export default GlassCard;
