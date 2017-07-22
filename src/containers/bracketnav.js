import React from 'react'
import { connect } from 'react-redux'
import BracketNav from '../components/bracketnav'
import { bracketIdChange } from '../actions/voting'

const mapStateToProps = state => {
  return {
    bracketId: state.voting.bracketId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bracketCodeUpdate: (e) => {
      dispatch(bracketIdChange(e.target.value))
    },
  }
}

const retVal = connect(
  mapStateToProps,
  mapDispatchToProps)(BracketNav)

export default retVal