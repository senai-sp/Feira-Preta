import React, { Component } from 'react'
import Form from './components/Form'
import Features from './components/Features'
import './App.css'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <h1 className="title">Destaques</h1>
        <Form />
        <Features />
      </main>
    )
  }
}

export default App;
