// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card
      style={{
        width: "20rem",
        margin: "10px",
        border: "2px solid #ccc",
        borderColor: "white",
        borderRadius: "5px",
        boxSizing: "border-box",
        backgroundColor: "black",
        color: "bisque",
      }}
    >
      <Card.Img variant="top" src={image} style={{ width: "100%" }} />
      <Card.Body
        style={{
          width: "100%",
        }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "./images/default.jpg",
};

export default Player;
