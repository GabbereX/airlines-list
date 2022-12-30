import React from 'react'
import ReactDOM from 'react-dom/client'

import { Container } from './components/views/Container'

import './assets/styles/styles.global.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
)
