import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Importation de notre fichier css

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {listOfUser.map(user => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
