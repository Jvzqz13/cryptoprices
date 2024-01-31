import './App.css';

import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Prices from './pages/Prices';

function App() {
  return (
    <div className="App">
      <h1> Crypto </h1>
      
      <Routes>

        <Route path="/" element={<Main/>}/>;
        <Route path='/currencies' element={<Currencies/>} />;
        <Route path='/prices' element={<Prices />}/>;

      </Routes>
    </div>
  );
}

export default App;
