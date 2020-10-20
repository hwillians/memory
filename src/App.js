import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'

class App extends Component {
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {/*La carte est masquée */}
        <Card card="😀" feedback="hidden" />
        {/* La carte fait partie de la tentative en cours, qui vient de réussir une paire */}
        <Card card="🎉" feedback="justMatched" />
        {/* La carte fait partie de la tentative en cours, qui vient de rater une paire */}
        <Card card="💖" feedback="justMismatched" />
        {/* La carte appartient à une paire précédemment réussie */}
        <Card card="🎩" feedback="visible" />
        <Card card="🐶" feedback="hidden" />
        <Card card="🐱" feedback="justMatched" />
      </div>
    )
  }
}

export default App