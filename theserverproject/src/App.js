import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing';

import './AppCssColors.css'
import './App.css';

function App() {
  return (
    <div id="page-content">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
