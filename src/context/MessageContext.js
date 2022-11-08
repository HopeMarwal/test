import { createContext, useReducer } from 'react';

export const MessageContext = createContext()

export const MessageContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    count: 0
  }

  const messageReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1
        }
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(messageReducer, INITIAL_STATE)

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  )
}