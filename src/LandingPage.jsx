import React, { useState } from 'react';
    import SignUpForm from './SignUpForm';
    import SignInForm from './SignInForm';

    function LandingPage() {
      const [showSignIn, setShowSignIn] = useState(false);

      return (
        <div>
          <header className="menu-bar">
            <h1>Civalus</h1>
            <nav>
              <ul>
                <li><a href="#signup" onClick={() => setShowSignIn(false)}>Sign Up</a></li>
                <li><a href="#signin" onClick={() => setShowSignIn(true)}>Sign In</a></li>
              </ul>
            </nav>
          </header>
          <section className="overview">
            <h2>Welcome to Civalus</h2>
            <p>
              Civalus helps businesses match with US government contracts that best fit their capabilities.
              Upload your documents, manage contracts, and use AI to find the best opportunities.
            </p>
          </section>
          <section id="auth">
            {showSignIn ? <SignInForm /> : <SignUpForm />}
          </section>
        </div>
      );
    }

    export default LandingPage;
