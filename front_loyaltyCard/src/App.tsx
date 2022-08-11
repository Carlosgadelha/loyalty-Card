import {BrowserRouter,Routes, Route} from 'react-router-dom';
import AddPoints from './Pages/AddPoints.js';
import Business from './Pages/Business.js';
import Cards from './Pages/Cards.js';
import Home from './Pages/Home.js';
import InfoCard from './Pages/InfoCard.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import NewBusiness from './Pages/NewBusiness.js';
import NewPromotion from './Pages/NewPromotion.js';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/infoCard" element={<InfoCard />} />
          <Route path="/business" element={<Business />} />
          <Route path="/newBusiness" element={<NewBusiness />} />
          <Route path="/newPromotion" element={<NewPromotion />} />
          <Route path="/addPoints" element={<AddPoints />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
