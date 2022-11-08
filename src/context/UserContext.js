import React, { createContext, useReducer } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    user: 'Jonh'
  }

  const userReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER_NAME":
        return {
          ...state, user: action.payload
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  return (
    <UserContext.Provider value={{ data: state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
