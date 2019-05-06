import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './dashboard' 
import 'antd/dist/antd.css'
import './layouts/app.css'

const App = () => {
    return (
        <Router>
        	{Routes.map( (r, i) => <Route exact key={i} path={r.path} component={r.render} />)}
        </Router>
    )
}
export default App;
