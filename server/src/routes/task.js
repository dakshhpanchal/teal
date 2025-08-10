const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
const db = require('../db');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/add', async (req, res) => {
  const { title, description, assigneeEmail } = req.body;

  if (!title || !description || !assigneeEmail) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {

    const userResult = await db.query('SELECT id FROM users WHERE email = $1', [assigneeEmail]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'Assignee not found' });
    }

    const userId = userResult.rows[0].id;

    const insert = await db.query(`
      INSERT INTO tasks (user_id, task)
      VALUES ($1, $2)
      RETURNING *
    `, [userId, `${title} - ${description}`]);

    const { data, error } = await resend.emails.send({
      from: 'Teal Tasks <onboarding@resend.dev>',
      to: [assigneeEmail],
      subject: `📝 New Task Assigned: ${title}`,
      html: `
        <p>Hello,</p>
        <p>You have been assigned a new task:</p>
        <strong>${title}</strong>
        <p>${description}</p>
      `
    });

    if (error) {
      console.error('❌ Email error:', error);
      return res.status(200).json({ message: 'Task added, saved, and email sent', task: insert.rows[0] });
    }

    res.status(200).json({ message: 'Task added and email sent', data });
  } catch (err) {
    console.error('❌ Task add error:', err);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

module.exports = router;
