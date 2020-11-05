import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import Homepage from './pages/homepage/homepage'
import CollectionPage from './pages/collection-page/collection-page'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/:collection" component={CollectionPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
