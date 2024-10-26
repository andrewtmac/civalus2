import React, { useState } from 'react';

    function InviteUser({ onInvite }) {
      const [email, setEmail] = useState('');
      const [role, setRole] = useState('user');

      const handleSubmit = (e) => {
        e.preventDefault();
        onInvite(email, role);
        setEmail('');
        setRole('user');
      };

      return (
        <form onSubmit={handleSubmit}>
          <h3>Invite New User</h3>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Send Invitation</button>
        </form>
      );
    }

    export default InviteUser;
