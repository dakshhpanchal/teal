const express = require('express');
const router = express.Router();

router.get('/me', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const { id, name, email, role } = req.user;
  res.json({ id, name, email, role });
});

module.exports = router;
