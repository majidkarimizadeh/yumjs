import useFoo from '../stores/fooHook'

class API {

	static getCount() {
		const [{opOne, opTwo}, dispatch] = useFoo()
		return new Promise( (resolve, reject) => {
			setTimeout(() => {
				// dispatch({type: 'loaded', data: 20})
			}, 2000)
		})
	}
}

export default API