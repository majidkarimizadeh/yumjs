import React, { Component } from 'react'
import DatePicker from '../../components'
import { withRouter } from 'react-router-dom'

class Bar extends Component {

	render() {
		return (
			<div>
				<DatePicker /> s
			</div>
		)
	}
}

export default withRouter(Bar)