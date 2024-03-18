import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function UserTable() {
  const [userData, setUserData] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchData(); // Refresh table after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleUpdate = async (formData) => {
    try {
      await axios.put(`http://localhost:3001/users/${selectedUser.id}`, formData);
      fetchData();
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Data stored', response.data);
    } catch (err) {
      console.error('Error Storing Data', err);
    }
  };

  return(
    <div className='table-responsive'>
      <table className="table table-striped border-primary">
        <caption>List of users</caption>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company}</td>
              <td>
                <div className="container">
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}><FaTrashAlt /></button>
                  <button type="button" className="btn btn-warning" onClick={() => handleEdit(user)} style={{marginLeft: '10px'}}><FaEdit /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserForm user={selectedUser} handleUpdate={handleUpdate} />
      )}
      {!selectedUser && (
        <UserForm handleSubmit={handleSubmit} />
      )}
    </div>
  )
}