import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';
import { Container, Row, Col } from 'react-bootstrap';

export default function UserGrid() {
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
    console.log(user)
    setSelectedUser(user);
  };

  const handleUpdate = async (formData) => {
    try {
      await axios.put(`http://localhost:3001/users/${selectedUser.id}`, formData);
      fetchData(); // Refresh table after update
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

  return (
    <Container>
      <Row>
        <Col md={5}>
          {selectedUser && (
            <UserForm user={selectedUser} handleUpdate={handleUpdate} />
          )}
          {!selectedUser && (
            <UserForm handleSubmit={handleSubmit} />
          )}
        </Col>
        <Col md={7}>
        <h2>List of Users</h2>
          <table className="table table-striped border-primary">
            <caption>List of users</caption>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="container">
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                      <button type="button" className="btn btn-warning" onClick={() => handleEdit(user)} style={{marginLeft: '10px'}}>Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}