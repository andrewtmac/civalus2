const express = require('express');
    const bodyParser = require('body-parser');
    require('dotenv').config();

    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(bodyParser.json());

    // In-memory data structure to simulate a database
    const companies = {
      'company1': {
        name: 'Company 1',
        users: [
          { id: 'user1', name: 'Alice', email: 'alice@company1.com', role: 'admin' },
          { id: 'user2', name: 'Bob', email: 'bob@company1.com', role: 'user' }
        ],
        invitations: []
      }
    };

    // Get users for a company
    app.get('/api/companies/:companyId/users', (req, res) => {
      const { companyId } = req.params;
      const company = companies[companyId];
      if (company) {
        res.json(company.users);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    });

    // Get invitations for a company
    app.get('/api/companies/:companyId/invitations', (req, res) => {
      const { companyId } = req.params;
      const company = companies[companyId];
      if (company) {
        res.json(company.invitations);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    });

    // Create an invitation
    app.post('/api/companies/:companyId/invitations', (req, res) => {
      const { companyId } = req.params;
      const { email, role } = req.body;
      const company = companies[companyId];
      if (company) {
        const newInvitation = { id: `inv${company.invitations.length + 1}`, email, role };
        company.invitations.push(newInvitation);
        res.status(201).json(newInvitation);
      } else {
        res.status(404).json({ error: 'Company not found' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
