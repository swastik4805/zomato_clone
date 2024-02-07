import './App.css'
import { Homepage } from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import { BestLuxuryDiningPLaces } from './pages/Collections/BestLuxuryDiningPlaces'
import { BestBarsAndPubs } from './pages/Collections/BestBarsAndPubs'
import { RestaurantName } from './pages/RestaurantName'
import { PlacesForAuthenticOdiaCuisine } from './pages/Collections/PlacesForAuthenticOdiaCuisine'
import { SereneRooftopPlaces } from './pages/Collections/SereneRooftopPlaces'
import { ClassicBiryaniPlaces} from './pages/Collections/ClassicBiryaniPlaces'
import { PlacesforSouthIndianDelicacies } from './pages/Collections/PlacesforSouthIndianDelicacies'

function App() {

  return (
    <>
    <Routes>
      {/* <Homepage></Homepage> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/BestLuxuryDiningPlaces" element={<BestLuxuryDiningPLaces/>}></Route>
      <Route path="/BestBarsAndPubs" element={<BestBarsAndPubs/>}></Route>
      <Route path="/PlacesForAuthenticOdiaCuisine" element={<PlacesForAuthenticOdiaCuisine></PlacesForAuthenticOdiaCuisine>}></Route>
      <Route path="/SereneRooftopPlaces" element={<SereneRooftopPlaces></SereneRooftopPlaces>}></Route>
      <Route path='/ClassicBiryaniPlaces' element={<ClassicBiryaniPlaces></ClassicBiryaniPlaces>}></Route>
      <Route path='/PlacesforSouthIndianDelicacies' element={<PlacesforSouthIndianDelicacies></PlacesforSouthIndianDelicacies>}></Route>

      {/* <Route path="/:collectionName" element={<CollectionName title1={" Best Luxury Dining Places"}
      title2={"Restaurants that are unmatched on multiple fronts with luxurious indoor settings and extravagant menus"}></CollectionName>}></Route> */}
      <Route path="/restaurant/:restaurantName" element={<RestaurantName/>}></Route>
      </Routes>
    </>
  )
}

export default App
