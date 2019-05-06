import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import useFoo from '../../stores/fooHook'

const Foo = (props) => {
	const [state, dispatch] = useFoo()

	useEffect( () => {
		document.title = state.count
	})

	return (
		<div>
			<div onClick={() => dispatch({type: 'increment'})}>ADD ONE MORE</div>
			<div onClick={() => dispatch({type: 'decrement'})}>SUB ONE MORE</div>
			<div>COUNT {state.count}</div>
		</div>
	)
}

export default withRouter(Foo)