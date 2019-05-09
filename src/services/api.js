class API {

	static getTodos() {
		return new Promise( (resolve, reject) => {
			setTimeout(() => {
				resolve({ 
					data: [ 
						{id: 1, title: 'Finish Homework', isCompleted: false},
						{id: 2, title: 'Complete Resume', isCompleted: false},
						{id: 3, title: 'Read Book', isCompleted: true},
					]
				})
			}, 2000)
		})
	}
}

export default API