import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import Signup from './pages/signup/Signup.jsx'
import Signin from './pages/signup/Login.jsx'
import Interview from './interview/Interview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    {/* <Signup/> */}
    {/* <Signin/> */}
    {/* <Interview/> */}
  </Provider>,
)
