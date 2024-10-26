import React from 'react';
    import { Link, useLocation } from 'react-router-dom';

    function Tabs({ tabs }) {
      const location = useLocation();

      return (
        <div className="tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`tab ${location.pathname === tab.path ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      );
    }

    export default Tabs;
