
import React from 'react'
import PropTypes from 'prop-types'
import './GuessCount.css'

const GuessCount = ({ guess }) => <div className="guesses">{guess}</div>
GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}
export default GuessCount