import React, { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'

export default function Cart() {
  const { state, dispatch } = useContext(MessageContext)

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- - -</button>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ + +</button>
    </div>
  )
}
