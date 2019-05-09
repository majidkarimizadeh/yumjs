import { useReducer } from 'react'
import combineReducers from './combineReducers'

const initialState = {
	isCreate: false,
	isEdit: false,
	inputValue: '',
	todos: [],
	isInit: true,
	isLoading: true,
	error: false,
	errorMessage: '',
	isModalOpen: false,
}

const todos = (state, action) => {
  	switch (action.type) {
  		case 'load_success':
  			return {
  				...state,
  				todos: action.data,
  				isLoading: false,
  				isInit: false,
  			}
		case 'load_failure':
	  		return {
	  			...state,
	  			error: true,
	  			errorMessage: 'CONNECTION ERROR',
				isLoading: false,
				isInit: false,
	  		}
  		case 'set_complete':
	  		let updatedTodos = state.todos.map(todo => {
	  			if(todo.id === action.data.id) {
	  				todo.isCompleted = !todo.isCompleted
	  			}
  				return todo
	  		})
			return {
				...state,
				todos: updatedTodos
			}
		case 'delete': 
			let newTodos = [...state.todos]
			let index = newTodos.indexOf(action.data);
	  		newTodos.splice(index, 1)
			return {
				...state,
				todos: newTodos
			}
		case 'toggle_modal': 
			return {
				...state,
				inputValue: '',
				isModalOpen: !state.isModalOpen,
				isEdit: false,
				isCreate: false,
			}
		case 'open_edit': 
			return {
				...state,
				isEdit: true,
				inputValue: action.data.title,
				defaultValue: action.data.title,
				isModalOpen: !state.isModalOpen
			}
		case 'open_create_modal': 
			return {
				...state,
				isCreate: true,
				inputValue: '',
				isModalOpen: !state.isModalOpen,
				isEdit: false,
			}
		case 'input_change':
			return {
				...state,
				inputValue: action.data,
			}
		case 'confirm_modal':
			if(state.isEdit) 
			{
				return {
					...state,
					isModalOpen: false,
					todos: [
						{id: Math.random(), title: state.inputValue, isCompleted: false},
						...state.todos,
					]
				}
			}
			else if(state.isCreate) 
			{
				return {
					...state,
					isModalOpen: false,
					todos: [
						{id: Math.random(), title: state.inputValue, isCompleted: false},
						...state.todos,
					]
				}
			}
    	default:
      		return state
  	}
}

const useFoo = () => useReducer( 
	todos,
	// combineReducers({ todos }),
initialState)

export default useFoo