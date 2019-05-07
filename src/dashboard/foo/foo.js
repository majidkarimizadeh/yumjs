import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import useFoo from '../../stores/fooHook'

const Foo = (props) => {
	const [{opOne, opTwo}, dispatch] = useFoo()

	useEffect( () => {
		document.title = opOne.count + opTwo.count
	})

	return (
		<div>
			<h1 onClick={() => dispatch({type: 'init'})}>INIT</h1>
			<h1 onClick={() => dispatch({type: 'increment'})}>+</h1>
			<h1 onClick={() => dispatch({type: 'decrement'})}>-</h1>
			<div>COUNT {!opOne.loading ? opOne.count : '-----'}</div>
			<hr />
			<h1 onClick={() => dispatch({type: 'i2'})}>++</h1>
			<h1 onClick={() => dispatch({type: 'd2'})}>--</h1>
			<div>COUNT {opTwo.count}</div>
		</div>
	)
}

export default withRouter(Foo)