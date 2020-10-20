import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'

class App extends Component {
  handleCardClick(card) {
    console.log(card, 'clicked')
  }
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {/*La carte est masquée */}
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        {/* La carte fait partie de la tentative en cours, qui vient de réussir une paire */}
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        {/* La carte fait partie de la tentative en cours, qui vient de rater une paire */}
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
        {/* La carte appartient à une paire précédemment réussie */}
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
      </div>
    )
  }
}

export default App