import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'

window.onload = () => {
  render(
    <Main/>,
    document.getElementById('app')
  )
}
