import React from 'react';
    import { Link } from 'react-router-dom';

    function Sidebar() {
      return (
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/">Account Info</Link></li>
            <li><Link to="/available-contracts">Available Contracts</Link></li>
            <li><Link to="/working-contracts">Working Contracts</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
      );
    }

    export default Sidebar;
