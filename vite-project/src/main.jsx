import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import IdState from './components/IdState';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdState>
      <Router>
        <App />
      </Router>
    </IdState>
  </React.StrictMode>,
)
