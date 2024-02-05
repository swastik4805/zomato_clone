import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Homepage } from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import { BestLuxuryDiningPLaces } from './pages/Collections/BestLuxuryDiningPlaces'
import { BestBarsAndPubs } from './pages/Collections/BestBarsAndPubs'
import { RestaurantName } from './pages/RestaurantName'

function App() {

  return (
    <>
    <Routes>
      {/* <Homepage></Homepage> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/BestLuxuryDiningPlaces" element={<BestLuxuryDiningPLaces/>}></Route>
      <Route path="/BestBarsAndPubs" element={<BestBarsAndPubs/>}></Route>
      <Route path="/restaurant/:restaurantName" element={<RestaurantName/>}></Route>
      </Routes>
    </>
  )
}

export default App
