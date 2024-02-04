import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Homepage } from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import { BestLuxuryDiningPLaces } from './pages/BestLuxuryDiningPlaces'

function App() {

  return (
    <>
    <Routes>
      {/* <Homepage></Homepage> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/BestLuxuryDiningPlaces" element={<BestLuxuryDiningPLaces/>}></Route>
      </Routes>
    </>
  )
}

export default App
