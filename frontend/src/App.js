import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './component/UserForm';
import UserList from './component/UserList';
import './index.css';
function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', dob: '' });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/users/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post('http://localhost:5000/users', formData);
    }
    setFormData({ name: '', email: '', dob: '' });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setFormData({ name: user.name, email: user.email, dob: user.dob });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="App">
      <UserForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editId={editId}
      />

      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
