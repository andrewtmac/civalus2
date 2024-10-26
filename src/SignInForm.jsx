import React, { useState } from 'react';

    const demoUser = {
      email: 'demo@civalus.com',
      password: 'password123'
    };

    function SignInForm() {
      const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === demoUser.email && formData.password === demoUser.password) {
          alert('Sign in successful!');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      };

      return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      );
    }

    export default SignInForm;
