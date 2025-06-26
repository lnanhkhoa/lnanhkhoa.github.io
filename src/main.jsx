import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import './main.css'

library.add(faUser, faGoogle, faLinkedinIn, faGithub)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
