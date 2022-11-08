import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  console.log('profile rendered')
  const { user } = useContext(UserContext)
  return (
    <div>Profile: {user}</div>
  )
}
