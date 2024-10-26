import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Sidebar from './Sidebar';
    import AccountInfo from './pages/AccountInfo';
    import AvailableContracts from './pages/AvailableContracts';
    import WorkingContracts from './pages/WorkingContracts';
    import Settings from './pages/Settings';
    import './App.css';

    function App() {
      return (
        <Router>
          <div className="app-container">
            <Sidebar />
            <main className="content">
              <Routes>
                <Route path="/" element={<AccountInfo />} />
                <Route path="/available-contracts" element={<AvailableContracts />} />
                <Route path="/working-contracts" element={<WorkingContracts />} />
                <Route path="/settings/*" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    }

    export default App;
