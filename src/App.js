import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import WOW from 'wowjs';
import { useEffect } from 'react';
import Routers from './routers';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
