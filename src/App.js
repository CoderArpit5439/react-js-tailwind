import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import WOW from 'wowjs';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
