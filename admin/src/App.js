import React, { Component } from 'react'
import Form from './components/Form'
import Features from './components/Features'
import './App.css'

class App extends Component {
  render() {
    return (
      <main>
        <h1 className="title">Destaques</h1>
        <Form />
        <Features />
      </main>
    )
  }
}

export default App;
