import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Createpost from './pages/createpost'
import Feed from './pages/feed'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>hellloooo babuuu </h1>}/>
        <Route path="/aboutus" element={<h1>hellloooo babuuu </h1>}/>
        <Route path="/createpost" element={<Createpost/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App