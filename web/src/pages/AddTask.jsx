import React, { useState } from 'react';
import axios from 'axios';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigneeEmail, setAssigneeEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !assigneeEmail) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/tasks/add', {
        title,
        description,
        assigneeEmail
      }, { withCredentials: true });

      alert("Task added and email sent!");
      setTitle('');
      setDescription('');
      setAssigneeEmail('');
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '24px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label>Task Title</label><br />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label>Description</label><br />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label>Assignee Email</label><br />
          <input
            type="email"
            value={assigneeEmail}
            onChange={e => setAssigneeEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
}
