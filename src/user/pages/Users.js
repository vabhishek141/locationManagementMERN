import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'abhishek verma',
      image: '../../assets/images/iron-man.jpg',
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
