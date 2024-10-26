import React, { useState, useEffect } from 'react';
    import sicCodes from '../sicCodes.json';
    import BackButton from '../components/BackButton';

    function AccountInfo() {
      // ... (previous code remains unchanged)

      return (
        <div className="account-info">
          <BackButton />
          <h1>Account Info</h1>
          <form className="business-profile-form">
            {/* ... (previous form fields remain unchanged) */}
            <div className="field-container">
              <label htmlFor="sicSearch">SIC Codes:</label>
              <input
                type="text"
                id="sicSearch"
                value={sicSearch}
                onChange={(e) => setSicSearch(e.target.value)}
                placeholder="Search SIC codes"
              />
              <ul className="sic-code-list">
                {filteredSicCodes.map((sic) => (
                  <li key={sic.code}>
                    <label>
                      <input
                        type="checkbox"
                        checked={businessInfo.sicCodes.includes(`${sic.code} - ${sic.description}`)}
                        onChange={() => handleSicSelect(sic.code, sic.description)}
                      />
                      {sic.code} - {sic.description}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="selected-sic-codes">
                <h4>Selected SIC Codes:</h4>
                <ul>
                  {businessInfo.sicCodes.map((sic, index) => (
                    <li key={index}>
                      {sic}
                      <button 
                        onClick={() => handleSicDelete(sic)} 
                        aria-label={`Delete ${sic}`}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'black',
                          fontSize: '0.7em',
                          padding: '0 4px',
                          cursor: 'pointer',
                          verticalAlign: 'middle'
                        }}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {renderField('description', 'Business Description', 'textarea')}
          </form>
        </div>
      );
    }

    export default AccountInfo;
