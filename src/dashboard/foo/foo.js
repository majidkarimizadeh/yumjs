import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Foo extends Component {
	render() {
		return <div>foo</div>
	}
}

export default withRouter(Foo)