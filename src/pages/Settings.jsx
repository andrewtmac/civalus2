import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import UserManagement from './UserManagement';
    import BackButton from '../components/BackButton';

    function Settings() {
      return (
        <div>
          <BackButton />
          <h1>Settings</h1>
          {/* ... rest of the component ... */}
        </div>
      );
    }

    export default Settings;
