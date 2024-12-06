// /src/components/ProfileCard.js
import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img
        src={user.profile_picture} // Replace with actual image URL
        alt="User Avatar"
      />
      <h3>{user.name}</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <img
            src="../src/assets/BirthIcon.svg"
            alt="helo"
            style={{ width: "50px", height: "50px", paddingTop: "15px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>Date of Birth</div>
          <div>{user.date_of_birth}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <img
            src="../src/assets/FemaleIcon (1).svg"
            alt="helo"
            style={{ width: "50px", height: "50px", paddingTop: "15px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>Gender</div>
          <div>{user.gender}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <img
            src="../src/assets/phoneIcon.svg"
            alt="helo"
            style={{ width: "50px", height: "50px", paddingTop: "15px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>Contact Info</div>
          <div>{user.phone_number}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <img
            src="../src/assets/phoneIcon.svg"
            alt="helo"
            style={{ width: "50px", height: "50px", paddingTop: "15px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>Emergency Contact</div>
          <div>{user.emergency_contact}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <img
            src="../src/assets/InsuranceIcon.svg"
            alt="helo"
            style={{ width: "50px", height: "50px", paddingTop: "15px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>Insurance Provider</div>
          <div>{user.insurance_type}</div>
        </div>
      </div>
      <h3
        style={{
          backgroundColor: "#01F0D0",
          borderRadius: "25px",
          padding: "10px",
        }}
      >
        Show All Information
      </h3>
    </div>
  );
};

export default ProfileCard;
