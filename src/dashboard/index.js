import Foo from './foo/foo'
import Bar from './bar/bar'

const Routes = [
	{
		path: '/foo',
		render: Foo,
	},
	{
		path: '/bar',
		render: Bar,
	},
]

export default Routes