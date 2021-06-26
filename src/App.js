import React from 'react'
import { Route, BrowserRouter as Router, Switch,Redirect, Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Detailspage from './Detailspage'

export default function App () {
return (
 
<Router>
    <div>
      <Route exact path="/" component={() => (<Redirect to='/dashboard' />)} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Detailspage} />
    </div>
  </Router>
)
}