import './App.css';

import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.js';
import Currencies from './pages/Currencies.js';
import Prices from './pages/Prices.js';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>

        <Route path="/" element={<Main/>}/>;
        <Route path='/currencies' element={<Currencies/>} />;
        <Route path='/prices' element={<Prices />}/>;
        <Route path='/prices/:symbol' element={<Prices />} />

      </Routes>
    </div>
  );
}

export default App;
