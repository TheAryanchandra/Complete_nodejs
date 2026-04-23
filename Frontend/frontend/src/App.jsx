import React from 'react'

import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>hellloooo babuuu </h1>}/>
        <Route path="/aboutus" element={<h1>hellloooo babuuu </h1>}/>
      </Routes>
    </Router>
  )
}

export default App