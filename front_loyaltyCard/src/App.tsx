import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Cards from './Pages/Cards.js';
import Home from './Pages/Home.js';
import InfoCard from './Pages/InfoCard.js';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/infoCard" element={<InfoCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
