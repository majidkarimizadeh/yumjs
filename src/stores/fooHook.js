import { useReducer } from 'react'
import API from '../services/api'
import combineReducers from './combineReducers'

const initialState = {
	opOne: {count: 0, loading: false},
	opTwo: {count: 0}
}

const opOne = (state, action) => {
  	switch (action.type) {
  		case 'init':
  		{
  			API.getCount()
  			return {loading: true}
  		} 
  		case 'loaded':
  		{
  			return {count: action.data}
  		} 
    	case 'increment':
      		return {count: state.count + 1}
    	case 'decrement':
      		return {count: state.count - 1}
    	default:
      		return state
  	}
}

const opTwo = (state, action) => {
  	switch (action.type) {
    	case 'i2':
      		return {count: state.count + 2}
    	case 'd2':
      		return {count: state.count - 2}
    	default:
      		return state
  	}
}

const useFoo = () => useReducer( 
	combineReducers({ opTwo, opOne }),
initialState)

export default useFoo