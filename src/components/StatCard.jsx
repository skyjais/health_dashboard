
import React from "react";
import "./StatCard.css";

const StatCard = ({ label, value, status, icon }) => {
  return (
    <div className="stat-card">
      <div className="icon-container">
        <img src={icon} alt={`${label} icon`} />
      </div>
      <div className="stat-info">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
        <span className={`stat-status ${status.toLowerCase()}`}>{status}</span>
      </div>
    </div>
  );
};

export default StatCard;
