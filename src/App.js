import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Score from './components/Pages/Score'
import Features from './components/Pages/Features'
import Entrepreneurs from './components/Pages/Entrepreneurs'
import NotFound from './components/Pages/NotFound'
import './App.css'


const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Score} />
      <Route path="/destaques" component={Features} />
      <Route path="/empreendedores" component={Entrepreneurs} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default App;