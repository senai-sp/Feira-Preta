import React, { Component } from 'react'
import Form from './components/Form'
import Features from './components/Features'
import './App.css'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <main>
        <h1 className="title">Destaques</h1>
        <Form />
        <Features />
        <Card image="http://www.telesintese.com.br/wp-content/uploads/2015/09/OGB-INSIDER-BLOGS-GoogleLogox2-Animated.gif" text="Teste de texto" user="Camila IBS" />
      </main>
    )
  }
}

export default App;
