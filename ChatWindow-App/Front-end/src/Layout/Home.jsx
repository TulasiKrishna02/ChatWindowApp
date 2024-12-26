// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  };

  const textStyle = {
    fontSize: '2.5rem',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}><b>Welcome to UpwardIQ Chat Application</b></h1>
    </div>
  );
};

export default Home;
