import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { UserAuthProvider } from './components/context/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthProvider>
     <App />
  </UserAuthProvider>
  
)
