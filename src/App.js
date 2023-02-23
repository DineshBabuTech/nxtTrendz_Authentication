import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-body">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
