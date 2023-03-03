import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact={true} path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
