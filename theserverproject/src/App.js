import React from 'react';
import Navbar from './pages/Home/components/Navbar/Navbar';
import Landing from './pages/Home/components/Landing/Landing';
import Footer from './pages/Home/components/Footer/Footer';

// Import App CSS classes.
import './AppCssColors.css';
import './App.css';

//Import Home Page CSS classes.
import './pages/Home/HomePageVariables.css';

function App() {
    return (
        <div id="page-content">
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    );
}

export default App;
