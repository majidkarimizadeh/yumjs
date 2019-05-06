import React, { useState, useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
  	switch (action.type) {
    	case 'increment':
      		return {count: state.count + 1}
    	case 'decrement':
      		return {count: state.count - 1}
    	default:
      		throw new Error()
  	}
}

const useFoo = () => useReducer(reducer, initialState)

export default useFoo