import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import cssVars from 'css-vars-ponyfill'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Container } from './components/views/Container'

import './assets/styles/styles.global.scss'

cssVars()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
)
