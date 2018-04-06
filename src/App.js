import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Highlight from './components/Pages/Highlight'
import Entrepreneurs from './components/Pages/Entrepreneurs'
import Posts from './components/Pages/Posts'
import NotFound from './components/Pages/NotFound'
import './App.css'


const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/destaques" component={Highlight} />
      <Route path="/empreendedores" component={Entrepreneurs} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default App;