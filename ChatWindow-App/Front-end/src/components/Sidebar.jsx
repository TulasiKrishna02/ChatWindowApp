import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Sidebar.css';  // Optional CSS for styling the sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {/* Use Link component to navigate to the Home page */}
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/signup">REGISTER USER</Link></li>
        <li><Link to="/login">LOGIN USER</Link></li>
        <li><Link to="/chat">CHAT WINDOW</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
