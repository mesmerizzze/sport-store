import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import Homepage from './pages/homepage/homepage'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
