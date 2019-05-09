import React, { useEffect } from 'react'
import { Modal, List, Avatar, Button, Skeleton, Row, Col, Input } from 'antd';
import { withRouter } from 'react-router-dom'
import API from '../../services/api'
import useFoo from '../../stores/useFoo'

const Foo = (props) => {

	const [state, dispatch] = useFoo()

	useEffect( () => {

		if(state.isInit) 
		{
			API.getTodos()
			.then( (res) => dispatch({type: 'load_success', data: res.data}))
		}
		// else if(state.isLoading) 
		// {
		// 	API.getTodos()
		// 	.then( (res) => dispatch({type: 'load_success', data: res.data}))
		// }

	})

	const { todos, isLoading, isModalOpen, inputValue, defaultValue } = state
	return (
		<div>

			<Modal
	          	title="Basic Modal"
	          	visible={isModalOpen}
	          	onOk={() => dispatch({ type: 'confirm_modal' })}
	          	onCancel={() => dispatch({ type: 'toggle_modal' })}
	        >
	          	<p>
	          		<Input 
	          			placeholder="Title" 
	          			defaultValue={defaultValue} 
	          			value={inputValue} 
	          			onChange={(e) => dispatch({type: 'input_change', data: e.target.value})}
	          		/>
	          	</p>
	        </Modal>

			<Row type="flex" justify="center" align="middle">
				<Col span={16}>
		        	<Button type="primary" className='create-item' onClick={() => dispatch({ type: 'open_create_modal' })}>
			          	Create Item
			        </Button>
		        </Col>
			</Row>
			<Row type="flex" justify="center" align="middle">
				<Col span={16}>
					<List
			        	className="demo-loadmore-list"
			        	loading={isLoading}
			        	itemLayout="horizontal"
			        	// loadMore={loadMore}
			        	dataSource={todos}
			        	renderItem={item => (
			          		<List.Item 
			          			actions={[
			          				<a onClick={() => dispatch({ type: 'open_edit', data: item })}>edit</a>, 
			          				<a onClick={() => dispatch({ type: 'set_complete', data: item})}>
			          					{item.isCompleted ? 'complete' : 'Not complete'}
		          					</a>,
			          				<a onClick={() => dispatch({ type: 'delete', data: item})}>
			          					remove
			          				</a>
			          			]}
			          		>
			              		<List.Item.Meta
			              			className={item.isCompleted && 'complete'}
			                		title={item.title}
			              		/>
			          		</List.Item>
			        	)}
			      	/>
				</Col>
	      	</Row>
      	</div>
	)
}

export default withRouter(Foo)