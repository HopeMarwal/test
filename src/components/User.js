import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function User() {
  console.log('user rendered')
  const { data, dispatch } = useContext(UserContext)

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_USER_NAME",
      payload: e.target.value
    })
  }
  return (
    <>
      <div>User: {data.user}</div>
      <input type='text' onChange={handleChange}></input>
    </>

  )
}
