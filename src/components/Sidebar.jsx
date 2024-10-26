import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaHome, FaFileContract, FaBriefcase, FaCog, FaSignOutAlt } from 'react-icons/fa';

    function Sidebar() {
      const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
        // You might want to clear user session, redirect to login page, etc.
      };

      return (
        <div className="sidebar">
          <h2>Civalus</h2>
          <nav>
            <ul>
              <li><Link to="/"><FaHome />Account Info</Link></li>
              <li><Link to="/available-contracts"><FaFileContract />Available Contracts</Link></li>
              <li><Link to="/working-contracts"><FaBriefcase />Working Contracts</Link></li>
              <li><Link to="/settings"><FaCog />Settings</Link></li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  <FaSignOutAlt />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    export default Sidebar;
